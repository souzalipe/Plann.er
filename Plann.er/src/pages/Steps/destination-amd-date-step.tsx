import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAmdDateStepProps {
    isGuestsInputOpen: boolean;
    openGuestsInput: () => void;
    closeGuestsInput: () => void;
}

export function DestinationAmdDateStep({closeGuestsInput,isGuestsInputOpen, openGuestsInput}: DestinationAmdDateStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-2 shadow-0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="text-zinc-400 size-5" />
          <input
            type="text"
            disabled={isGuestsInputOpen}
            placeholder="Para onde você vai?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="text-zinc-400 size-5" />
          <input
            type="text"
            disabled={isGuestsInputOpen}
            placeholder="Quando?"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          />
        </div>

        <div className="w-px h-6 bg-zinc-800"></div>

        {isGuestsInputOpen ? (
          <button
            onClick={closeGuestsInput}
            className="bg-zinc-800 text-zinc-200 rounded-lg px-4 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 cursor-pointer"
          >
            Alterar local e data
            <Settings2 className="size-5" />
          </button>
        ) : (
          <button
            onClick={openGuestsInput}
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-300 cursor-pointer"
          >
            Continuar
            <ArrowRight className="size-5" />
          </button>
        )}
      </div>
    );
}