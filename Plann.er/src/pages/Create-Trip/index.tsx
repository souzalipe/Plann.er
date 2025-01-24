import {
    MapPin,
    Calendar,
    ArrowRight,
    UserRoundPlus,
    Settings2,
    X,
    Plus,
    User
  } from "lucide-react";
  import Logo from "../../assets/Logo.svg";
  import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./Invite-guests-modal";
  
  function CreateTripPage() {
    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [isConfirmeTripModalOpen, setIsConfirmeTripModalOpen] = useState(false);
   
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  
    function openGuestsInput() {
      setIsGuestsInputOpen(true);
    }
  
    function closeGuestsInput() {
      setIsGuestsInputOpen(false);
    }
  
    function openGuestsModal() {
      setIsGuestsModalOpen(true);
    }
  
    function closeGuestsModal() {
      setIsGuestsModalOpen(false);
    }
  
    function openConfirmeTripModal() {
      setIsConfirmeTripModalOpen(true);
    }
  
    function closeConfirmeTripModal() {
      setIsConfirmeTripModalOpen(false);
    }
  
    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
      event.preventDefault(); 
      const data = new FormData(event.currentTarget)
      const email = data.get('email') as string;
  
      if (!email) {
        return
      }
  
      if(emailsToInvite.includes(email)) {
        return (
          alert('Este e-mail já foi adicionado')
        )
      }
  
  
      setEmailsToInvite((state) => [...state, email]);
  
      event.currentTarget.reset();
    }
  
    function removeEmailToInvite(email: string) {
      setEmailsToInvite((state) => state.filter((stateEmail) => stateEmail !== email));
    }

    function createTrip() {
      navigate('/tripes/123')
    }
  
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[url('./assets/bg.png')]  bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className="flex flex-col items-center gap-3">
            <img src={Logo} alt="" />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos planeje sua próxima viagem
            </p>
          </div>

          <div className="space-y-4">
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

            {isGuestsInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-2 shadow-[0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03]">
                <button
                  type="button"
                  onClick={openGuestsModal}
                  className="flex items-center gap-2 flex-1"
                >
                  <UserRoundPlus className="text-zinc-400 size-5" />
                  {emailsToInvite.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1 text-left">
                      {emailsToInvite.length} pessoa(s) convida(s)
                    </span>
                  ) : (
                    <span className="text-zinc-400 text-lg flex-1 text-left">
                      Quem estará na viagem?
                    </span>
                  )}
                </button>

                <div className="w-px h-6 bg-zinc-800"></div>

                <button
                  onClick={openConfirmeTripModal}
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 cursor-pointer"
                >
                  Confirmar viagem
                  <ArrowRight className="size-5" />
                </button>
              </div>
            )}
          </div>

          <p className="text-sm text-zinc-500">
            Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
            <br /> com nossos{" "}
            <a href="#" className="text-zinc-300 underline">
              termos de uso
            </a>{" "}
            e{" "}
            <a className="text-zinc-300 underline" href="#">
              políticas de privacidade.
            </a>
          </p>
        </div>
        {isGuestsModalOpen && (
          <InviteGuestsModal
            emailsToInvite={emailsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            closeGuestsModal={closeGuestsModal}
            removeEmailToInvite={removeEmailToInvite}
          />
        )}

        {isConfirmeTripModalOpen && (
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

              <form onSubmit={addNewEmailToInvite} className="space-y-3">
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
                  onClick={createTrip}
                  type="submit"
                  className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 cursor-pointer"
                >
                  Confirmar criação da viagem
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
  
export default CreateTripPage;
  