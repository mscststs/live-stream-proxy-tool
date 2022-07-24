## live-stream-proxy-tool 使用方式


1. 根据的你的系统，下载安装 Nodejs; [Nodejs 官网](https://nodejs.org/)

2. 打开命令行工具，执行以下命令
```bash
// 安装
npm install -g live-stream-proxy-tool

// 运行 3521 也可以换成任意参数，不传的话默认为 3000
live-stream-proxy-tool 3521
```

当看到 `[ live-stream-proxy-tool ] serve at: 3521` 时说明服务正常启动。

## 修改 protocol

回到直播间页面，修改“直播流获取”的“外部播放器协议”

例如： `potplayer://` 修改为 `potplayer://http://localhost:3521/`

其他协议参照例子进行修改

