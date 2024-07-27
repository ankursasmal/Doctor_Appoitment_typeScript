import { connection } from "@/app/lib/db/connection";
import { userModel } from "@/app/lib/model/userModel";  
import { NextResponse } from "next/server";

(async function fun() {
    try {
        await connection();
    } catch (e) {
        console.log('not connect:');
    }
})();



export async function POST(req:object,res:NextResponse) {
    try{
        let payload:object=await (req as any).json();
        payload={...payload,role:'GENERAL'};

        const user=await userModel.findOne({email:payload.email});


    }
    catch(e){

    }
}