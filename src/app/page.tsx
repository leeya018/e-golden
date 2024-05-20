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

export default function Main() {
  // Example data, replace with your actual data fetching logic

  return (
    <div>
      <Header />

      <main className="flex w-[80%] mx-auto flex-col ">
        {/* <ServicesSection />
        <AboutPortugalSection /> */}

        <UserPosts />
        <News />
      </main>
      <Footer />
    </div>
  );
}
