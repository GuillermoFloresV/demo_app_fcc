import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
export default async () => {

    const userData = JSON.parse(req.body);
    console.log(userData);
    const savedUser = await prisma.contact.create({
        data: userData
    })

    req.json(savedUser);
}