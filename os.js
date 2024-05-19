// const os = require("os");
//
// const cluster = require("cluster");
//
//
// // console.log(os.platform());
// // console.log(os.arch());
// // console.log(os.cpus())
//
// if(cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker) => {
//         console.log(`vorker ${worker.process.pid} ymer)`)
//         cluster.fork()
//     })
// } else {
//     console.log(`voker ${process.pid} fsfds`)
//
//     setInterval(() => {
//         console.log(`voker ${process.pid} tavoa`)
//     }, 5000)
// }
//
//
