<template>
  <Waline
    :serverURL="serverURL"
    :path="path"
    :reaction="reaction"
    :locale="locale"
    :emoji="emoji"
    :dark="dark"
  />
</template>
<script setup>
import { Waline } from '@waline/client/component';
import { computed, onMounted } from 'vue';

import '@waline/client/style';

const serverURL = 'https://comment.akams.cn';
const dark = 'html[class="dark"]';
const reaction = [
    "https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_heart_eyes.png",
    "https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_thumbsup.png",
    "https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_zhoumei.png",
    "https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_grievance.png",
    "https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_dizzy_face.png",
    "https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili/bb_slap.png",
];
const locale =  {
            placeholder: "请留言。(填写邮箱可在被回复时收到邮件提醒)",
            reaction0: "非常有用",
            reaction1: "有帮助",
            reaction2: "一般",
            reaction3: "无帮助",
            reaction4: "看不懂",
            reaction5: "有错误",
            reactionTitle: "本站内容对你有帮助吗？",
            sofa: "还没有人留言哦！快来抢沙发吧~",
            comment: "留言",
};
const emoji = [
    'https://cdn.jsdelivr.net/gh/norevi/waline-blobcatemojis@1.0/blobs',
    "https://unpkg.com/@waline/emojis@1.2.0/bmoji",
    "https://unpkg.com/@waline/emojis@1.2.0/bilibili",
    "https://unpkg.com/@waline/emojis@1.2.0/weibo",
    'https://unpkg.com/@waline/emojis@1.2.0/qq',
    'https://unpkg.com/@waline/emojis@1.2.0/tieba',
    'https://unpkg.com/@waline/emojis@1.2.0/alus'
];

onMounted(()=>{
  let path = computed(() => window.location.href);
})
</script>