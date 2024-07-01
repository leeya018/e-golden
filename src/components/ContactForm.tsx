import { languageStore } from "@/mobx/languageStore";
import { ModalStore } from "@/mobx/modalStore";
import { countriesEn, countriesHe, countriesPt } from "@/util";
import axios from "axios";
import React, { FormEvent, useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "Lee",
    lastName: "Yahav",
    message: "need help with creating new bussines",
    email: "leeyahav018@gmail.com",
    nationality: "",
    residence: "",
    topic: "new bussiness",
  });
  const { translations, countries } = languageStore;

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
    <div className="card-gradient p-8 rounded-lg  max-w-3xl mx-auto ">
      <h2 className="text-center text-2xl font-semibold mb-4">
        {translations.contactForm.title}
      </h2>
      <p className="text-center mb-6">{translations.contactForm.description}</p>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            value={formData.firstName}
            name="firstName"
            onChange={handleChange}
            required
            type="text"
            placeholder={translations.contactForm.fields[0].placeholder}
            className="border border-gray-300 p-2 rounded-lg w-full  text-black"
          />
          <input
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
            required
            type="text"
            placeholder={translations.contactForm.fields[1].placeholder}
            className="border border-gray-300 p-2 rounded-lg w-full text-black"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
            type="email"
            placeholder={translations.contactForm.fields[2].placeholder}
            className="border border-gray-300 p-2 rounded-lg w-full text-black"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select
            value={formData.nationality}
            onChange={handleChange}
            name="nationality"
            className="border border-gray-300 p-2 rounded-lg w-full text-black"
          >
            <option value="">
              {translations.contactForm.fields[3].placeholder}
            </option>
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
            className="border border-gray-300 p-2 rounded-lg w-full text-black"
          >
            <option value="">
              {translations.contactForm.fields[4].placeholder}
            </option>
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
            placeholder={translations.contactForm.fields[5].placeholder}
            className="border border-gray-300 p-2 rounded-lg w-full h-24 text-black"
          />
          <input
            value={formData.topic}
            name="topic"
            onChange={handleChange}
            required
            type="text"
            placeholder={translations.contactForm.fields[6].placeholder}
            className="border border-gray-300 p-2 rounded-lg w-full text-black"
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {translations.contactForm.note}
        </p>
        <div className="text-right">
          <button
            type="submit"
            className="bg-gold text-white py-2 px-6 rounded-lg"
          >
            {translations.contactForm.submit.text}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
