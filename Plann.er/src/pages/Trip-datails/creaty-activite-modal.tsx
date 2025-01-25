import { Calendar, Plus, Tag, X } from "lucide-react";

interface CreateActiviteModalProps {
    closeCreateActibiteModal: () => void;
}

export function CreateActiviteModal ({closeCreateActibiteModal}: CreateActiviteModalProps) {

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl space-y-5 py-5 px-6 shadow-[0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)] bg-zinc-900">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button onClick={closeCreateActibiteModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Todos os convidados podem visualizar as atividades.{" "}
              </p>
            </div>

            <form className="space-y-3">
              <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="text-zinc-400 size-5" />
                <input
                  name="tittle"
                  placeholder="Qual a atividade"
                  className="bg-transparent text-lg placeholder-zinc-400 w-99 outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="py-2.5 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Calendar className="text-zinc-400 size-5" />
                  <input
                    type="datetime-local"
                    name="occurs_at"
                    placeholder="Data e horário da atividade"
                    className="bg-transparent text-lg flex-1 placeholder-zinc-400 w-99 outline-none "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 cursor-pointer"
              >
                Salvar atividade
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>

    )
}