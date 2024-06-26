"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { ModalStore } from "@/mobx/modalStore";
import Calender from "@/components/Calender";
import ContactForm from "@/components/ContactForm";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import CalenderPopup from "@/components/CalenderPopup";
import { languageStore } from "@/mobx/languageStore";
import TestemonialData from "@/components/TestemonialData";
import WhatsappPopup from "@/components/WhatsappPopup";

// import url('https://fonts.googleapis.com/css2?family=Danfo&display=swap');

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E-Golden",
//   description: "Generated by Lee Yahav",
// };

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={languageStore.direction}>
      <body className="body">
        <Header />

        <Modal
          bgColor="bg-white"
          isOpen={ModalStore.modalName === modals.scedule}
          closeModal={ModalStore.closeModal}
        >
          <Calender />
        </Modal>
        <Modal
          bgColor="bg-card-gradient"
          isOpen={ModalStore.modalName === modals.contact}
          closeModal={ModalStore.closeModal}
        >
          <ContactForm />
        </Modal>
        <Modal
          bgColor="bg-card-gradient"
          isOpen={ModalStore.modalName === modals.testemonial}
          closeModal={ModalStore.closeModal}
        >
          <TestemonialData />
        </Modal>
        <div className="fixed bottom-0 right-0 m-4 flex z-50">
          <CalenderPopup />
          <WhatsappPopup />
        </div>

        <main className="mt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default observer(RootLayout);
