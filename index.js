let express= require('express');
let path=require('path');
let app=express();
app.listen(3000);
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});