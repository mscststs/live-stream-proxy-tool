#!/usr/bin/env node

const http = require('http');
const https = require('https');

const args = process.argv;
const port = parseInt(args.pop()) || 3000;


http.createServer(onRequest).listen(port);

function onRequest(client_req, client_res) {
  try{

    let target = new URL(client_req.url.slice(1));
    var options = {
      protocol: target.protocol,
      headers: {
        "User-Agent":"-",
        "referer":"-"
      }
    };
  
    var proxy = (target.protocol === "https:" ? https : http).request(target, options, function (res) {
      client_res.writeHead(res.statusCode, res.headers)
      res.pipe(client_res, {
        end: true
      });
    });
  
    client_req.pipe(proxy, {
      end: true
    }).on("end", function(){
      proxy.end();
    });
  }catch(e){
    console.log(e);
  }
}