import { languageStore } from "@/mobx/languageStore";
import { ModalStore } from "@/mobx/modalStore";
import { handleWhatsAppClick, modals } from "@/util";

export default function WhatsappPopup() {
  const { translations } = languageStore;

  return (
    <>
      <div
        className="popup
         bg-[#14957B] 
          border-black "
      >
        <span
          onClick={handleWhatsAppClick}
          className="font-semibold text-lg text-white"
        >
          {translations.footer.whatsapp}
        </span>
      </div>
    </>
  );
}
