## 1. 使用方式


1. 根据的你的系统，下载安装 Nodejs; [Nodejs 官网](https://nodejs.org/)

2. 打开命令行工具，执行以下命令
    ```bash
    // 安装
    npm install -g live-stream-proxy-tool

    // 运行 3521 也可以换成任意参数，不传的话默认为 3000
    live-stream-proxy-tool 3521
    ```

    看到以下信息说明服务正常启动。
    ```
    [ live-stream-proxy-tool ] serve at: 3521
    ```

     
    **该项目相当于在 Nginx 中配置动态代理：**  
    如果你不想安装 node，也可以在你本地 Nginx 进行如下配置。
    ```ini
        # 在 server 内配置以下规则
        resolver 114.114.114.114 valid=10s;
        set $proxy_url ""; # 后端页面地址
        if ( $request_uri ~* "^/(.*)$" ) {
            set $proxy_url "$1";
        }
        location / {
            proxy_pass $proxy_url;
            proxy_set_header referer "-";
            proxy_set_header User-Agent "-";
        }
    ```

## 2. 修改 protocol

回到直播间页面，修改“直播流获取”的“外部播放器协议”

例如： `potplayer://` 修改为 `potplayer://http://localhost:3521/`

其他协议参照例子进行修改

