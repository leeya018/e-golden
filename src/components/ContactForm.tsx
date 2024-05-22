import React, { FormEvent, useState } from "react";
import { ModalStore } from "@/mobx/modalStore";
import axios from "axios";

function ContactForm() {
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
        <div className=" flex justify-center font-bold text-xl">
          Contact Us!
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name:
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
            Last Name:
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
            Topic:
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            >
              <option value="">Select a topic</option>
              <option value="Relocation Inquiry">Relocation Inquiry</option>
              <option value="Tax">Tax</option>
              <option value="Business Solutions">Business Solutions</option>
              <option value="Realestate">Realestate</option>
            </select>
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
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
            Email:
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
