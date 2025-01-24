import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
  emailsToInvite: string[];
  removeEmailToInvite: (email: string) => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  closeGuestsModal: () => void;
}

export function InviteGuestsModal ({
    addNewEmailToInvite,
    closeGuestsModal,
    emailsToInvite,
    removeEmailToInvite
}: InviteGuestsModalProps): JSX.Element {

    return <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[640px] rounded-xl space-y-5 py-5 px-6 shadow-[0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)] bg-zinc-900">
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                    <button onClick={closeGuestsModal}>
                        <X className="size-5 text-zinc-400" />
                    </button>
                </div>
                <p className="text-sm text-zinc-400">
                    Os convidados irão receber e-mails para confirmar a participação
                    na viagem.
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {emailsToInvite.map((email) => (
                    <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2" key={email}>
                        <span className="text-zinc-300">{email}</span>
                        <button type="button" onClick={() => removeEmailToInvite(email)}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>
                ))}
            </div>

            <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <div className="px-2 flex items-center gap-2 flex-1">
                    <AtSign className="text-zinc-400 size-5" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite o e-mail do convidado"
                        className="bg-transparent text-lg placeholder-zinc-400 w-99 outline-none" />
                </div>

                <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 cursor-pointer">
                    Convidar
                    <Plus className="size-5" />
                </button>
            </form>
        </div>
    </div>;
}

export default InviteGuestsModal;