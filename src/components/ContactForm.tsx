import { languageStore } from "@/mobx/languageStore";
import { ModalStore } from "@/mobx/modalStore";
import { countries } from "@/util";
import axios from "axios";
import React, { FormEvent, useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "Dana",
    lastName: "Golde",
    topic: "Tax",
    message: "hello lee , I want to pay ",
    email: "leeyahav018@gmial.com",
    nationality: "",
    residence: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        // Handle successful submission
        console.log("Form submitted successfully");
        ModalStore.closeModal();
      } else {
        // Handle submission error
        console.error("Form submission failed");
      }
      ModalStore.closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">
        Have a question? Contact us
      </h2>
      <p className="text-center mb-6">
        We will respond by email within no longer than one working day.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            value={formData.firstName}
            name="firstName"
            onChange={handleChange}
            required
            type="text"
            placeholder="First name*"
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
          <input
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
            required
            type="text"
            placeholder="Last name*"
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            value={formData.email}
            name="email"
            c
            onChange={handleChange}
            required
            type="email"
            placeholder="Email*"
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select
            value={formData.nationality}
            onChange={handleChange}
            name="nationality"
            className="border border-gray-300 p-2 rounded-lg w-full"
          >
            <option value="">Nationality*</option>
            {countries.map((country: string, index: number) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            value={formData.residence}
            onChange={handleChange}
            name="residence"
            // placeholder="Country of Residence*"
            className="border border-gray-300 p-2 rounded-lg w-full"
          >
            {countries.map((country: string, index: number) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="What are you interested in?*"
            className="border border-gray-300 p-2 rounded-lg w-full h-24"
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          N.B.: By contacting us you are granting your consent for us to forward
          your details to a E-golden respond directly to you.
        </p>
        <div className="text-right">
          <button
            type="submit"
            className="bg-yellow-700 text-white py-2 px-6 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
