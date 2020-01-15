const fs = require('fs');

// fs.readdir("./dist/image",function(err,stat) {
//     if (err) console.log(err);
//     stat.forEach(item => {
//         var path = "./dist/image/" + item;
//         fs.stat(path,(err,stats) => {
//             if (err) return err;
//             if(stats.isFile()) {
//                 console.log(item+"为文件")
//             }
//             if(stats.isDirectory()) {
//                 console.log(item+"为目录")
//             }
//         })
//     })
// })
function readdirs() {
    return new Promise((resolve,inject) => {
        fs.readdir("./dist/image",function(err,stat) {
            if (err) {
                inject(err)
            } else {
                resolve(stat)
            }
        })
    })
}
async function getImg() {
    var a =  readdirs();
    console.log(a)
    return await a; 
}
console.log(getImg().toString());