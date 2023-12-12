import { useRouter } from "next/router";

export default function PlantDetail() {
    const router = useRouter
    const { id } = router.query;

    const plant = plants.find((plant) => plant.id === id);

    function NavigateToPlant(targetId) {
        router.push(`/plants/${targetId}`)
    }

    if (!plant) {
        return <h2>Plant not found!</h2>
    }

    return (
        <>
        
        
        </>
    )
}