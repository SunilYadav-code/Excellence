const { create } = require("domain");
const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/Excellence1",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>console.log("connection successful..."))
.catch((err)=>console.log(err));

const condidateSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstRound:{
        type:Number,
        required: true
    },
    secondRound:{
        type:Number,
        required: true
    },
    thirdRound:{
        type:Number,
        required: true
    }
})

const Condidate=new mongoose.model("Condidate",condidateSchema);

const createDocument=async()=>{
    try{
        const sunil1=new Condidate({
            name:"Sunil",
            email:"s9717290885@gmail.com",
            firstRound:9,
            secondRound:8,
            thirdRound:7,
        })
        const sunil2=new Condidate({
            name:"Sumit",
            email:"s971725@gmail.com",
            firstRound:10,
            secondRound:10,
            thirdRound:10,
        })
        const sunil3=new Condidate({
            name:"Sanjay",
            email:"s0885@gmail.com",
            firstRound:7,
            secondRound:8,
            thirdRound:10,
        })
        
            
        
        const result=await Condidate.insertMany([sunil1,sunil2,sunil3]);
        
        console.log(result);
        

    }catch(err){
        console.log(err);
    }  
      
}
createDocument();