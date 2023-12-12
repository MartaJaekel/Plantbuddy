import { useRouter } from "next/router";
import { plants } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function PlantDetail() {
  const router = useRouter();
  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  console.log(plant);

  if (!plant) {
    return <h2>Plant not found!</h2>;
  }

  return (
    <>
      <nav>
        <Link href="/">〈</Link>
      </nav>
      <main>
        <Image
          src={plant.image}
          width={200}
          height={200}
          alt={plant.commonName}
        />
        <section>
          <h1>{plant.commonName}</h1>
          <h2>{plant.species}</h2>
          <article>
            <div>
              <p>Size</p>
              <p>{plant.size}</p>
            </div>
            <div>
              <p>Sunlight</p>
              <p>{plant.sunlightRequirements}</p>
            </div>
            <div>
              <p>Temperature</p>
              <p>{plant.optimalTemperature}</p>
            </div>
            <div>
              <p>Water</p>
              <p>{plant.waterNeeds}</p>
            </div>
          </article>
          <article>
            <h3>Description</h3>
            <p>{plant.description}</p>
          </article>
        </section>
      </main>
    </>
  );
}
