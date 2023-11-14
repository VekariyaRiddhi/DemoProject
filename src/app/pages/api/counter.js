import connectDB from "../utils/db";
import Visitor from "../models/Visitor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const visitor = await prisma.visitor.findFirst();
    const count = visitor ? visitor.count : 0;
    res.status(200).json({ count });
  } else if (req.method === "POST") {
    console.log("POST request");
    let visitor = await prisma.visitor.findFirst();
    if (!Visitor) {
      Visitor = await prisma.visitor.create({ data: { count: 0 } });
    }
    Visitor = await prisma.visitor.update({
      where: { id: visitor.id },
      data: { count: visitor.count + 1 },
    });
    res.status(200).json({ count: visitor.count });
  } else {
    res.status(405).end();
  }
}
