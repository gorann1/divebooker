
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default function Zones({ zone, error, isLoading  }) {


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  
  return(
    <div>
      <h3>ZONES</h3>

      <ul>
        {zone.map(zone => (
          <li key={zone.id}>{zone.name} {zone.description}

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
