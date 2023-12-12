import { plants } from "@/lib/data";
import Image from "next/image";

export default function PlantCard() {
  return (
    <ul>
      {plants.map((plant) => (
        <li key={plant.id}>
          <Image
          src={plant.image}
          width={150}
          height={150}
          alt={plant.commonName}/>
          {plant.commonName}
          </li>
      ))}
    </ul>
  )
}
