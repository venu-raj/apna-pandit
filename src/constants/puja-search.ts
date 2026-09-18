export type Service = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price?: number;
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Griha Pravesh Puja",
    slug: "griha-pravesh-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e79b70e0-ed95-11f0-8086-171fb859dacd.png",
    price: 6500,
  },
  {
    id: 2,
    title: "Ganesha Chaturthi Puja",
    slug: "ganesha-chaturthi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/9ab32c90-1fa5-11ee-b6eb-978da4dfbe74.png",
    price: 5100,
  },
  {
    id: 3,
    title: "Satyanarayan Puja",
    slug: "satyanarayan-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e519fe00-ed94-11f0-a2b3-5d4fd83aaed4.png",
    price: 5100,
  },
  {
    id: 4,
    title: "Rudrabhishek Puja",
    slug: "rudrabhishek-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/9d290550-895f-11f0-9666-a382d871fd1e.png",
    price: 4100,
  },
  {
    id: 5,
    title: "Maha Ganapati Homa",
    slug: "maha-ganapati-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f9793bc0-ed95-11f0-9113-b54198a91e8a.png",
    price: 5100,
  },
  {
    id: 6,
    title: "Akshaya Tritiya Puja",
    slug: "akshaya-tritiya-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/28eb7a00-0f32-11f1-a226-2b587c4b2c0d.png",
    price: 5100,
  },
  {
    id: 7,
    title: "Marriage Puja",
    slug: "marriage-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/9cc21b70-8961-11f0-b0b2-3db43f961a4b.png",
    price: 6500,
  },
  {
    id: 8,
    title: "Shanti Havan / Griha Shanti Homa",
    slug: "shanti-havan-griha-shanti-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d050af90-895d-11f0-b641-c759a110f2ad.png",
    price: 5100,
  },
  {
    id: 9,
    title: "Griha Pravesh (Rented House) Puja",
    slug: "griha-pravesh-rented-house-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b336c1d0-8970-11f0-836e-613f439156d2.png",
    price: 5100,
  },
  {
    id: 10,
    title: "Vastu Shanti Puja",
    slug: "vastu-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c08989b0-8983-11f0-8fc2-c165b9716017.png",
    price: 8500,
  },
  {
    id: 11,
    title: "Maha Mrityunjaya Homa And Jaap",
    slug: "maha-mrityunjaya-homa-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a76098e0-8a2c-11f0-8022-2f6ab72311b9.png",
    price: 6500,
  },
  {
    id: 12,
    title: "Office Puja / Business Puja",
    slug: "office-puja-business-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/0c9987d0-ed96-11f0-830d-f3ad9fc2010d.png",
    price: 5100,
  },
  {
    id: 13,
    title: "Ayushya Homa / Havan",
    slug: "ayushya-homa-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/ea1eead0-897f-11f0-bf00-fd716496e06d.png",
    price: 5100,
  },
  {
    id: 14,
    title: "Chandi Homa",
    slug: "chandi-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2770fe40-9831-11f0-973c-afecefc98342.png",
    price: 11000,
  },
  {
    id: 15,
    title: "Namakaran Puja",
    slug: "namakaran-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b27977e0-8979-11f0-9a46-05bc16db9fef.png",
    price: 4100,
  },
  {
    id: 16,
    title: "Birthday Puja",
    slug: "birthday-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/79732020-8a27-11f0-aba5-b9bf3d6d954c.png",
    price: 5100,
  },
  {
    id: 17,
    title: "Bhoomi Puja",
    slug: "bhoomi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/6a826b60-8a37-11f0-a389-7b2a8d2b2de1.png",
    price: 5100,
  },
  {
    id: 18,
    title: "Engagement Puja",
    slug: "engagement-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/943f6ae0-7776-11ec-b068-21f148c0db7f.png",
    price: 4100,
  },
  {
    id: 19,
    title: "Pre-Wedding And Haldi Rituals",
    slug: "pre-wedding-and-haldi-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/4d636100-ab3e-11ec-bfae-439e92752a6d.png",
    price: 3100,
  },
  {
    id: 20,
    title: "Maha Lakshmi Homa",
    slug: "maha-lakshmi-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/994f3f20-7778-11ec-a02a-238977270646.png",
    price: 5500,
  },
  {
    id: 21,
    title: "Marriage Anniversary Puja",
    slug: "marriage-anniversary-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/606dbe80-b74a-11ec-a272-1d78fd24ae52.png",
    price: 4100,
  },
  {
    id: 22,
    title: "Vehicle Puja / Car Puja",
    slug: "vehicle-puja-car-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/905e9620-bd41-11f0-8e80-7fe6c5c411e0.png",
    price: 1500,
  },
  {
    id: 23,
    title: "Navagraha Puja And Homa",
    slug: "navagraha-puja-and-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c5436c80-7776-11ec-a633-79bfcca75b03.png",
    price: 6500,
  },
  {
    id: 24,
    title: "Godh Bharai / Seemantham Puja",
    slug: "godh-bharai-seemantham-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/ac706fa0-777a-11ec-8802-2d46303f2cef.png",
    price: 4100,
  },
  {
    id: 25,
    title: "Shuddhi Puja And Havan",
    slug: "shuddhi-puja-and-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/897ae800-7779-11ec-aee2-a17b0fa2136e.png",
    price: 5100,
  },
  {
    id: 26,
    title: "Gand Mool Nakshatra Shanti",
    slug: "gand-mool-nakshatra-shanti",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d9898190-7776-11ec-804b-4bb14eca1ef0.png",
    price: 7500,
  },
  {
    id: 27,
    title: "Mundan Puja / Chola Sanskar",
    slug: "mundan-puja-chola-sanskar",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2e762970-7779-11ec-8889-dd040786e8ed.png",
    price: 5100,
  },
  {
    id: 28,
    title: "Annaprashan Puja / First Food",
    slug: "annaprashan-puja-first-food",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/6dd2a190-777a-11ec-8476-8323cb16fb15.png",
    price: 4100,
  },
  {
    id: 29,
    title: "Akhand Ramayan Path",
    slug: "akhand-ramayan-path",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/5517dcf0-7777-11ec-bb9d-7fc298296201.png",
    price: 25000,
  },
  {
    id: 30,
    title: "Durga Saptashati Chandi Path",
    slug: "durga-saptashati-chandi-path",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/3a625340-a6c0-11ed-8470-0d17687b9bcc.png",
    price: 5100,
  },
  {
    id: 31,
    title: "Sundarkand Path",
    slug: "sundarkand-path",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2e4a0a00-777a-11ec-bc0a-b5cdb41659bd.png",
    price: 5100,
  },
  {
    id: 32,
    title: "Hanuman Chalisa Path",
    slug: "hanuman-chalisa-path",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/45219e20-7779-11ec-9bae-df16075bb5d2.png",
    price: 6100,
  },
  {
    id: 33,
    title: "Barsi Puja",
    slug: "barsi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/6e903d20-777f-11ec-8d2e-e7d47ff3fbbf.png",
    price: 6500,
  },
  {
    id: 34,
    title: "Shradh Puja",
    slug: "shradh-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2c07bf30-777d-11ec-b138-719d682cb2ec.png",
    price: 4100,
  },
  {
    id: 35,
    title: "Last Rites / Antim Sanskar",
    slug: "last-rites-antim-sanskar",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/3563b240-7777-11ec-bbfe-63db51bde77c.png",
    price: 12000,
  },
  {
    id: 36,
    title: "Gauri Puja",
    slug: "gauri-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f27781d0-777f-11ec-9145-ad6dcb104dde.png",
    price: 5100,
  },
  {
    id: 37,
    title: "Diwali Lakshmi Puja",
    slug: "diwali-lakshmi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/eb0752f0-a0f7-11f0-bae0-8b6bd17b0cc3.png",
    price: 5100,
  },
  {
    id: 38,
    title: "Maha Shivaratri Puja",
    slug: "maha-shivaratri-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c7bb9990-f93b-11f0-ba4b-d71e79eabfe1.png",
    price: 4100,
  },
  {
    id: 39,
    title: "Navaratri Durga Puja",
    slug: "navaratri-durga-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c393d540-96ba-11f0-9c08-7fc8098c1671.png",
    price: 4100,
  },
  {
    id: 40,
    title: "Saraswati Puja",
    slug: "saraswati-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/946eec60-f29f-11f0-99f6-a37dd8ab293b.png",
    price: 4100,
  },
  // ---- Services present in the HTML but missing from your original array ----
  {
    id: 41,
    title: "Mahalaya Amavasya Shradh Puja",
    slug: "mahalaya-amavasya-shradh-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d186ae00-40d9-11ee-833a-fbdcdd9f5a73.png",
    price: 5100,
  },
  {
    id: 42,
    title: "Ayudha Puja",
    slug: "ayudha-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/0dd1b840-99fc-11f0-b407-c97936099811.png",
    price: 5100,
  },
  {
    id: 43,
    title: "Hartalika Teej Puja",
    slug: "hartalika-teej-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d722a8c0-7778-11ec-9915-530e56632835.png",
    price: 4100,
  },
  {
    id: 44,
    title: "Karwa Chauth Puja",
    slug: "karwa-chauth-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/bcf07660-7777-11ec-9d02-a15d35cbe80c.png",
    price: 4100,
  },
  {
    id: 45,
    title: "Brahmin Bhoj",
    slug: "brahmin-bhoj",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/62086dd0-777f-11ec-ac79-6fb5e2d8ebed.png",
    price: 1500,
  },
  {
    id: 46,
    title: "Dhanteras Puja",
    slug: "dhanteras-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e490eb30-a0f3-11f0-a1c4-a3d6663b1cbc.png",
    price: 5100,
  },
  {
    id: 47,
    title: "Vara Mahalakshmi Puja",
    slug: "vara-mahalakshmi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/72907e10-7777-11ec-8fa6-91fda904909a.png",
    price: 5100,
  },
  {
    id: 48,
    title: "Tulsi Vivah",
    slug: "tulsi-vivah",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b2d03b50-b560-11f0-abce-9bdf026d6b32.png",
    price: 5100,
  },
  {
    id: 49,
    title: "Pitru Paksha Puja",
    slug: "pitru-paksha-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b9f7dec0-895b-11f0-9790-8be934270929.png",
    price: 3100,
  },
  {
    id: 50,
    title: "Lakshmi Narayana Hrudaya Parayana",
    slug: "lakshmi-narayana-hrudaya-parayana",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/1bffbc40-8813-11f0-8e36-91332d34f258.png",
    price: 5100,
  },
  {
    id: 51,
    title: "Mangala Gauri Vratam",
    slug: "mangala-gauri-vratam",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f55f1c70-751b-11ec-a2d9-e52560e91265.png",
    price: 5100,
  },
  {
    id: 52,
    title: "Lakshmi Narayan Hrudaya Homa",
    slug: "lakshmi-narayan-hrudaya-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/5fbb6350-895d-11f0-9dbf-25c804c6dc61.png",
    price: 11000,
  },
  {
    id: 53,
    title: "Punyahavachanam",
    slug: "punyahavachanam",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a00adae0-7779-11ec-81d8-81569c3f48c9.png",
    price: 3500,
  },
  {
    id: 54,
    title: "Kumbha Vivah",
    slug: "kumbha-vivah",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/aff8f080-7779-11ec-87ec-0349f9767dfd.png",
    price: 7500,
  },
  {
    id: 55,
    title: "Arka Vivah",
    slug: "arka-vivah",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c82da4c0-7779-11ec-aad7-618e5302f969.png",
    price: 7500,
  },
  {
    id: 56,
    title: "Kaal Sarpa Dosha Puja",
    slug: "kaal-sarpa-dosha-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/3bdf32c0-777a-11ec-95cb-13cfd9d94c1e.png",
    price: 10000,
  },
  {
    id: 57,
    title: "Lakshmi Kubera Homa",
    slug: "lakshmi-kubera-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d32fe020-777a-11ec-bc58-5bf33de2cffa.png",
    price: 5100,
  },
  {
    id: 58,
    title: "Anantha Padmanabha Vratham",
    slug: "anantha-padmanabha-vratham",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/ec34c9a0-777a-11ec-9403-25cc1bb4dffc.png",
    price: 5100,
  },
  {
    id: 59,
    title: "Mata Ki Chawki",
    slug: "mata-ki-chawki",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/fd43e950-777a-11ec-86b9-93931bec6bd6.png",
    price: 18000,
  },
  {
    id: 60,
    title: "Kedareshwara Vrat Katha",
    slug: "kedareshwara-vrat-katha",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/11018c70-777b-11ec-b04d-bbd41c87d8d4.png",
    price: 5100,
  },
  {
    id: 61,
    title: "Vishwakarma Puja",
    slug: "vishwakarma-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2191ff10-777b-11ec-a069-697a3abb2eca.png",
    price: 4100,
  },
  {
    id: 62,
    title: "Lalitha Sahasranamam Puja",
    slug: "lalitha-sahasranamam-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/492d5720-777b-11ec-91b1-2909bd91aa8a.png",
    price: 5100,
  },
  {
    id: 63,
    title: "Dhanavantari Homa",
    slug: "dhanavantari-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/66bc0270-777b-11ec-8299-aff4fbee923f.png",
    price: 7500,
  },
  {
    id: 64,
    title: "Pavamana Homa",
    slug: "pavamana-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a7162a30-777b-11ec-a40e-4f08930dd8e2.png",
    price: 15000,
  },
  {
    id: 65,
    title: "Bhagavathi Seva",
    slug: "bhagavathi-seva",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b8439350-777b-11ec-a61f-37396513912e.png",
    price: 7500,
  },
  {
    id: 66,
    title: "Udaka Shanti Puja",
    slug: "udaka-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c7ce3a20-777b-11ec-959a-51c96bf332f6.png",
    price: 15000,
  },
  {
    id: 67,
    title: "Ashlesha Bali Puja",
    slug: "ashlesha-bali-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/df1c4b60-777b-11ec-a277-c5ce3f049bd6.png",
    price: 15000,
  },
  {
    id: 68,
    title: "Drishti Durga Homa",
    slug: "drishti-durga-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f28f54e0-777b-11ec-945f-f391e581414b.png",
    price: 9000,
  },
  {
    id: 69,
    title: "Rudra Homa",
    slug: "rudra-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2690a2a0-777c-11ec-ba34-814fa819181f.png",
    price: 11000,
  },
  {
    id: 70,
    title: "Durga Deepa Namaskara Puja",
    slug: "durga-deepa-namaskara-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/402c50b0-777c-11ec-90b1-53794381f92e.png",
    price: 12000,
  },
  {
    id: 71,
    title: "Lakshmi Narsimha Homa",
    slug: "lakshmi-narsimha-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/53752c20-777c-11ec-9b6d-89667b28d7fc.png",
    price: 7500,
  },
  {
    id: 72,
    title: "Kushmanda Homa",
    slug: "kushmanda-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/661e6610-777c-11ec-8339-3542c9b8348b.png",
    price: 11000,
  },
  {
    id: 73,
    title: "Asthi Visarjan/Sanchay Rituals",
    slug: "asthi-visarjansanchay-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/499e3430-777f-11ec-9825-4362d4de57a6.png",
    price: 4100,
  },
  {
    id: 74,
    title: "4th Day Bengali Shradh Rituals",
    slug: "4th-day-bengali-shradh-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e2e74b40-21e1-11ed-ae8a-fdafc74aa81f.png",
    price: 7500,
  },
  {
    id: 75,
    title: "Upanayanam/Janeo/Thread",
    slug: "upanayanamjaneothread",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a51c2c60-777c-11ec-a772-35f50baddbb9.png",
    price: 8500,
  },
  {
    id: 76,
    title: "Garud Puran Path",
    slug: "garud-puran-path",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/142b3010-e32e-11ec-9639-9ff3f6b2f81a.png",
    price: 11000,
  },
  {
    id: 77,
    title: "Daswa-Terahvin/10th-13th Day",
    slug: "daswa-terahvin10th-13th-day",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f439bc00-01f5-11ed-9560-4ded13709687.png",
    price: 5100,
  },
  {
    id: 78,
    title: "11th Day Bengali Shradh Rituals",
    slug: "11th-day-bengali-shradh-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/51357e50-21e5-11ed-8106-f9ca7a2ac305.png",
    price: 11000,
  },
  {
    id: 79,
    title: "Shukraditya Sandhi Shanti Homa",
    slug: "shukraditya-sandhi-shanti-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c45ef710-777c-11ec-b453-899767e9c47c.png",
    price: 15000,
  },
  {
    id: 80,
    title: "Pratyangira Devi Homa",
    slug: "pratyangira-devi-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/dce98240-777c-11ec-90b3-d18e1d71e984.png",
    price: 15000,
  },
  {
    id: 81,
    title: "11th Day / 13th Day / 16th Day Shradh Rituals",
    slug: "11th-day-13th-day-16th-day-shradh-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/83d4f5b0-bfb3-11ec-819a-916956112ff9.png",
    price: 10000,
  },
  {
    id: 82,
    title: "Dhanishta Panchaka Shanti",
    slug: "dhanishta-panchaka-shanti",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f25f9ae0-777c-11ec-9b64-87d2a58172cb.png",
    price: 11000,
  },
  {
    id: 83,
    title: "Terahvin Puja/13th Day Rituals",
    slug: "terahvin-puja13th-day-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e05d72d0-01f2-11ed-b2b6-0fe6724c7d73.png",
    price: 5100,
  },
  {
    id: 84,
    title: "Swayamvara Parvati Homa",
    slug: "swayamvara-parvati-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/0e614520-777d-11ec-8f43-2d8f6e7c0683.png",
    price: 15000,
  },
  {
    id: 85,
    title: "Narayan Bali Puja",
    slug: "narayan-bali-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/8d301050-777c-11ec-9119-7b53814b6c54.png",
    price: 11000,
  },
  {
    id: 86,
    title: "Kuja Rahu Sandhi Shanti Homa",
    slug: "kuja-rahu-sandhi-shanti-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/49e709c0-777d-11ec-9250-7bbb91028f48.png",
    price: 15000,
  },
  {
    id: 87,
    title: "Rahu Brahaspati Sandhi Shanti",
    slug: "rahu-brahaspati-sandhi-shanti",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/72859960-777d-11ec-bebd-077ba3165e24.png",
    price: 14600,
  },
  {
    id: 88,
    title: "Kalabhairava Homa",
    slug: "kalabhairava-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/86dd3640-777d-11ec-98ed-7139eda444a2.png",
    price: 7500,
  },
  {
    id: 89,
    title: "Shani Shanti Puja And Jaap",
    slug: "shani-shanti-puja-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a0d257d0-777d-11ec-b14d-fdeb62a851c0.png",
    price: 11000,
  },
  {
    id: 90,
    title: "Shatru Samhara Homa",
    slug: "shatru-samhara-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b3f3d3f0-777d-11ec-bb82-35042a057438.png",
    price: 21000,
  },
  {
    id: 91,
    title: "Mangal Shanti Puja",
    slug: "mangal-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/ca304dc0-777d-11ec-8de4-1db4a8166529.png",
    price: 8500,
  },
  {
    id: 92,
    title: "Rahu Shanti Puja",
    slug: "rahu-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e52cdca0-777d-11ec-8345-e517ee63b419.png",
    price: 7500,
  },
  {
    id: 93,
    title: "Durga Homa",
    slug: "durga-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/fd2b17d0-777d-11ec-8894-add13fd34e2c.png",
    price: 6500,
  },
  {
    id: 94,
    title: "Durga Lakshmi Saraswati Homa",
    slug: "durga-lakshmi-saraswati-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/1bae5b40-777e-11ec-b061-1932c1aae99f.png",
    price: 7500,
  },
  {
    id: 95,
    title: "Budha Shanti Puja And Jaap",
    slug: "budha-shanti-puja-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/34f4b3a0-777e-11ec-bf4f-8f2f4d27669f.png",
    price: 7500,
  },
  {
    id: 96,
    title: "Chandra Shanti Puja And Jaap",
    slug: "chandra-shanti-puja-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/4be49550-777e-11ec-aac4-9da07b264f66.png",
    price: 7500,
  },
  {
    id: 97,
    title: "Guru Shanti Puja And Jaap",
    slug: "guru-shanti-puja-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/63677e90-777e-11ec-aeaa-290a6707da09.png",
    price: 8500,
  },
  {
    id: 98,
    title: "Santan Gopal Homa",
    slug: "santan-gopal-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/72ea23b0-777e-11ec-bcb8-f5be51a107f5.png",
    price: 11000,
  },
  {
    id: 99,
    title: "Ketu Shanti Puja And Jaap",
    slug: "ketu-shanti-puja-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/8b5fe290-777e-11ec-a958-9de26a2262b6.png",
    price: 3500,
  },
  {
    id: 100,
    title: "Surya Shanti Puja And Jaap",
    slug: "surya-shanti-puja-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a2fff0f0-777e-11ec-b5ce-1d24dda7758b.png",
    price: 7500,
  },
  {
    id: 101,
    title: "Shukra Shanti Puja And Jaap",
    slug: "shukra-shanti-puja-and-jaap",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/ba23e630-777e-11ec-9bd6-a9d60391a8a3.png",
    price: 7500,
  },
  {
    id: 102,
    title: "Aksharabhyasam",
    slug: "aksharabhyasam",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c7d45870-72c1-11f0-8208-01e61839f43c.png",
    price: 5100,
  },
  {
    id: 103,
    title: "Devata Kalyanotsavam",
    slug: "devata-kalyanotsavam",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/3c06ca60-777f-11ec-84f4-bb2b80754f8f.png",
    price: 35000,
  },
  {
    id: 104,
    title: "Amavasya Tarpanam",
    slug: "amavasya-tarpanam",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/83a35520-777f-11ec-a731-07653e5dfeef.png",
    price: 3100,
  },
  {
    id: 105,
    title: "Bhoo Varaha Homa",
    slug: "bhoo-varaha-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/334e48e0-6585-11ed-af3a-4fa538289e31.png",
    price: 11000,
  },
  {
    id: 106,
    title: "Sudarshana Homa",
    slug: "sudarshana-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c6abb8f0-777f-11ec-bab5-0f75dfb4380c.png",
    price: 15000,
  },
  {
    id: 107,
    title: "Gayatri Havan",
    slug: "gayatri-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d9638200-777f-11ec-acd2-850bd34278fa.png",
    price: 5100,
  },
  {
    id: 108,
    title: "Markandeya Homa For Good Health And Long Life",
    slug: "markandeya-homa-for-good-health-long-life",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/04577590-7780-11ec-a5c8-67454db6ae88.png",
    price: 15000,
  },
  {
    id: 109,
    title: "Punsavan Sanskar",
    slug: "punsavan-sanskar",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/217e8a90-ab3c-11ec-8257-c1b02319319a.png",
    price: 5100,
  },
  {
    id: 110,
    title: "Pitru Dosha Shanti Puja",
    slug: "pitru-dosha-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/545c5400-a811-11ec-8b1b-e72949bc59ab.png",
    price: 15000,
  },
  {
    id: 111,
    title: "Geeta Path And Havan",
    slug: "geeta-path-and-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b982c4f0-a81c-11ec-b3ff-4bc6eda391f2.png",
    price: 5100,
  },
  {
    id: 112,
    title: "Ganesha Puja",
    slug: "ganesha-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a1f68ad0-af4f-11ec-ae32-473cb87a00cc.png",
    price: 4100,
  },
  {
    id: 113,
    title: "Ekadashi Vrat Udyapan Puja",
    slug: "ekadashi-vrat-udyapan-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/34f3b480-b958-11ec-86c2-25d42ef5526b.png",
    price: 4100,
  },
  {
    id: 114,
    title: "Shashti Puja / Chatti Puja",
    slug: "shashti-puja-chatti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/859f2370-e23d-11ec-9d3d-af41d15a6b64.png",
    price: 4100,
  },
  {
    id: 115,
    title: "Sai Baba Puja",
    slug: "sai-baba-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/3b7a2810-f6d4-11ec-8dde-0d6506a85fd1.png",
    price: 5100,
  },
  {
    id: 116,
    title: "Bajrang Baan Path",
    slug: "bajrang-baan-path",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/eec143b0-fb68-11ec-a185-b196ed0a1c29.png",
    price: 5500,
  },
  {
    id: 117,
    title: "Tripad Nakshatra Dosha Shanti Puja",
    slug: "tripad-nakshatra-dosha-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e1120a80-186e-11ed-93d8-1dcfdb3c18bc.png",
    price: 15000,
  },
  {
    id: 118,
    title: "Vasakal / Main Door Frame Puja",
    slug: "vasakal-main-door-frame-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c0bc10b0-43a4-11ed-90a8-e519118537c7.png",
    price: 5100,
  },
  {
    id: 119,
    title: "Dasa Mahavidya Homa",
    slug: "dasa-mahavidya-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d22ac4c0-4879-11ed-bbed-5ddd90f29f4d.png",
    price: 25100,
  },
  {
    id: 120,
    title: "Lakshmi Puja",
    slug: "lakshmi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e9e5c7e0-59b1-11ed-b2a7-5134a5b0815f.png",
    price: 4100,
  },
  {
    id: 121,
    title: "Guru Rahu Chandal Yog Puja",
    slug: "guru-rahu-chandal-yog-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a0d390b0-61cd-11ed-89ba-a72db1ab378c.png",
    price: 11000,
  },
  {
    id: 122,
    title: "Guru Ketu Chandal Yog Shanti Puja",
    slug: "guru-ketu-chandal-yog-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/91d13f70-61cc-11ed-9eb2-3fb1a3cd9042.png",
    price: 11000,
  },
  {
    id: 123,
    title: "Kanak Dhara Puja",
    slug: "kanak-dhara-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f93e4720-64e6-11ed-8bbd-8baef9d5c578.png",
    price: 5100,
  },
  {
    id: 124,
    title: "Pooja For Happy Married Life",
    slug: "pooja-for-happy-married-life",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/84c68900-6571-11ed-8350-b7eeeebebab3.png",
    price: 6500,
  },
  {
    id: 125,
    title: "Pooja For Getting Own House",
    slug: "pooja-for-getting-own-house",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a2efd4e0-65b9-11ed-840b-39e35c9e1a56.png",
    price: 11000,
  },
  {
    id: 126,
    title: "Pooja For Childless Couples",
    slug: "pooja-for-childless-couples",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f3989720-6582-11ed-b7f8-7b7744627d3b.png",
    price: 11000,
  },
  {
    id: 127,
    title: "Pooja For Financial Problems",
    slug: "pooja-for-financial-problems",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/4296f620-6587-11ed-92f9-f5285340f96c.png",
    price: 5100,
  },
  {
    id: 128,
    title: "Pooja For Getting Job",
    slug: "pooja-for-getting-job",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/02795be0-6650-11ed-b640-fd72bb0c958f.png",
    price: 5500,
  },
  {
    id: 129,
    title: "Bala Ganapati Homa",
    slug: "bala-ganapati-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/8416fa80-66fa-11ed-b697-f51224485628.png",
    price: 15000,
  },
  {
    id: 130,
    title: "Aghorastra Homa",
    slug: "aghorastra-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/06b68b40-670e-11ed-ae54-8f401083967d.png",
    price: 15000,
  },
  {
    id: 131,
    title: "Aditya Hrudaya Homa",
    slug: "aditya-hrudaya-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/6e9722a0-6721-11ed-bc63-bb6592acfed3.png",
    price: 15000,
  },
  {
    id: 132,
    title: "Gnana Saraswati Vidhya Ganapathi Homa",
    slug: "gnana-saraswati-vidhya-ganapathi-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/35c64de0-6730-11ed-9ec4-01224a870e15.png",
    price: 7500,
  },
  {
    id: 133,
    title: "Vishnu Sahasranamam Puja",
    slug: "vishnu-sahasranamam-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b6750dd0-6a1b-11ed-a2bd-e589f97fb3c7.png",
    price: 4100,
  },
  {
    id: 134,
    title: "Sri Sukta Homa For Wealth And Prosperity",
    slug: "sri-sukta-homa-for-wealth-and-prosperity",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b9bde5a0-6a2c-11ed-86a7-b9b976617dba.png",
    price: 8100,
  },
  {
    id: 135,
    title: "Tarpan Ritual",
    slug: "tarpan-ritual",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/354a89a0-6bc1-11ed-b296-1daa9f87496f.png",
    price: 3100,
  },
  {
    id: 136,
    title: "Solah Somvar Vrat Udyapan",
    slug: "solah-somvar-vrat-udyapan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d5bf12c0-2616-11ee-90f5-8734959aa894.png",
    price: 4100,
  },
  {
    id: 137,
    title: "Nandi Mukh Puja",
    slug: "nandi-mukh-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b15c9120-2680-11f1-a8a3-41aba230effa.png",
    price: 7500,
  },
  {
    id: 138,
    title: "Shashti Poorthi Puja",
    slug: "shashti-poorthi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/573851a0-b273-11ed-b885-77c6038a5ff3.png",
    price: 25000,
  },
  {
    id: 139,
    title: "Bhima Ratha Shanthi (70th Birthday)",
    slug: "bhima-ratha-shanthi-70th-birthday",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/48139ec0-b28c-11ed-ac0a-2b98d505304c.png",
    price: 21000,
  },
  {
    id: 140,
    title: "Kadali Vivah",
    slug: "kadali-vivah",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/daba1750-c70b-11ed-bb86-871027a5ed8f.png",
    price: 8500,
  },
  {
    id: 141,
    title: "Kuja Dosha Shanti Puja",
    slug: "kuja-dosha-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/aefe4940-eb24-11ed-9a9e-dbb98ca71c16.png",
    price: 12000,
  },
  {
    id: 142,
    title: "Bhuvaneshwari Homa",
    slug: "bhuvaneshwari-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/81322260-0068-11ee-9837-2debb32cd751.png",
    price: 12000,
  },
  {
    id: 143,
    title: "Panditain Bhoj",
    slug: "panditain-bhoj",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/cf652160-02bb-11ee-b1af-03226b21f718.png",
    price: 2100,
  },
  {
    id: 144,
    title: "Linga Dharane Ritual",
    slug: "linga-dharane-ritual",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e53a2e10-6227-11f0-a4e2-0fa0719c8553.png",
    price: 6100,
  },
  {
    id: 145,
    title: "Paap Kartari Dosha Shanti Puja",
    slug: "paap-kartari-dosha-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/7da15be0-c134-11f0-892c-1f170cee8512.png",
    price: 12000,
  },
  {
    id: 146,
    title: "Baglamukhi Shatru Nashak Puja",
    slug: "baglamukhi-shatru-nashak-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/cb12a9c0-12a4-11ee-b7bb-1d1916d4a614.png",
    price: 25000,
  },
  {
    id: 147,
    title: "Vavu Bali – Karkidaka Vavu",
    slug: "vavu-bali-karkidaka-vavu",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2320d970-1e29-11ee-9924-850e98623c99.png",
    price: 5100,
  },
  {
    id: 148,
    title: "Mandir Pran Pratishtha Puja",
    slug: "mandir-pran-pratishtha-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/980890e0-2486-11ee-bcf6-8de004baafe7.png",
    price: 4100,
  },
  {
    id: 149,
    title: "Shri Sai Satcharitra Path And Havan",
    slug: "shri-sai-satcharitra-path-and-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/d15748b0-3a80-11ee-ac2c-3fd73c005ad7.png",
    price: 15000,
  },
  {
    id: 150,
    title: "Sai Baba Kirtan",
    slug: "sai-baba-kirtan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e9a41500-3a84-11ee-90ae-8b2b220a894d.png",
    price: 18000,
  },
  {
    id: 151,
    title: "Krishna Janmashtami Puja",
    slug: "krishna-janmashtami-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/42225190-4567-11ee-b7d5-17323f31e479.png",
    price: 5100,
  },
  {
    id: 152,
    title: "Vaibhav Lakshmi Vrat Udyapan",
    slug: "vaibhav-lakshmi-vrat-udyapan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c24c0da0-46fa-11ee-899c-6fda067b839f.png",
    price: 5100,
  },
  {
    id: 153,
    title: "Pitru Milan Puja",
    slug: "pitru-milan-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/86656600-488e-11ee-880c-532d885b33fd.png",
    price: 8500,
  },
  {
    id: 154,
    title: "Vamana Janma Puja And Havan",
    slug: "vamana-janma-puja-and-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/3fa47250-5baa-11ee-9572-2f67e2d10ef1.png",
    price: 5100,
  },
  {
    id: 155,
    title: "Tripindi Shradh Puja",
    slug: "tripindi-shradh-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/4182c800-5cf8-11ee-9482-aff24dd56db7.png",
    price: 11000,
  },
  {
    id: 156,
    title: "Bharani Shradh (Pitru Paksha)",
    slug: "bharani-shradh-pitru-paksha",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/73d856c0-5ded-11ee-b8c4-c564b00ef1e0.png",
    price: 6500,
  },
  {
    id: 157,
    title: "Narayan Nagbali Puja",
    slug: "narayan-nagbali-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e70417c0-6068-11ee-8d69-6dfe802dd515.png",
    price: 31000,
  },
  {
    id: 158,
    title: "Sat Chandi Path And Havan",
    slug: "sat-chandi-path-and-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/beefdb30-634c-11ee-8a7c-111a67548c48.png",
    price: 161000,
  },
  {
    id: 159,
    title: "Nahawan Puja",
    slug: "nahawan-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/ff84a760-8946-11ee-9096-4309719c0ee6.png",
    price: 4500,
  },
  {
    id: 160,
    title: "4th / 5th Day Shradh Rituals",
    slug: "4th-5th-day-shradh-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/db509a10-b607-11ee-b86c-259ab0e01819.png",
    price: 10000,
  },
  {
    id: 161,
    title: "Vishnu Vivah",
    slug: "vishnu-vivah",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/ca2f0f00-c57a-11ee-bd6f-4100a138d15f.png",
    price: 7500,
  },
  {
    id: 162,
    title: "9th To 13th Day Rituals",
    slug: "9th-to-13th-day-rituals",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/f44b3560-c5b6-11ee-a38d-cf23f8710a79.png",
    price: 151000,
  },
  {
    id: 163,
    title: "Roka / Bariksha Ceremony",
    slug: "roka-bariksha-ceremony",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/55dc2130-39ce-11ef-ba05-9d3cc5411091.png",
    price: 4100,
  },
  {
    id: 164,
    title: "Surya Puja And Havan",
    slug: "surya-puja-and-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/46e2e810-d022-11ef-a2a9-1f821b375ea8.png",
    price: 5100,
  },
  {
    id: 165,
    title: "Naga Pratishta Pooja",
    slug: "naga-pratishta-pooja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/138c62c0-dcc4-11ef-b9c8-1ff965f2751f.png",
    price: 55000,
  },
  {
    id: 166,
    title: "Santan Lakshmi Puja",
    slug: "santan-lakshmi-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/9799dd40-e1e3-11ef-8601-454a5e81a9be.png",
    price: 11000,
  },
  {
    id: 167,
    title: "Hanuman Jayanti Puja",
    slug: "hanuman-jayanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/4e913190-144d-11f0-aa78-0f777f0db323.png",
    price: 5100,
  },
  {
    id: 168,
    title: "Gotra Dosha Shanti Puja",
    slug: "gotra-dosha-shanti-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/9d804590-1ae5-11f0-b9cd-1d0c6cbb08f5.png",
    price: 11000,
  },
  {
    id: 169,
    title: "Nakshatra Shanti Puja And Homa",
    slug: "nakshatra-shanti-puja-and-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/2dba0120-3326-11f0-b5d6-5fae4258758e.png",
    price: 15000,
  },
  {
    id: 170,
    title: "Vat Savitri Vrat Katha Puja",
    slug: "vat-savitri-vrat-katha-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/0a936870-3549-11f0-a19b-6f848ec20b58.png",
    price: 6100,
  },
  {
    id: 171,
    title: "Simantonnayana Sanskar Puja",
    slug: "simantonnayana-sanskar-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/b9d1ec00-36f5-11f0-8d50-7def774ba7cc.png",
    price: 5100,
  },
  {
    id: 172,
    title: "Ghudchadi Ritual Puja",
    slug: "ghudchadi-ritual-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/bf20e700-3c59-11f0-a662-f1c2c1835113.png",
    price: 5100,
  },
  {
    id: 173,
    title: "Tulasi Nau Puja",
    slug: "tulasi-nau-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/c4257fa0-42ae-11f0-b88c-29d218296847.png",
    price: 5100,
  },
  {
    id: 174,
    title: "Khatu Shyam Kirtan Puja",
    slug: "khatu-shyam-kirtan-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/fac3b120-42b2-11f0-946b-3b0648e2a2de.png",
    price: 15000,
  },
  {
    id: 175,
    title: "Uma Maheshwari Puja And Homa",
    slug: "uma-maheshwari-puja-and-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/1e3f4d60-4a6b-11f0-9f89-ad228d45eae8.png",
    price: 6500,
  },
  {
    id: 176,
    title: "Randal Maa Puja",
    slug: "randal-maa-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/73d532d0-4a70-11f0-9273-9708a731e4ab.png",
    price: 6500,
  },
  {
    id: 177,
    title: "Pitru Paksha Puja In Gaya Ji",
    slug: "pitru-paksha-puja-in-gaya-ji",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/27dce6e0-50ee-11f0-a3ef-bb164a007092.png",
    price: 21000,
  },
  {
    id: 178,
    title: "Jatakarma Sanskar Puja",
    slug: "jatakarma-sanskar-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/3bfd3690-557e-11f0-898b-898414244d14.png",
    price: 4100,
  },
  {
    id: 179,
    title: "Gau Daan Puja",
    slug: "gau-daan-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/8af380e0-5a42-11f0-a4ab-a1f21d66dab6.png",
    price: 6500,
  },
  {
    id: 180,
    title: "Ritu Shanti Homa For Child Attaing Maturity",
    slug: "ritu-shanti-homa-for-child-attaing-maturity",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/39301010-7aa6-11f0-b5bf-a15f3ed1877a.png",
    price: 11000,
  },
  {
    id: 181,
    title: "Ekodash Shradh Puja",
    slug: "ekodash-shradh-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/e03d2e00-895c-11f0-a75f-23175b72f5ec.png",
    price: 5100,
  },
  {
    id: 182,
    title: "Gauri Shankar Puja And Havan",
    slug: "gauri-shankar-puja-and-havan",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/a0d09d20-cf3f-11f0-bf6d-77d5da15ef6c.png",
    price: 11000,
  },
  {
    id: 183,
    title: "Sarva Dosha Nivarana Puja",
    slug: "sarva-dosha-nivarana-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/cb5f15b0-cf4d-11f0-bd27-0b1ea8669ea7.png",
    price: 21000,
  },
  {
    id: 184,
    title: "Shatabdi Mahamrutyunjay Shanti & Homa",
    slug: "shatabdi-mahamrutyunjay-shanti-homa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/69f796d0-d414-11f0-a1c1-2b7902d3bfb2.png",
    price: 11000,
  },
  {
    id: 185,
    title: "Garbhadhana Sanskar Puja",
    slug: "garbhadhana-sanskar-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/0be29930-2296-11f1-9980-adab6dec618d.png",
    price: 5100,
  },
];

