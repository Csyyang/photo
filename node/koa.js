const koa = require('koa');
const session = require("koa-session");
const router = require('./router/index.js')
const bodyParser = require('koa-bodyparser'); //post请求
const path = require('path');//koa-static 依赖
const statics = require('koa-static');//设置静态文件目录
const session_configs = require('./config.js');//session配置文件


const app = new koa();
app.use(statics(
    path.join(__dirname, './dist')
))

app.keys = session_configs.session_signed_key;
app.use(session(session_configs.session_config, app))//使用session
app.use(bodyParser())
//权限白名单
var pass = ['/index', '/login','/isLogin','/']
app.use(async (ctx, next) => {//前置登录校验
    var CanNum = pass.indexOf(ctx.url);
    console.log(ctx.url)
    if (CanNum == "-1") {
        console.log(ctx.session.user)
        if (!ctx.session.user) {
            ctx.response.body = {
                code: "03",//未登录
                text: "请登录后再试",
                state: false
            }
        } else {
            await next();
        }
    } else {
        await next();
    }
});



app.use(router.routes()).listen(8080);

