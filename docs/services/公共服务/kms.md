---
title: 在线 KMS 激活
---


# Windows 和 Office KMS 激活服务器

**KMS 主机服务器：`kms.akams.cn`**


<!-- > [!TIP]
>
> 同时支持 IPv4 与 IPv6 访问 -->


- 支持 Windows 零售版（Retail）和 批量版（Volume）激活。

- 支持 Office 批量版（Volume）激活，零售必须先转换为批量。



## Windows

**以管理员身份**运行「命令提示符」或者「PowerShell」，运行在[`kms.akams.cn`](https://akams.cn/kms)选择对应Windows版本后生成的命令



## Office

由于 Office 版本较多，不同版本 Office 的激活略为复杂，推荐使用 **[Office Tool Plus](https://otp.landian.vip/zh-cn/)** 软件进行安装和激活。


激活 Office：

- 激活--->许可证管理--->安装许可证
- 激活--->KMS 管理--->KMS 主机填入`kms.akams.cn`--->点击`设置主机`
- 激活--->许可证管理--->点击`激活`


手动激活 Office：

**以管理员身份**运行「命令提示符」或者「PowerShell」，输入以下命令：

```cmd
cd "C:\Program Files\Microsoft Office\Office16"  # 进入 Office 安装目录
cscript ospp.vbs /inpkey:{对应Office产品密钥}      # 设置新密钥
cscript ospp.vbs /sethst:kms.akams.cn            # 设置KMS服务器
cscript ospp.vbs /act                            # 立即尝试激活
cscript ospp.vbs /dstatus                        # 查看激活状态
```

---



## Windows 通用批量许可证密钥 (GVLK) 对照表(以下内容来自微软官方公开的序列号，请放心使用)

### Windows 11 和 Windows 10

| **Product**                                                  | **GVLK**                      |
| ------------------------------------------------------------ | ----------------------------- |
| Windows 10 Professional (Windows 10 专业版) <br />Windows 11 Professional (Windows 11 专业版) | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Windows 10 Professional N (Windows 10 专业版 N) <br />Windows 11 Professional N (Windows 11 专业版 N) | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Windows 10 Pro for Workstations (Windows 10 专业工作站版) <br />Windows 11 Pro for Workstations (Windows 11 专业工作站版) | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Windows 10 Pro for Workstations N (Windows 10 专业工作站版 N) <br />Windows 11 Pro for Workstations N (Windows 11 专业工作站版 N) | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| Windows 10 Pro Education (Windows 10 专业教育版) <br />Windows 11 Pro Education (Windows 11 专业教育版) | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Windows 10 Pro Education N (Windows 10 专业教育版 N) <br />Windows 11 Pro Education N (Windows 11 专业教育版 N) | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Windows 10 Education (Windows 10 教育版) <br />Windows 11 Education (Windows 11 教育版) | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Windows 10 Education N (Windows 10 教育版 N) <br />Windows 11 Education N (Windows 11 教育版 N) | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Windows 10 Enterprise (Windows 10 企业版) <br />Windows 11 Enterprise (Windows 11 企业版) | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Windows 10 Enterprise N (Windows 10 企业版 N)<br /> Windows 11 Enterprise N (Windows 11 企业版 N) | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Windows 10 Enterprise G (Windows 10 企业版 G)<br /> Windows 11 Enterprise G (Windows 11 企业版 G) | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Windows 10 Enterprise G N (Windows 10 企业版 G N) <br />Windows 11 Enterprise G N (Windows 11 企业版 G N) | 44RPN-FTY23-9VTTB-MP9BX-T84FV |

### Windows 企业版 （LTSC/LTSB 版本）

| **Product**                                                  | **GVLK**                      |
| ------------------------------------------------------------ | ----------------------------- |
| Windows 11 Enterprise LTSC 2024 <br />Windows 10 Enterprise LTSC 2021 <br />Windows 10 Enterprise LTSC 2019 | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Windows 11 Enterprise N LTSC 2024 <br />Windows 10 Enterprise N LTSC 2021<br /> Windows 10 Enterprise N LTSC 2019 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Windows IoT Enterprise LTSC 2024 <br />Windows IoT Enterprise LTSC 2021 | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Windows 10 Enterprise 2016 LTSB                              | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Windows 10 Enterprise N LTSB 2016                            | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |
| Windows 10 Enterprise 2015 LTSB                              | WNMTR-4C88C-JK8YV-HQ7T2-76DF9 |
| Windows 10 Enterprise 2015 LTSB N                            | 2F77B-TNFGY-69QQF-B8YKP-D69TJ |

### Windows 8.1

| **Product**                | **GVLK**                      |
| -------------------------- | ----------------------------- |
| Windows 8.1 Professional   | GCRJD-8NW9H-F2CDX-CCM8D-9D6T9 |
| Windows 8.1 Professional N | HMCNV-VVBFX-7HMBH-CTY9B-B4FXY |
| Windows 8.1 Enterprise     | MHF9N-XY6XB-WVXMC-BTDCT-MKKG7 |
| Windows 8.1 Enterprise N   | TT4HM-HN7YT-62K67-RGRQJ-JFFXW |

### Windows 8

| **Product**              | **GVLK**                      |
| ------------------------ | ----------------------------- |
| Windows 8 Professional   | NG4HW-VH26C-733KW-K6F98-J8CK4 |
| Windows 8 Professional N | XCVCF-2NXM9-723PB-MHCB7-2RYQQ |
| Windows 8 Enterprise     | 32JNW-9KQ84-P47T8-D8GGY-CWCK7 |
| Windows 8 Enterprise N   | JMNMF-RHW7P-DMY6X-RF3DR-X2BQT |

### Windows 7

| **Product**              | **GVLK**                      |
| ------------------------ | ----------------------------- |
| Windows 7 Professional   | FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4 |
| Windows 7 Professional N | MRPKT-YTG23-K7D7T-X2JMM-QY7MG |
| Windows 7 Professional E | W82YF-2Q76Y-63HXB-FGJG9-GF7QX |
| Windows 7 Enterprise     | 33PXH-7Y6KF-2VJC9-XBBR8-HVTHH |
| Windows 7 Enterprise N   | YDRBP-3D83W-TY26F-D46B2-XCKRJ |
| Windows 7 Enterprise E   | C29WB-22CC8-VJ326-GHFJW-H9DH4 |

### Windows Vista

| **Product**                | **GVLK**                      |
| -------------------------- | ----------------------------- |
| Windows Vista Business     | YFKBB-PQJJV-G996G-VWGXY-2V3X8 |
| Windows Vista Business N   | HMBQG-8H2RH-C77VX-27R82-VMQBT |
| Windows Vista Enterprise   | VKK3X-68KWM-X2YGT-QR4M6-4BWMV |
| Windows Vista Enterprise N | VTC42-BM838-43QHV-84HX6-XJXKV |

### Windows Server 2025

| **Product**                                   | **GVLK**                      |
| :-------------------------------------------- | :---------------------------- |
| Windows Server 2025 Standard                  | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter                | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2025 Datacenter：Azure Edition | XGN3F-F394H-FD2MY-PP6FD-8MCRC |

### Windows Server 2022

| **Product**                                   | **GVLK**                      |
| --------------------------------------------- | ----------------------------- |
| Windows Server 2022 Standard                  | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Datacenter                | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Datacenter：Azure Edition | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |

### Windows Server 2019

| **Product**                    | **GVLK**                      |
| ------------------------------ | ----------------------------- |
| Windows Server 2019 Standard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Datacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Essentials | WVDHN-86M7X-466P6-VHXV7-YY726 |

### Windows Server 2016

| **Product**                    | **GVLK**                      |
| ------------------------------ | ----------------------------- |
| Windows Server 2016 Standard   | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Datacenter | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Essentials | JCKRF-N37P4-C2D82-9YXRT-4M63B |

### Windows Server 20H2、2004、1909、1903 和 1809

| **Product**               | **GVLK**                      |
| ------------------------- | ----------------------------- |
| Windows Server Standard   | N2KJX-J94YW-TQVFB-DG9YT-724CC |
| Windows Server Datacenter | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |

### Windows Server 1803

| **Product**               | **GVLK**                      |
| ------------------------- | ----------------------------- |
| Windows Server Standard   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |
| Windows Server Datacenter | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |

### Windows Server 1709

| **Product**               | **GVLK**                      |
| ------------------------- | ----------------------------- |
| Windows Server Standard   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |
| Windows Server Datacenter | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |

### Windows Server 2012 R2

| **Product**                       | **GVLK**                      |
| --------------------------------- | ----------------------------- |
| Windows Server 2012 R2 Standard   | D2N9P-3P6X9-2R39C-7RTCD-MDVJX |
| Windows Server 2012 R2 Datacenter | W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9 |
| Windows Server 2012 R2 Essentials | KNC87-3J2TX-XB4WP-VCPJV-M4FWM |

### Windows Server 2012

| **Product**                             | **GVLK**                      |
| --------------------------------------- | ----------------------------- |
| Windows Server 2012                     | BN3D2-R7TKB-3YPBD-8DRP2-27GG4 |
| Windows Server 2012 N                   | 8N2M2-HWPGY-7PGT9-HGDD8-GVGGY |
| Windows Server 2012 Single Language     | 2WN2H-YGCQR-KFX6K-CD6TF-84YXQ |
| Windows Server 2012 Country Specific    | 4K36P-JN4VD-GDC6V-KDT89-DYFKP |
| Windows Server 2012 Standard            | XC9B7-NBPP2-83J2H-RHMBY-92BT4 |
| Windows Server 2012 MultiPoint Standard | HM7DN-YVMH3-46JC3-XYTG7-CYQJJ |
| Windows Server 2012 MultiPoint Premium  | XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G |
| Windows Server 2012 Datacenter          | 48HP8-DN98B-MYWDG-T2DCC-8W83P |
| Windows Server 2012 Essentials          | HTDQM-NBMMG-KGYDT-2DTKT-J2MPV |

### Windows Server 2008 R2

| **Product**                                      | **GVLK**                      |
| ------------------------------------------------ | ----------------------------- |
| Windows Server 2008 R2 Web                       | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4 |
| Windows Server 2008 R2 HPC edition               | TT8MH-CG224-D3D7Q-498W2-9QCTX |
| Windows Server 2008 R2 Standard                  | YC6KT-GKW9T-YTKYR-T4X34-R7VHC |
| Windows Server 2008 R2 Enterprise                | 489J6-VHDMP-X63PK-3K798-CPX3Y |
| Windows Server 2008 R2 Datacenter                | 74YFP-3QFB3-KQT8W-PMXWJ-7M648 |
| Windows Server 2008 R2 for Itanium-based Systems | GT63C-RJFQ3-4GMB6-BRFB9-CB83V |

### Windows Server 2008

| **Product**                                    | **GVLK**                      |
| ---------------------------------------------- | ----------------------------- |
| Windows Web Server 2008                        | WYR28-R7TFJ-3X2YQ-YCY4H-M249D |
| Windows Server 2008 Standard                   | TM24T-X9RMF-VWXK6-X8JC9-BFGM2 |
| Windows Server 2008 Standard without Hyper-V   | W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ |
| Windows Server 2008 Enterprise                 | YQGMW-MPWTJ-34KDK-48M3W-X4Q6V |
| Windows Server 2008 Enterprise without Hyper-V | 39BXF-X8Q23-P2WWT-38T2F-G3FPG |
| Windows Server 2008 HPC                        | RCTX3-KWVHP-BR6TB-RB6DM-6X7HP |
| Windows Server 2008 Datacenter                 | 7M67G-PC374-GR742-YH8V4-TCBY3 |
| Windows Server 2008 Datacenter without Hyper-V | 22XQ2-VRXRG-P8D42-K34TD-G3QQC |
| Windows Server 2008 for Itanium-Based Systems  | 4DWFP-JF3DJ-B7DTH-78FJB-PDRHK |



---



## Office 通用批量许可证密钥 (GVLK) 对照表 (以下内容来自微软官方公开的序列号，请放心使用)

### Office LTSC 2024

| **Product**                        | **GVLK**                      |
| ---------------------------------- | ----------------------------- |
| Office LTSC Professional Plus 2024 | XJ2XN-FW8RK-P4HMP-DKDBV-GCVGB |
| Office LTSC Standard 2024          | V28N4-JG22K-W66P8-VTMGK-H6HGR |
| Project Professional 2024          | FQQ23-N4YCY-73HQ3-FM9WC-76HF4 |
| Project Standard 2024              | PD3TT-NTHQQ-VC7CY-MFXK3-G87F8 |
| Visio LTSC Professional 2024       | B7TN8-FJ8V3-7QYCP-HQPMV-YY89G |
| Visio LTSC Standard 2024           | JMMVY-XFNQC-KK4HK-9H7R3-WQQTV |
| Access LTSC 2024                   | 82FTR-NCHR7-W3944-MGRHM-JMCWD |
| Excel LTSC 2024                    | F4DYN-89BP2-WQTWJ-GR8YC-CKGJG |
| Outlook LTSC 2024                  | D2F8D-N3Q3B-J28PV-X27HD-RJWB9 |
| PowerPoint LTSC 2024               | CW94N-K6GJH-9CTXY-MG2VC-FYCWP |
| Skype for Business LTSC 2024       | 4NKHF-9HBQF-Q3B6C-7YV34-F64P3 |
| Word LTSC 2024                     | MQ84N-7VYDM-FXV7C-6K7CC-VFW9J |

### Office LTSC 2021

| **Product**                        | **GVLK**                      |
| ---------------------------------- | ----------------------------- |
| Office LTSC Professional Plus 2021 | FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH |
| Office LTSC Standard 2021          | KDX7X-BNVR8-TXXGX-4Q7Y8-78VT3 |
| Project Professional 2021          | FTNWT-C6WBT-8HMGF-K9PRX-QV9H8 |
| Project Standard 2021              | J2JDC-NJCYY-9RGQ4-YXWMH-T3D4T |
| Visio LTSC Professional 2021       | KNH8D-FGHT4-T8RK3-CTDYJ-K2HT4 |
| Visio LTSC Standard 2021           | MJVNY-BYWPY-CWV6J-2RKRT-4M8QG |
| Access LTSC 2021                   | WM8YG-YNGDD-4JHDC-PG3F4-FC4T4 |
| Excel LTSC 2021                    | NWG3X-87C9K-TC7YY-BC2G7-G6RVC |
| Outlook LTSC 2021                  | C9FM6-3N72F-HFJXB-TM3V9-T86R9 |
| PowerPoint LTSC 2021               | TY7XF-NFRBR-KJ44C-G83KF-GX27K |
| Publisher LTSC 2021                | 2MW9D-N4BXM-9VBPG-Q7W6M-KFBGQ |
| Skype for Business LTSC 2021       | HWCXN-K3WBT-WJBKY-R8BD9-XK29P |
| Word LTSC 2021                     | TN8H9-M34D3-Y64V9-TR72V-X79KV |

### Office 2019

| **Product**                   | **GVLK**                      |
| ----------------------------- | ----------------------------- |
| Office Professional Plus 2019 | NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP |
| Office Standard 2019          | 6NWWJ-YQWMR-QKGCB-6TMB3-9D9HK |
| Project Professional 2019     | B4NPR-3FKK7-T2MBV-FRQ4W-PKD2B |
| Project Standard 2019         | C4F7P-NCP8C-6CQPT-MQHV9-JXD2M |
| Visio Professional 2019       | 9BGNQ-K37YR-RQHF2-38RQ3-7VCBB |
| Visio Standard 2019           | 7TQNQ-K3YQQ-3PFH7-CCPPM-X4VQ2 |
| Access 2019                   | 9N9PT-27V4Y-VJ2PD-YXFMF-YTFQT |
| Excel 2019                    | TMJWT-YYNMB-3BKTF-644FC-RVXBD |
| Outlook 2019                  | 7HD7K-N4PVK-BHBCQ-YWQRW-XW4VK |
| PowerPoint 2019               | RRNCX-C64HY-W2MM7-MCH9G-TJHMQ |
| Publisher 2019                | G2KWX-3NW6P-PY93R-JXK2T-C9Y9V |
| Skype for Business 2019       | NCJ33-JHBBY-HTK98-MYCV8-HMKHJ |
| Word 2019                     | PBX3G-NWMT6-Q7XBW-PYJGG-WXD33 |

### Office 2016

| **Product**                   | **GVLK**                      |
| ----------------------------- | ----------------------------- |
| Office Professional Plus 2016 | XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99 |
| Office Standard 2016          | JNRGM-WHDWX-FJJG3-K47QV-DRTFM |
| Project Professional 2016     | YG9NW-3K39V-2T3HJ-93F3Q-G83KT |
| Project Standard 2016         | GNFHQ-F6YQM-KQDGJ-327XX-KQBVC |
| Visio Professional 2016       | PD3PC-RHNGV-FXJ29-8JK7D-RJRJK |
| Visio Standard 2016           | 7WHWN-4T7MP-G96JF-G33KR-W8GF4 |
| Access 2016                   | GNH9Y-D2J4T-FJHGG-QRVH7-QPFDW |
| Excel 2016                    | 9C2PK-NWTVB-JMPW8-BFT28-7FTBF |
| OneNote 2016                  | DR92N-9HTF2-97XKM-XW2WJ-XW3J6 |
| Outlook 2016                  | R69KK-NTPKF-7M3Q4-QYBHW-6MT9B |
| PowerPoint 2016               | J7MQP-HNJ4Y-WJ7YM-PFYGF-BY6C6 |
| Publisher 2016                | F47MM-N3XJP-TQXJ9-BP99D-8K837 |
| Skype for Business 2016       | 869NQ-FJ69K-466HW-QYCP2-DDBV6 |
| Word 2016                     | WXY84-JN2Q9-RBCCQ-3Q3J3-3PFJ6 |

### Office 2013

| **Product**                   | **GVLK**                      |
| ----------------------------- | ----------------------------- |
| Office 2013 Professional Plus | YC7DK-G2NP3-2QQC3-J6H88-GVGXT |
| Office 2013 Standard          | KBKQT-2NMXY-JJWGP-M62JB-92CD4 |
| Project 2013 Professional     | FN8TT-7WMH6-2D4X9-M337T-2342K |
| Project 2013 Standard         | 6NTH3-CW976-3G3Y2-JK3TX-8QHTT |
| Visio 2013 Professional       | C2FG9-N6J68-H8BTJ-BW3QX-RM3B3 |
| Visio 2013 Standard           | J484Y-4NKBF-W2HMG-DBMJC-PGWR7 |
| Access 2013                   | NG2JY-H4JBT-HQXYP-78QH9-4JM2D |
| Excel 2013                    | VGPNG-Y7HQW-9RHP7-TKPV3-BG7GB |
| InfoPath 2013                 | DKT8B-N7VXH-D963P-Q4PHY-F8894 |
| Lync 2013                     | 2MG3G-3BNTT-3MFW9-KDQW3-TCK7R |
| OneNote 2013                  | TGN6P-8MMBC-37P2F-XHXXK-P34VW |
| Outlook 2013                  | QPN8Q-BJBTJ-334K3-93TGY-2PMBT |
| PowerPoint 2013               | 4NT99-8RJFH-Q2VDH-KYG2C-4RD4F |
| Publisher 2013                | PN2WF-29XG2-T9HJ7-JQPJR-FCXK4 |
| Word 2013                     | 6Q7VD-NX8JD-WJ2VH-88V73-4GBJ7 |

### Office 2010

| **Product**                   | **GVLK**                      |
| ----------------------------- | ----------------------------- |
| Office Professional Plus 2010 | VYBBJ-TRJPB-QFQRF-QFT4D-H3GVB |
| Office Standard 2010          | V7QKV-4XVVR-XYV4D-F7DFM-8R6BM |
| Project Professional 2010     | YGX6F-PGV49-PGW3J-9BTGG-VHKC6 |
| Project Standard 2010         | 4HP3K-88W3F-W2K3D-6677X-F9PGB |
| Visio Standard 2010           | 767HD-QGMWX-8QTDB-9G3R2-KHFGJ |
| Visio Professional 2010       | 7MCW8-VRQVK-G677T-PDJCM-Q8TCP |
| Visio Premium 2010            | D9DWC-HPYVV-JGF4P-BTWQB-WX8BJ |
| Access 2010                   | V7Y44-9T38C-R2VJK-666HK-T7DDX |
| Excel 2010                    | H62QG-HXVKF-PP4HP-66KMR-CW9BM |
| InfoPath 2010                 | K96W8-67RPQ-62T9Y-J8FQJ-BT37T |
| OneNote 2010                  | Q4Y4M-RHWJM-PY37F-MTKWH-D3XHX |
| Outlook 2010                  | 7YDC2-CWM8M-RRTJC-8MDVC-X3DWQ |
| PowerPoint 2010               | RC8FX-88JRY-3PF7C-X8P67-P4VTT |
| Publisher 2010                | BFK7F-9MYHM-V68C7-DRQ66-83YTP |
| SharePoint Workspace 2010     | QYYW6-QP4CB-MBV6G-HYMCJ-4T3J4 |
| Word 2010                     | HVHB3-C6FV7-KQX9W-YQG79-CRY7T |



---



**参考：**

- Windows：https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys
- Office：https://www.coolhub.top/tech-articles/products.html
- https://massgrave.dev/