const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname,'count.txt'), (err,data, files) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })
//
// const stream = fs.createReadStream(path.resolve(__dirname, 'stream.txt'), { encoding: 'utf8' });
//
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => {
//     console.log('Done')
// })
// stream.on('open', () => {
//     console.log('end')
// })
// stream.on('error', (err) => {
//     console.error(err)
// })const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'stream.txt'))
// // for (let i = 0; i < 20; i++) {
// //     writeableStream.write(i+'\n');
// // }
// // writeableStream.end()
// // writeableStream.close()
// // writeableStream.destroy()

//


// const http = require('http');
//
// http.createServer((req, res) => {
//     const stream = fs.createReadStream(path.resolve(__dirname, 'stream.txt'));
//     stream.on('data', (chunk) => {
//         res.write(chunk);
//     })
//     stream.on('end', () => {
//         res.end();
//     })
//     stream.pipe(res)
// })

