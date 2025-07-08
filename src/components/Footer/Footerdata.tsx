import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const FooterLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact Us', href: '/contact' },
  ],
  products: [
    { name: 'Somfy', href: '/somfy' },
    { name: 'Somfy', href: '/somfy' },
  ],
  followUs: [
    { name: 'Facebook', href: 'https://facebook.com', icon: <FaFacebook /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <FaInstagram /> },
  ]
};
