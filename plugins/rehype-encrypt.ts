import crypto from 'node:crypto'
import { toHtml } from 'hast-util-to-html'
import type { RehypePlugin } from '@astrojs/markdown-remark'
import type { Root, Element } from 'hast'

const ALGORITHM = 'aes-256-gcm'
const PBKDF2_ITERATIONS = 100000
const KEY_LENGTH = 32
const IV_LENGTH = 12
const SALT_LENGTH = 16

function encryptContent(password: string, html: string) {
  const salt = crypto.randomBytes(SALT_LENGTH)
  const iv = crypto.randomBytes(IV_LENGTH)

  const key = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_LENGTH, 'sha256')

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
  let encrypted = cipher.update(html, 'utf8', 'base64')
  encrypted += cipher.final('base64')
  const authTag = cipher.getAuthTag().toString('base64')

  return {
    encrypted,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    authTag,
  }
}

const rehypeEncrypt: RehypePlugin = () => {
  return (tree: Root, file: any) => {
    const frontmatter = file.data?.astro?.frontmatter
    if (!frontmatter?.password) return

    const html = toHtml(tree as any, { allowDangerousHtml: true })
    if (!html.trim()) return

    const { encrypted, salt, iv, authTag } = encryptContent(frontmatter.password, html)

    tree.children = [
      {
        type: 'element',
        tagName: 'div',
        properties: {
          id: 'encrypted-content',
          'data-encrypted': encrypted,
          'data-salt': salt,
          'data-iv': iv,
          'data-auth-tag': authTag,
        },
        children: [],
      } as Element,
    ]
  }
}

export default rehypeEncrypt
