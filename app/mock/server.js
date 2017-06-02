let express=require('express');
let app=express();
app.listen(3000);
let ad=require('./home/ad');
app.get('/api/ad',(req,res)=>{
    res.send(ad);
});
let list=require('./home/list');
//需要传递城市
app.get('/api/list/:city/:page',(req,res)=>{
    console.log(req.params.city);
    console.log(req.params.page);
    res.send(list);
});
let info=require('./detail/info');
//通过id来获取商户信息
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info);
});
//评价列表   id  page
let comment=require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.page);
    res.send(comment);
});