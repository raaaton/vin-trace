import Image from "next/image";
import type { Vehicle } from "@/types";

type VehicleCardProps = {
    vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <div className="bg-stone-900/25 relative p-0 border border-stone-700/75">
            <span className="text-stone-200 font-light text-sm bg-stone-900/95 absolute top-4 right-4 px-3 py-1 border border-stone-700">{vehicle.year}</span>
            <Image
                className="w-full h-auto"
                src={vehicle.image}
                alt={vehicle.make + " " + vehicle.model}
                width={1600}
                height={900}
            />
            <div className="p-6">
                <h2 className="text-lg text-stone-50 mb-2">{vehicle.make} <span className="font-light text-stone-500 text-[1rem]">{vehicle.model}</span></h2>

                <p className="text-xs font-light tracking-wider uppercase text-stone-500 mb-4 pb-8 border-b border-b-stone-700/75">{vehicle.trim}</p>

                <p className="text-stone-500 text-xs/2">
                    <span className="text-xs font-light tracking-wider uppercase text-stone-500 lh-1">Kilométrage</span>
                    <br />
                    <span className="text-sm font-light tracking-wider uppercase text-stone-50 font-mono mr-1">
                        {vehicle.kileage}
                    </span>
                    km
                </p>
            </div>
        </div>
    )
}