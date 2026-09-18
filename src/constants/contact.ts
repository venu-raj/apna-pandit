export type ContactDetails = {
  title: string;
  name: string;
  address: readonly string[];
  email?: string;
  phones: readonly string[];
  description?: string;
  services?: readonly string[];
};

export const CONTACT_DETAILS: ContactDetails[] = [
  {
    title: "Official Address",
    name: "Pt. Shiva Kant Jha",
    address: [
      "131, Matri Sadan,",
      "Sai Maruthi Nagar Layout,",
      "Ramsandra, Mallenalsandra Main Road,",
      "Bannerghatta, Bangalore - 560105.",
    ],
    email: "apnapandit.in@gmail.com",
    phones: ["+91 93437 35376", "+91 70197 97078"],
  },

  {
    title: "Ashram Address",
    name: "Acharya Sri Shyamal Kishore Ji Maharaj",
    address: ["Geeta Vatika,", "Gorakhpur (UP)"],
    phones: ["+91 9242426208"],
    description: "Contact us for all types of Katha and Pravachan.",
    services: [
      "Ram Katha",
      "Shrimad Bhagwat Katha",
      "Shiv Puran Katha",
      "Shrimad Devi Bhagwat Katha",
    ],
  },

  {
    title: "Branch Address",
    name: "Pandit Suryakant Jha",
    address: ["Delhi NCR,", "Ashok Nagar, Sector - 15,", "Noida."],
    phones: ["+91 84478 81192"],
    description: "Contact for Puja Path & Hawan.",
  },
];

export const WHATSAPP_NUMBER = "919343735376";
