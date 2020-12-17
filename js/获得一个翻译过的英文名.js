var fs = require('fs')
var path = require('path')

var r = fs.readFileSync(path.resolve(__dirname, '../语料库/English_Names_Corpus/English_Cn_Name_Corpus.txt')).toString()
r = r.split('\n').map(a => a.trim())

console.log(
    r[Math.floor(Math.random() * r.length)]
)
