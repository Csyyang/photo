const router = require('koa-router')();
const getImageFiles = require('../getImage')
const multer = require('koa-multer')

var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'dist/image/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });

var person = {
    csy: "202020",
    jjj: "202020"
}
//测试接口
router.post('/test', (ctx, next) => {
    // console.log(ctx.req)
    ctx.response.body = {
        code: "00"
    }
})
router.get('/', (ctx,next) => {
    ctx.response.redirect('/dist');
})
//获取图片
router.post('/getImage', async (ctx, next) => {
    var names = await getImageFiles("./dist/image/");
    var urls = names.map((item, index) => {
        return "/image/" + item;
    })
    console.log(urls)
    ctx.response.body = await {
        code: "00",
        text: "获取图片成功",
        urls
    };
})
//上传图片
router.post('/upLoadImg', upload.single('file'), async (ctx, next) => {
    console.log(ctx.req.file)
    ctx.response.body = {
        code: '00',
        message: {
            url: 'image/' + ctx.req.file.filename,
            name: ctx.req.file.filename
        },
    }
})
//查询是否已经登录
router.post('/isLogin', async (ctx, next) => {
    if (ctx.session.user) {
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
        console.log(cusr)
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
