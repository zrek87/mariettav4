import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export const FooterLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contact" },
  ],
  products: [
    { name: "Somfy", href: "/somfy" },
    { name: "Somfy", href: "/somfy" },
  ],
  followUs: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/marietta.furniture.curtains",
      icon: <FaInstagram />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@marietta_furniture",
      icon: <FaTiktok />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/marietta-trading-company/",
      icon: <FaLinkedin />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Fq26arGwk/?mibextid=wwXIfr",
      icon: <FaFacebook />,
    },
  ],
};
