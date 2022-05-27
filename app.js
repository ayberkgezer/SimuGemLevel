const path = require('path')
const express = require('express')
const exphbs = require ('express-handlebars')
const mongoose = require('mongoose')
const app = express()
const port = (3000)
const hostname = '127.0.0.1'
const fetch = require('cross-fetch')
const schedule = require('node-schedule')
const bodyParser = require('body-parser')
var cookieSession = require('cookie-session')


const Post = require('./models/post')


app.use(express.static('./public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const main = require('./routes/main.js')
const { get } = require('express/lib/response')

app.use('/', main)
const users =require('./routes/users')
app.use('/users', users)


mongoose.connect('mongodb://localhost:27017/gem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cookieSession({
    name: 'session',
    keys: ['denemegem']
  }))

app.listen(port, hostname, () => {
    console.log('I am Alive')
})


//api çekimi ve 45 dk aralıklarla dB yazdırma bölümü
async function getGems(){
    const gems = await fetch ("https://poe.ninja/api/data/itemoverview?league=Sentinel&type=SkillGem")
    const response = await gems.json()
    const data = await response.lines
    //console.log(data);
    for(let i = 0; i < data.length;i++){
        //console.log(data[i]['name'])
        const post = new Post ({
            _id : data[i]['id'],
            name : data[i]['name'],
            icon : data[i]['icon'],
            corrupted : data[i]['corrupted'],
            gemLevel : data[i]['gemLevel'],
            gemQuality : data[i]['gemQuality'],
            chaosValue : data[i]['chaosValue'],
            exaltedValue : data[i]['exaltedValue'],
            levelRequired : data[i]['levelRequired'],
            variant : data[i]['variant'],
            itemClass : data[i]['itemClass'],
            sparkline : data[i]['sparkline'],
            lowConfidenceSparkline : data[i]['lowConfidenceSparkline'],
            implicitModifiers : data[i]['implicitModifiers'],
            explicitModifiers : data[i]['explicitModifiers'],
            flavourText : data[i]['flavourText'],
            count : data[i]['count'],
            detailsId : data[i]['detailsId'],
            listingCount : data[i]['listingCount'],
        })
        post.save()
        
    }
}



const rule = new schedule.RecurrenceRule();
rule.minute = 45;

schedule.scheduleJob(rule, function(){
    getGems()
});

// api call sonu 45 dk aralıklarla