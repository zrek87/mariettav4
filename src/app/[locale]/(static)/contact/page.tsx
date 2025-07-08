"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";
import airplaneimg from "../../../../../public/images/paper_airplan.png";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("contactPage");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);  
    const phoneRegex = /^\+?[0-9\s\-]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setResponseMessage("Invalid phone number format. Please try again.");
      setIsPopupVisible(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsPopupVisible(true); // Show the popup
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Failed to send message. "+error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#fab700]">
          {t("header.title")}
        </h2>
        <p className="text-lg text-gray-700">{t("header.subtitle")}</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-8 p-6 md:p-14 rounded-lg shadow-2xl bg-white">
        <div className="relative bg-[#414141FF] text-white p-10 rounded-lg space-y-6 shadow-md overflow-hidden">
          <h3 className="text-2xl font-bold">{t("contactInfo.title")}</h3>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-[#fab700]" />
              <span className="font-medium">{t("contactInfo.phone")}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-[#fab700]" />
              <span className="font-medium">{t("contactInfo.email")}</span>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-[#fab700]" />
              <span className="font-medium">{t("contactInfo.address")}</span>
            </div>
          </div>

          <div className="flex gap-4 pt-10">
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t("form.firstNamePlaceholder")}
              className="border-b-2 border-gray-300 py-2 px-2 text-gray-800 focus:outline-none focus:border-[#fab700] placeholder-gray-600"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t("form.lastNamePlaceholder")}
              className="border-b-2 border-gray-300 py-2 px-2 text-gray-800 focus:outline-none focus:border-[#fab700] placeholder-gray-600"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("form.emailPlaceholder")}
              className="border-b-2 border-gray-300 py-2 px-2 text-gray-800 focus:outline-none focus:border-[#fab700] placeholder-gray-600"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("form.phonePlaceholder")}
              className={`border-b-2 py-2 px-2 text-gray-800 focus:outline-none placeholder-gray-600 ${
                formData.phone && !/^\+?[0-9\s\-]+$/.test(formData.phone)
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#fab700]"
              }`}
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("form.messagePlaceholder")}
            className="border-b-2 border-gray-300 py-2 px-2 w-full text-gray-800 focus:outline-none focus:border-[#fab700] placeholder-gray-600"
            rows={4}
            required
          />

          <div className="relative flex items-center justify-end mt-12">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-[#545454FF] text-white py-3 px-8 rounded-lg shadow-lg transition duration-300 ${
                isLoading
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-[#fab700] hover:text-black"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 12h2zm2 5.291A7.964 7.964 0 014 12H2c0 2.137.835 4.087 2.197 5.556l1.803-1.265z"
                    ></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                t("form.sendButton")
              )}
            </button>
            <Image
              src={airplaneimg}
              alt="Paper Airplane"
              className="absolute -bottom-32 right-24 w-72 h-40"
            />
          </div>
        </form>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="text-2xl font-bold text-[#fab700]">Thank You!</h2>
            <p className="text-gray-700">{responseMessage}</p>
            <button
              className="bg-[#fab700] text-black py-2 px-6 rounded-lg shadow hover:bg-black hover:text-white transition duration-300"
              onClick={() => setIsPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
