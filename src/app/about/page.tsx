import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
      <div className="bg-white  rounded-lg p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to E-Golden! We are dedicated to helping you relocate with
          ease and convenience. Our team of experts is committed to providing
          top-notch services to ensure a smooth transition to your new location.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our mission is to make the process of moving stress-free and
          enjoyable. With years of experience in the industry, we have developed
          a comprehensive approach to relocation that covers every aspect, from
          packing and transportation to settling in your new home.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          At E-Golden, we value your satisfaction above all else. Our
          personalized services are designed to meet your unique needs and
          preferences, ensuring that your move is tailored to your requirements.
          Trust us to handle your relocation with the utmost care and
          professionalism.
        </p>
        <p className="text-gray-700 text-lg">
          Thank you for choosing E-Golden. We look forward to assisting you with
          your move!
        </p>
      </div>
    </div>
  );
};

export default About;
