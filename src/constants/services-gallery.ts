import { Product } from "@/types/product";

export const SERVICESGALLERY: Product[] = [
  {
    id: 101,
    title: "Puja & Havan",
    description:
      "Book experienced Vedic pandits for Satyanarayan Puja, Rudrabhishek, Ganesh Puja, Lakshmi Puja, Navagraha Havan, and other sacred rituals performed with authentic traditions.",
    category: "Puja Services",
    srcUrl: "/services/smartpuja-vastu.jpg",
    gallery: ["/services/smartpuja-vastu.jpg"],
    price: 2499,
    discount: {
      percentage: 20,
      amount: 500,
    },
    rating: 4.9,
  },

  {
    id: 102,
    title: "Astrology",
    description:
      "Consult expert Vedic astrologers for Kundli analysis, horoscope reading, career guidance, marriage compatibility, gemstone recommendations, and dosha remedies.",
    category: "Astrology Services",
    srcUrl: "/services/smartpuja-astrology.jpg",
    gallery: ["/services/smartpuja-astrology.jpg"],
    price: 1999,
    discount: {
      percentage: 25,
      amount: 500,
    },
    rating: 4.8,
  },

  {
    id: 103,
    title: "Religious Ceremonies",
    description:
      "Book qualified pandits for Griha Pravesh, Vivah (Wedding), Namakaran, Annaprashan, Mundan, Shraddha, and other traditional Hindu ceremonies.",
    category: "Vedic Rituals",
    srcUrl: "/services/smartpuja-other-services.jpg",
    gallery: ["/services/smartpuja-other-services.jpg"],
    price: 4999,
    discount: {
      percentage: 20,
      amount: 1000,
    },
    rating: 4.9,
  },

  {
    id: 104,
    title: "E-Puja",
    description:
      "Participate in online pujas from anywhere with live streaming, personalized sankalp, prasad delivery, and experienced priests conducting rituals on your behalf.",
    category: "Online Puja",
    srcUrl: "/services/smartpuja-puja.jpg",
    gallery: ["/services/smartpuja-puja.jpg"],
    price: 1499,
    discount: {
      percentage: 20,
      amount: 300,
    },
    rating: 4.7,
  },
];
