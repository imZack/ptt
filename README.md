# ptt [![Build Status](https://travis-ci.org/imZack/ptt.svg?branch=master)](https://travis-ci.org/imZack/ptt)
Play PTT with JavaScript

## Install
```sh
λ ~/ npm install ptt
```

## Get Articles from Board

```json
{
  "nextPageUrl": "https://www.ptt.cc/bbs/Gossiping/index9966.html",
  "articles": [
    {
      "title": "[尋人] 桃園中壢 黑色外套 老婦人 失智症走失",
      "date": 1454169600000,
      "author": "muse1628",
      "push": 27,
      "url": "https://www.ptt.cc/bbs/Gossiping/M.1454212604.A.183.html"
    },
    {
      "title": "[尋人] 台中50歲婦人",
      "date": 1454169600000,
      "author": "BleuCiel69",
      "push": 28,
      "url": "https://www.ptt.cc/bbs/Gossiping/M.1454239645.A.D72.html"
    },
    {
      "title": "[公告] 一月置底閒聊區 訟棍出沒請詳閱#1MgRnxwZ",
      "date": 1451750400000,
      "author": "Leeng",
      "push": 19,
      "url": "https://www.ptt.cc/bbs/Gossiping/M.1451818509.A.5BD.html"
    }
  ]
}
```


### Get Article from link

```json
{
  "title": "Fw: [公告] 網頁版更換憑證商",
  "content": "\n※ [本文轉錄自 SYSOP 看板 #1MQJzS9V ]\n\n作者: robertabcd (robert) 看板: SYSOP\n標題: [公告] 網頁版更換憑證商\n時間: Thu Dec 10 17:01:13 2015\n\n網頁版已更換至新的憑證, 由 Let's Encrypt 簽發,\n已知下列舊版的瀏覽器會有無法瀏覽的情形,\n錯誤訊息可能為「憑證錯誤」等.\n\n- Windows XP SP3 或更舊版之作業系統\n- Android 2.3.5 或更舊版之作業系統\n- Blackberry OS 10, 7, & 6\n- Nintendo 3DS\n詳細列表可見 Let's Encrypt 官方網站討論:\nhttps://community.letsencrypt.org/t/which-browsers-and-operating-systems-support-lets-encrypt/4394\n\n如遇到此問題, 請升級您的作業系統.\n\n--\n※ 發信站: 批踢踢實業坊(ptt.cc), 來自: 140.112.30.38\n※ 文章網址: https://www.ptt.cc/bbs/SYSOP/M.1449738076.A.25F.html\n※ s5048218:轉錄至看板 PttNewhand                                  12/10 17:03\n※ s5048218:轉錄至看板 PttHistory                                  12/10 17:05\n※ holishing:轉錄至看板 ask                                        12/10 17:58\n※ hateOnas:轉錄至看板 Gossiping                                   12/10 18:06\n推 hateOnas: http://tinyurl.com/h5273w3 短網址   114.45.16.32 12/10 18:07\n\n※ 發信站: 批踢踢實業坊(ptt.cc)\n※ 轉錄者: wens (140.112.30.76), 12/10/2015 18:08:38\n",
  "date": 1449742118000,
  "author": "wens (文思)",
  "boardName": "Announce",
  "images": []
}
```

## License
[MIT](http://yulun.mit-license.org/)
