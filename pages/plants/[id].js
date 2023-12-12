import { useRouter } from "next/router";
import { plants } from "@/lib/data";

export default function PlantDetail() {
  const router = useRouter();
  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <h2>Plant not found!</h2>;
  }

  return <></>;
}
