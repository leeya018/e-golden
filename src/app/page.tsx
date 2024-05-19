"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// import ImagesSection from "@/components/ImagesSection";
import ServicesSection from "@/components/ServicesSection";
import AboutPortugal from "@/components/AboutPortugal";
import UserPosts from "@/components/UserPosts";
import News from "@/components/News";
import Calender from "@/components/Calender";

export default function Main() {
  // Example data, replace with your actual data fetching logic

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-5xl mt-20 font-semibold text-center mb-6">
          Welcome to Our Service Portal
        </h1>

        {/* <ImagesSection /> */}
        <ServicesSection />
        <AboutPortugal />
        <div className="flex justify-between ">
          <UserPosts />
          <News />
        </div>
      </main>
      <Footer />
    </div>
  );
}
