
import { PrismaClient } from "@prisma/client";
import zone from "./api/zone";

const prisma = new PrismaClient()

export default function Zones({ zone }) {
  return(
    <div>
      <h3>ZONES</h3>

      <ul>
        {zone.map(zone => (
          <li key={zone.id}>{zone.name}

          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {

  const zone = await prisma.zone.findMany()

  return {
    props: {
      zone: JSON.parse(JSON.stringify(zone)), // <== here is a solution
    }
  }
}
