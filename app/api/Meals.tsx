import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'GET') {

        const filePath = path.join(process.cwd(),'data','meals.json'); 
        const jsonData = fs.readFileSync(filePath,'utf-8');

        const extrackedData = JSON.parse(jsonData);

        return res.status(200).json(extrackedData);
    } else {
        return;
    }
}