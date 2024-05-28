import React, { FormEvent, useState } from "react";
import { ModalStore } from "@/mobx/modalStore";
import axios from "axios";
import { languageStore } from "@/mobx/languageStore";
import { observer } from "mobx-react-lite";

function ContactForm() {
  const { translations } = languageStore;

  const [formData, setFormData] = useState({
    firstName: "Dana",
    lastName: "Golde",
    topic: "Tax",
    message: "hello lee , I want to pay ",
    email: "leeyahav018@gmial.com",
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
    <div className="w-full max-w-lg mx-auto mt-10 h-[80vh] bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center font-bold text-xl">
          {translations.contactForm.contactUs}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {translations.contactForm.firstName}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {translations.contactForm.lastName}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {translations.contactForm.topic}
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            >
              <option value="">{translations.contactForm.selectTopic}</option>
              <option value="Relocation Inquiry">
                {translations.contactForm.relocationInquiry}
              </option>
              <option value="Tax">{translations.contactForm.tax}</option>
              <option value="Business Solutions">
                {translations.contactForm.businessSolutions}
              </option>
              <option value="Realestate">
                {translations.contactForm.realEstate}
              </option>
            </select>
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {translations.contactForm.message}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {translations.contactForm.email}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            />
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-black border-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {translations.contactForm.submit}
          </button>
        </div>
      </form>
    </div>
  );
}

export default observer(ContactForm);
