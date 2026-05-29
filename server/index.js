require('dotenv').config();
console.log("My weather api key is : "+ process.env.WEATHER_API_KEY);

const express=require("express");
const app=express();

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Seerver is running on port ${PORT}`);

})