import { PrismaClient } from "@prisma/client"

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req, res) {
  const zones = await prisma.zone.findMany()
  res.json(zones)
}