import Logo from "../../assets/Logo.svg";

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { InviteGuestsModal } from "./Invite-guests-modal";
import { ConfirmeTripModal } from "./Confirme-Trip-Modal";
import { DestinationAmdDateStep } from "./Steps/destination-amd-date-step";
import { InviteGuestsSteps } from "./Steps/invite-guests-steps";

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
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return alert("Este e-mail já foi adicionado");
    }

    setEmailsToInvite((state) => [...state, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(email: string) {
    setEmailsToInvite((state) =>
      state.filter((stateEmail) => stateEmail !== email)
    );
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/tripes/123");
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
          
          <DestinationAmdDateStep 
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
            closeGuestsInput={closeGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsSteps 
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openConfirmeTripModal={openConfirmeTripModal}
            />
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
        <ConfirmeTripModal
          closeConfirmeTripModal={closeConfirmeTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}

export default CreateTripPage;
