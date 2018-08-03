var express = require('express')
var app = express();

var nodemailer = require('nodemailer')
var xoauth2 = require('xoauth2')

var bodyParser = require('body-parser')
app.use(bodyParser.json());

var cors = require('cors')
app.use(cors())



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        type:'OAuth2',
        user:'gavutplay@gmail.com ',
        clientId:'43259718277-qg06fqd2o7vlslctgpc2n582g7a46fao.apps.googleusercontent.com',
        clientSecret:'rvWBI77XQdmNq8xHUpXtA7hP',
        refreshToken:'1/JdYWsS1zVZcHH3WTHX0qMZdAVhFG6pFBKO-dqz2n59nYeoWgRhM0St-_5RwcwP6k'
    }
})


    app.post('/user',(req,res)=>{

        var email = req.body.email
        var subject = req.body.subject
        var Message = req.body.Messages
        var ngirim = {
            from:'sentry Tech',
            to:`${email}`,
            subject:`${subject}`,
            text: `${Message}`,
            html:'<h1>ini email</h1>',
            attachments:[{
                filename:'info.txt',
                content: 'halo ini lampiran'
            },{
                filename:'dustbox.png',
                path:'http://st.cdjapan.co.jp/pictures/l/09/11/FGCA-29.jpg'
            }
        ]
    }

    transporter.sendMail(ngirim,(x,y)=>{
        if(x){
            console.log('error email gagal terkirim')
            res.send('email gagal terkirim')
        }else{
            console.log('email sukses terkirim')
            res.send('email suskes terkirim')
        }
    })
})

app.listen(3210, ()=>{
    console.log('server aktif @port 3210')
})