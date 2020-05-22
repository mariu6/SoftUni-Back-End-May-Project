console.log("yey!");
let a = 5;
let b = "baba";



// За ъплоуд на снимки
let oldPath = files.upload.path;
let newPath = path.normalize(path.join(__dirname, '../content/images/' + files.upload.name)); 
fs.copyFile(oldPath, newPath, function (err) {
console.log('File was uploaded successfully!');
});