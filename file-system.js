const fs = require("fs");
const path = require("path");
//
// console.log('start')
//
// fs.mkdir(path.resolve(__dirname, 'dir'),(err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log('Creating directory');
// });
//
//
// console.log('end')

// fs.rmdirSync(path.resolve(__dirname, 'dir'), (err) => {
//     if (err){
//         throw err;
//     }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'),"4212",(err) =>{
//     if (err) throw err;
//     console.log("Writing..");
// })
//
// fs.appendFile(path.resolve(__dirname, 'test.txt'),"dassa",(err) =>{
//     if (err) throw err;
//     console.log("Writing..");
// })

const writeFileAsync = async (path,data) => {
    return new Promise((resolve, reject) => fs.writeFile(path,data, (err) => {
        if (err) {
           return reject(err.message);
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path,data, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err,data) => {
        if (err) {
            return reject(err.message);
        }
        resolve(data)
    }))
}

const deleteFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve()
    }))
}

// // writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
// //     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '213'))
// //     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '213'))
// //     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '213'))
// //     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '213'))
// //     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err));
//
// deleteFileAsync(path.resolve(__dirname,'test.txt'))
//     .then(()=> console.log('removed'))


// const text = process.env.TEXT || '';
//
// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(()=> readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => data.split('\n').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), 'count ${count}'))
//     .then(() => deleteFileAsync(path.resolve(__dirname, 'text.txt')))