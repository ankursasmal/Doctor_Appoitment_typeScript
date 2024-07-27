import mongoose from "mongoose";

export async function connection() {
   try{
    let connects:unknown=await mongoose.connect(`mongodb+srv://ankursasmal2024:Ankur123@cluster0.ey4tibo.mongodb.net/Appointment?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('db connect');
}   
   
   catch(e){
    console.log('db not connect');
   }
     
    
}





