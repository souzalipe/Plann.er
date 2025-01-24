import { MapPin, Calendar, ArrowRight } from "lucide-react";
import Logo from "./assets/Logo.svg";
import { useState } from "react";

function App() {
  const [ isGuestsInputOpen, setIsGuestsInputOpen  ] = useState(false)

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[url('./assets/bg.png')]  bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src={Logo} alt="" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos planeje sua proxima viajem
          </p>
        </div>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-2 shadow-0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
            />
          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 cursor-pointer">
            Continuar
            <ArrowRight className="size-5" />
          </button>
        </div>
        <p className="tetxt-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            {" "}
            termos de uso
          </a>
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade.
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
