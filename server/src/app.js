require('dotenv').config({path:'./../config.env'});
 
const express=require('express');
const PORT=process.env.PORT;
const app=express();
const cookieParser = require("cookie-parser");
const data=require("./data");


require('./DB/connection');

const name=["Accards","Beauty","Fitness","Food","Toy","Cameracards","Chimneycards","Mens","Womens","Kids",
"Watch","Fridgecards","Headphonecards","Bedroomfurniture","Livingfurniture","Kidsfurniture",
"Homedecoration","Cookwareproduct","Laptopcards","Microwavecard","Mobilescards","PCcards",
"Gamingcards","Televisioncards","Washingmachinecards"

]

app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));


const newdata=new Array();
for(let i=0;i<data.length;i++){

    for(let sub of data[i]){
        sub={
            ...sub,
            category:name[i].toLowerCase()
        }
        newdata.push(sub);
    }

}

// console.log(JSON.stringify(newdata));








app.get('/',(req,res)=>{
    res.send(JSON.stringify(newdata));
})


app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING",PORT);
});


