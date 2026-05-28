require('dotenv').config();

const express=require("express");
const app=express();

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Seerver is running on port ${PORT}`);

})