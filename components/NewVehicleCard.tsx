"use client";

import { Plus } from 'lucide-react';

export default function NewVehicleCard() {

    return (
        <button onClick={() => console.log("Add Vehicle Modal opened")} className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-stone-50/20 rounded-lg hover:border-amber-500 transition-all duration-300 cursor-pointer group">
            <Plus className="text-stone-50/50 group-hover:text-stone-50 mb-2 transition-all duration-300" />
            <p className="text-stone-50/50 text-sm group-hover:text-stone-50 transition-all duration-300">
                Ajouter un Véhicule
            </p>
        </button>
    );
}