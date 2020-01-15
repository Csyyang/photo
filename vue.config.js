const debug = process.env.NODE_ENV !== 'production'
// if(debug) {
  var obj = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:80', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
// } 
// else {
//   var obj = {
//     devServer: {
//       proxy: {
//         '/api': {
//           target: 'http://localhost:80', //对应自己的接口
//           changeOrigin: true,
//           ws: true,
//           pathRewrite: {
//             '^/api': ''
//           }
//         }
//       }
//     }
//   }
// }
module.exports = obj;