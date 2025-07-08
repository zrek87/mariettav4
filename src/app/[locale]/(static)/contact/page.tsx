"use client";
import React, { useState, useCallback, FormEvent, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTiktok,
  FaTimes,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Image from "next/image";
import airplaneimg from "../../../../../public/images/paper_airplan.png";
import { useTranslations } from "next-intl";

// Extracted form validation logic
const validateForm = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const errors: { [key: string]: string } = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\s\-]+$/;

  if (!formData.firstName.trim()) errors.firstName = "First name is required";
  if (!formData.lastName.trim()) errors.lastName = "Last name is required";

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (formData.phone && !phoneRegex.test(formData.phone)) {
    errors.phone = "Invalid phone number format";
  }

  if (!formData.message.trim()) errors.message = "Message is required";

  return errors;
};

const Page = () => {
  const t = useTranslations("contactPage");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [responseMessage, setResponseMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPopupVisible) {
        setIsPopupVisible(false);
      }
    };

    if (isPopupVisible) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isPopupVisible]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));

      // Clear specific field error when user starts typing
      if (formErrors[name]) {
        const newErrors = { ...formErrors };
        delete newErrors[name];
        setFormErrors(newErrors);
      }
    },
    [formErrors]
  );

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage(t("form.successMessage"));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setFormErrors({});
        setIsSuccess(true);
        setIsPopupVisible(true);
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.message || t("form.errorMessage"));
        setIsSuccess(false);
        setIsPopupVisible(true);
      }
    } catch (error) {
      setResponseMessage(t("form.networkErrorMessage"));
      setIsSuccess(false);
      setIsPopupVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Social media links with aria labels
  const socialLinks = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/marietta.furniture.curtains",
      ariaLabel: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      Icon: FaTiktok,
      href: "https://www.tiktok.com/@marietta_furniture",
      ariaLabel: "TikTok",
      color: "hover:text-black",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/company/marietta-trading-company/",
      ariaLabel: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/share/1Fq26arGwk/?mibextid=wwXIfr",
      ariaLabel: "Facebook",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#fab700] mb-4">
          {t("header.title")}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t("header.subtitle")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 md:gap-8 p-6 md:p-14 rounded-lg shadow-2xl bg-white">
        {/* Contact Information Card */}
        <div className="relative bg-gradient-to-br from-[#414141FF] to-[#2a2a2aFF] text-white p-10 rounded-lg space-y-6 shadow-md overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#fab700] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#fab700] opacity-10 rounded-full translate-y-12 -translate-x-12"></div>

          <h2 className="text-2xl font-bold mb-6 relative z-10">
            {t("contactInfo.title")}
          </h2>

          <div className="space-y-4 relative z-10">
            {/* Factory Contact Info */}
            <div className="flex items-center gap-4 group">
              <div className="p-2 bg-[#fab700] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                <FaPhoneAlt
                  className="text-xl text-[#fab700]"
                  aria-hidden="true"
                />
              </div>
              <a
                href={`tel:${t("contactInfo.phone")}`}
                className="hover:underline hover:text-[#fab700] transition-colors duration-300"
              >
                {t("contactInfo.phone")}
              </a>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-2 bg-[#fab700] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                <FaEnvelope
                  className="text-xl text-[#fab700]"
                  aria-hidden="true"
                />
              </div>
              <a
                href={`mailto:${t("contactInfo.email")}`}
                className="hover:underline hover:text-[#fab700] transition-colors duration-300"
              >
                {t("contactInfo.email")}
              </a>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-2 bg-[#fab700] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                <FaMapMarkerAlt
                  className="text-xl text-[#fab700]"
                  aria-hidden="true"
                />
              </div>
              <span>{t("contactInfo.address")}</span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 my-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#fab700] rounded-full"></div>
            </div>

            {/* Showroom Information */}
            <h2 className="text-2xl font-bold mb-4">
              {t("contactInfo.showroomSection")}
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-[#fab700] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                  <FaMapMarkerAlt
                    className="text-xl text-[#fab700]"
                    aria-hidden="true"
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/xHPsewmid6vJuhFi8?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#fab700] transition-colors duration-300"
                >
                  {t("contactInfo.showroomAddress")}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#fab700] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                  <FaWhatsapp
                    className="text-xl text-[#fab700]"
                    aria-hidden="true"
                  />
                </div>
                <a
                  href={`https://wa.me/${t(
                    "contactInfo.showroomWhatsapp"
                  ).replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#fab700] transition-colors duration-300"
                >
                  {t("contactInfo.showroomWhatsapp")}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#fab700] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                  <FaEnvelope
                    className="text-xl text-[#fab700]"
                    aria-hidden="true"
                  />
                </div>
                <a
                  href={`mailto:${t("contactInfo.showroomEmail")}`}
                  className="hover:underline hover:text-[#fab700] transition-colors duration-300"
                >
                  {t("contactInfo.showroomEmail")}
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#fab700] bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                  <FaPhoneAlt
                    className="text-xl text-[#fab700]"
                    aria-hidden="true"
                  />
                </div>
                <a
                  href={`tel:${t("contactInfo.showroomPhone")}`}
                  className="hover:underline hover:text-[#fab700] transition-colors duration-300"
                >
                  {t("contactInfo.showroomPhone")}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 pt-6 relative z-10">
            {socialLinks.map(({ Icon, href, ariaLabel, color }) => (
              <a
                key={ariaLabel}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className={`text-2xl p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 ${color}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
          noValidate
          aria-label={t("header.title")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => handleFocus("firstName")}
                onBlur={handleBlur}
                placeholder={t("form.firstNamePlaceholder")}
                aria-invalid={!!formErrors.firstName}
                aria-describedby="firstName-error"
                className={`w-full border-b-2 py-3 px-2 text-gray-800 focus:outline-none placeholder-gray-600 transition-all duration-300 ${
                  formErrors.firstName
                    ? "border-red-500 bg-red-50"
                    : focusedField === "firstName"
                    ? "border-[#fab700] bg-yellow-50"
                    : "border-gray-300 focus:border-[#fab700]"
                }`}
                required
              />
              {formErrors.firstName && (
                <p
                  id="firstName-error"
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                >
                  <FaExclamationCircle className="text-xs" />
                  {formErrors.firstName}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => handleFocus("lastName")}
                onBlur={handleBlur}
                placeholder={t("form.lastNamePlaceholder")}
                aria-invalid={!!formErrors.lastName}
                aria-describedby="lastName-error"
                className={`w-full border-b-2 py-3 px-2 text-gray-800 focus:outline-none placeholder-gray-600 transition-all duration-300 ${
                  formErrors.lastName
                    ? "border-red-500 bg-red-50"
                    : focusedField === "lastName"
                    ? "border-[#fab700] bg-yellow-50"
                    : "border-gray-300 focus:border-[#fab700]"
                }`}
                required
              />
              {formErrors.lastName && (
                <p
                  id="lastName-error"
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                >
                  <FaExclamationCircle className="text-xs" />
                  {formErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                placeholder={t("form.emailPlaceholder")}
                aria-invalid={!!formErrors.email}
                aria-describedby="email-error"
                className={`w-full border-b-2 py-3 px-2 text-gray-800 focus:outline-none placeholder-gray-600 transition-all duration-300 ${
                  formErrors.email
                    ? "border-red-500 bg-red-50"
                    : focusedField === "email"
                    ? "border-[#fab700] bg-yellow-50"
                    : "border-gray-300 focus:border-[#fab700]"
                }`}
                required
              />
              {formErrors.email && (
                <p
                  id="email-error"
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                >
                  <FaExclamationCircle className="text-xs" />
                  {formErrors.email}
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus("phone")}
                onBlur={handleBlur}
                placeholder={t("form.phonePlaceholder")}
                aria-invalid={!!formErrors.phone}
                aria-describedby="phone-error"
                className={`w-full border-b-2 py-3 px-2 text-gray-800 focus:outline-none placeholder-gray-600 transition-all duration-300 ${
                  formErrors.phone
                    ? "border-red-500 bg-red-50"
                    : focusedField === "phone"
                    ? "border-[#fab700] bg-yellow-50"
                    : "border-gray-300 focus:border-[#fab700]"
                }`}
              />
              {formErrors.phone && (
                <p
                  id="phone-error"
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                >
                  <FaExclamationCircle className="text-xs" />
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              placeholder={t("form.messagePlaceholder")}
              aria-invalid={!!formErrors.message}
              aria-describedby="message-error"
              className={`w-full border-b-2 py-3 px-2 text-gray-800 focus:outline-none placeholder-gray-600 transition-all duration-300 resize-none ${
                formErrors.message
                  ? "border-red-500 bg-red-50"
                  : focusedField === "message"
                  ? "border-[#fab700] bg-yellow-50"
                  : "border-gray-300 focus:border-[#fab700]"
              }`}
              rows={4}
              required
            />
            {formErrors.message && (
              <p
                id="message-error"
                className="text-red-500 text-sm mt-1 flex items-center gap-1"
              >
                <FaExclamationCircle className="text-xs" />
                {formErrors.message}
              </p>
            )}
          </div>

          <div className="relative flex items-center justify-end mt-12">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-[#545454FF] text-white py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isLoading
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-[#fab700] hover:text-black hover:shadow-xl"
              }`}
              aria-busy={isLoading}
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
                  {t("form.loadingText")}
                </div>
              ) : (
                t("form.sendButton")
              )}
            </button>
            <Image
              src={airplaneimg}
              alt="Paper Airplane"
              className="absolute -bottom-32 right-24 w-72 h-40 hidden lg:block animate-pulse"
              priority
            />
          </div>
        </form>
      </div>

      {/* Enhanced Popup Modal */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          onClick={(e) =>
            e.target === e.currentTarget && setIsPopupVisible(false)
          }
        >
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center space-y-4 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-start">
              <h2
                id="popup-title"
                className="text-2xl font-bold text-[#fab700] flex-1"
              >
                {t("form.popupTitle")}
              </h2>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                aria-label="Close popup"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="flex items-center justify-center mb-4">
              {isSuccess ? (
                <FaCheckCircle className="text-6xl text-green-500" />
              ) : (
                <FaExclamationCircle className="text-6xl text-red-500" />
              )}
            </div>
            <p className="text-gray-700">{responseMessage}</p>
            <button
              className="bg-[#fab700] text-black py-3 px-8 rounded-lg shadow hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => setIsPopupVisible(false)}
              aria-label="Close popup"
            >
              {t("form.popupCloseButton")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
