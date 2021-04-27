# mockServer

轻量快速的前端接口模拟服务

本项目采用自写接口的方法来模拟前端接口，在`webpack`项目中配置`proxy`即可。小程序项目配置开发环境`不校验合法域`名

## usage

```shell
npm install

npm run mock
```


webpack项目示例 

```javascript
proxy: {
  '/mock': {
    target:"localhost:8089",
    changeOrigin: true
}
```
小程序项目

![](https://gitee.com/maYunLaoXi/image/raw/master/blog/2021/WeChatc5bce373f98efae6fd6111dc7a7160f5.png)
欢迎start和issue