"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import ImagesSection from "@/components/ImagesSection";
import ServicesSection from "@/components/ServicesSection";
import AboutPortugalSection from "@/components/AboutPortugalSection";
import UserPosts from "@/components/UserPosts";
import News from "@/components/News";
import Calender from "@/components/Calender";
import CalenderPopup from "@/components/CalenderPopup";
import Modal from "@/components/Modal";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import ContactForm from "@/components/ContactForm";

const Main = observer(() => {
  return (
    <div>
      <Modal
        isOpen={ModalStore.modalName === modals.scedule}
        closeModal={ModalStore.closeModal}
      >
        <Calender />
      </Modal>
      <Modal
        isOpen={ModalStore.modalName === modals.contact}
        closeModal={ModalStore.closeModal}
      >
        <ContactForm />
      </Modal>
      <Header />
      <main className="flex w-[80%] mx-auto flex-col ">
        <ServicesSection />
        <AboutPortugalSection />

        <UserPosts />
        <News />
      </main>
      <Footer />
      <CalenderPopup />
    </div>
  );
});

export default Main;