export type Place = {
  id: number;
  title: string;
  slug: string;
  image: string;
};

export const PLACES: Place[] = [
  {
    id: 1,
    title: "Bangalore",
    slug: "bangalore",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/bba57020-ef28-11f0-8e84-6f80a51348e0.png",
  },
  {
    id: 2,
    title: "Hyderabad",
    slug: "hyderabad",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/23113de0-ef29-11f0-8d1b-a72b683e310b.png",
  },
  {
    id: 3,
    title: "Delhi-NCR",
    slug: "delhi-ncr",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/ed7213b0-ef28-11f0-aba2-21a743c0fd2f.png",
  },
  {
    id: 4,
    title: "Mumbai",
    slug: "mumbai",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/43558e10-ef29-11f0-b668-15f0b147d524.png",
  },
  {
    id: 5,
    title: "Chennai",
    slug: "chennai",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/e650b360-ef28-11f0-99f0-d3006ec4e8ab.png",
  },
  {
    id: 6,
    title: "Kolkata",
    slug: "kolkata",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/37801b70-ef29-11f0-8fa5-41ee53c45d0c.png",
  },
  {
    id: 7,
    title: "Pune",
    slug: "pune",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/9ed35de0-ef29-11f0-af35-1be3c43244dd.png",
  },
  {
    id: 8,
    title: "Ahmedabad",
    slug: "ahmedabad",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/b4ba3800-ef28-11f0-ae23-317b65b136b3.png",
  },
  {
    id: 9,
    title: "Lucknow",
    slug: "lucknow",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/3d47e7f0-ef29-11f0-bdfd-b7d1790b3bd5.png",
  },
  {
    id: 10,
    title: "Patna",
    slug: "patna",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/981db130-ef29-11f0-b4a7-c107c99e7064.png",
  },
  {
    id: 11,
    title: "Indore",
    slug: "indore",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/2af38440-ef29-11f0-b961-15a1bbe61bab.png",
  },
  {
    id: 12,
    title: "Jaipur",
    slug: "jaipur",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/31dca840-ef29-11f0-afa7-c70553e6a528.png",
  },
  {
    id: 13,
    title: "Agra",
    slug: "agra",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/ad785850-ef28-11f0-8d10-9d51acbceed5.png",
  },
  {
    id: 14,
    title: "Nagpur",
    slug: "nagpur",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/8c1feb80-ef29-11f0-a8b6-9d1409d6ea3f.png",
  },
  {
    id: 15,
    title: "Mysuru",
    slug: "mysuru",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/49086a00-ef29-11f0-b1b5-93e9f9851adb.png",
  },
  {
    id: 16,
    title: "Visakhapatnam",
    slug: "visakhapatnam",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/c9c8c5e0-ef29-11f0-a0af-57df080e06a1.png",
  },
  {
    id: 17,
    title: "Varanasi",
    slug: "varanasi",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/c3c50fa0-ef29-11f0-96b8-733f111daff3.png",
  },
  {
    id: 18,
    title: "Bhopal",
    slug: "bhopal",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/c239eda0-ef28-11f0-a78d-45640c64719e.png",
  },
  {
    id: 19,
    title: "Chandigarh",
    slug: "chandigarh",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/df15f9e0-ef28-11f0-8cac-85a7dd06605e.png",
  },
  {
    id: 20,
    title: "Haridwar",
    slug: "haridwar",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/1d8ab480-ef29-11f0-89c5-333651ecb2e5.png",
  },
  {
    id: 21,
    title: "Goa",
    slug: "goa",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/081d0ec0-ef29-11f0-bc82-31aaf94ff718.png",
  },
  {
    id: 22,
    title: "Faridabad",
    slug: "faridabad",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/fb307da0-ef28-11f0-a661-9d1b98748e66.png",
  },
  {
    id: 23,
    title: "Raipur",
    slug: "raipur",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/a5d3c6a0-ef29-11f0-9093-c54d3a8bc06d.png",
  },
  {
    id: 24,
    title: "Nashik",
    slug: "nashik",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/9223fb30-ef29-11f0-8a84-a5c105b70bfd.png",
  },
  {
    id: 25,
    title: "Surat",
    slug: "surat",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/be287be0-ef29-11f0-9daa-6b00aec05311.png",
  },
  {
    id: 26,
    title: "Rameshwaram",
    slug: "rameshwaram",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/ab2fb120-ef29-11f0-a056-7bc1350e7356.png",
  },
  {
    id: 27,
    title: "Ranchi",
    slug: "ranchi",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/b17b0f50-ef29-11f0-be25-2941028f7181.png",
  },
  {
    id: 28,
    title: "Bhubaneswar",
    slug: "bhubaneswar",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/c94fdce0-ef28-11f0-b0a7-5d7fae448ffc.png",
  },
  {
    id: 29,
    title: "E-Puja",
    slug: "e-puja",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/1353c8a0-ef29-11f0-a5ab-c1db19ad8f4b.png",
  },
  {
    id: 30,
    title: "Srirangapatna",
    slug: "srirangapatna",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/b7611fe0-ef29-11f0-a1a7-67e3a3d7766b.png",
  },
  {
    id: 31,
    title: "Gaya",
    slug: "gaya",
    image:
      "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/location/0196bfa0-ef29-11f0-98af-f5171cab9345.png",
  },
];
