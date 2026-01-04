import VehicleCard from "@/components/VehicleCard";
import NewVehicleCard from "@/components/NewVehicleCard";
import Link from "next/link";
import type { Vehicle } from "@/types";

export default function DashboardPage() {

    const vehicles: Vehicle[] = [{
        year: 1991,
        make: "Porsche",
        model: "911 (964)",
        trim: "Turbo 3.3",
        image: "/temp_vehicles/porsche-911-964-turbo-3.3.jpg",
        kileage: 12000,
        slug: "porsche-911-964-turbo-3.3"
    }];

    return (
        <main className="mt-8 mx-auto w-[90%] sm:w-[80%] lg:w-[75%]">
            <header className="flex items-center justify-between mb-16 border-b border-foreground/10 pb-8">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-light tracking-tight text-stone-50 mb-2">Garage</h1>
                    <p className="text-stone-500 text-[0.8rem] tracking-wide font-light">2 Véhicles</p>
                </div>
                <button className="bg-stone-50 hover:bg-amber-500 transition-all text-black px-5 py-2 text-sm">Ajouter un Véhicule</button>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                    <Link
                        key={vehicle.slug}
                        href={`/dashboard/${vehicle.slug}`}
                        className="hover:-translate-y-1 transition-all ease-out duration-300">
                        
                        <VehicleCard vehicle={vehicle} />
                    </Link>
                ))}
                <NewVehicleCard />
            </section>
        </main>
    );
}