
import { PrismaClient } from "@prisma/client";
import zones from "./zones";
import zone from "./api/zone";

const prisma = new PrismaClient()

export default function Countries({ country }) {
  return(
    <div>
      <h3>ZEMLJE</h3>

      <ul>
        {country.map(country => (
          <li key={country.id}>{country.name} {country.Zone.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {

  const country = await prisma.country.findMany({
    include: {
      Zone: {
        select: { name: true },
      },
    },
  })
  const zone = await prisma.zone.findMany()

  return {
    props: {
      country: JSON.parse(JSON.stringify(country)), // <== here is a solution
      zone: JSON.parse(JSON.stringify(country)), // <== here is a solution
    }
  }
}
