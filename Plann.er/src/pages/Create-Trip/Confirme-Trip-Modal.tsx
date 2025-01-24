import { Plus, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmeTripModalProps {
    createTrip: (evevent: FormEvent<HTMLFormElement>) => void;
    closeConfirmeTripModal: () => void;
}

export function ConfirmeTripModal ({closeConfirmeTripModal, createTrip}:ConfirmeTripModalProps ) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl space-y-5 py-5 px-6 shadow-[0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)] bg-zinc-900">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Confirmar criação de viajem
                  </h2>
                  <button onClick={closeConfirmeTripModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Para concluir a criação da viagem para{" "}
                  <span className="font-semibold text-zinc-100">
                    Florianópolis, Brasil{" "}
                  </span>
                  nas datas de{" "}
                  <span className="font-semibold text-zinc-100">
                    {" "}
                    16 a 27 de Agosto de 2024{" "}
                  </span>{" "}
                  preencha seus dados abaixo:
                </p>
              </div>

              <form onSubmit={createTrip} className="space-y-3">
                <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <User className="text-zinc-400 size-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu nome completo"
                    className="bg-transparent text-lg placeholder-zinc-400 w-99 outline-none"
                  />
                </div>

                <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <User className="text-zinc-400 size-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail pessoal"
                    className="bg-transparent text-lg placeholder-zinc-400 w-99 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 cursor-pointer"
                >
                  Confirmar criação da viagem
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
    );
}