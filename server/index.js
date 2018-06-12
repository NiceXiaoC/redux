const express = require('express')
const mongoose = require('mongoose')

// 链接DB
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
	console.log('数据库链接成功')
})

const User = mongoose.model('user', new mongoose.Schema({
	user: {
		type: String,
		require: true
	},
	age: {
		type: Number,
		require: true
	}
}))

// 新增数据
//User.create({
//	user: 'xiaoer123',
//	age: 21
//},function(err,doc){
//	if(!err){
//		console.log(doc)
//	}else{
//		console.log(err)
//	}
//})

// 删除年龄18 的数据 
/*

User.remove({age:18},function(err,doc){
	console.log(doc)
})
*/

// 更新
//User.update({user:"xiaoer"},{'$set':{age:25}},function(err,doc){
//	console.log(doc)
//})

// 新建app
const app = express()

app.get('/', function(req, res) {
	res.send('<h1>hello world</h1>')
})

app.get('/data', function(req, res) {
	User.findOne({user:'xiaoer'}, function(err, doc) {
		res.json(doc)
	})
})

app.listen(9999, function() {
	console.log('NODE APP')
})