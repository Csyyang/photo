const router = require('koa-router')();
const getImage = require('../getImage')

var person = {
    csy: "202020",
    jjj: "202020"
}
//测试接口
router.post('/test', async (ctx, next) => {
    var a = getImage.getImageFiles("./dist/img/")
    console.log(a)
    ctx.response.body = {
        code: "00"
    }
})
//获取图片
router.post('/getImage', async (ctx, next) => {
    var names = getImage.getImageFiles("./dist/image/");
    var urls = names.map((item,index) => {
        return "./image/" + item;
    })
    ctx.response.body = {
        code: "00",
        text: "获取图片成功",
        urls: urls
    };
})
//查询是否已经登录
router.post('/isLogin', async (ctx,next) => {
    if(ctx.session.user) {
        ctx.response.body = {
            code: "00",
            text: "已登录",
            state: true
        }
    } else {
        ctx.response.body = {
            code: "03",
            text: "未登录",
            state: false
        }
    }
})
//登录接口
router.post('/login', async (ctx, next) => {
    if (ctx.session.user) {
        console.log(ctx.session.user)
        ctx.response.body = {
            code: "00",
            text: "已登录"
        }
    } else {
        var cusr = ctx.request.body.user;
        var password = ctx.request.body.password
        if (password != undefined && password == person[cusr]) {
            ctx.session.user = cusr;
            ctx.response.body = {
                code: "00",
                text: "登录成功"
            }
        } else {
            ctx.response.body = {
                code: "01",
                text: "账号密码不匹配"
            }
        }
    }
})
module.exports = router;
