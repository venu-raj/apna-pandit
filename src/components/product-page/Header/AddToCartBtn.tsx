"use client";

import React from "react";
import { Product } from "@/types/product";
import { WHATSAPP_NUMBER } from "@/constants/contact";

const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  const handleWhatsApp = () => {
    const panditPhoneNumber = WHATSAPP_NUMBER;

    const message = `🙏 Namaste,

I’m interested in the following puja service:

🪔 Puja: ${data.title}
💰 Starting Price: ₹${data.price}

I saw this service on your website and would like to know more.

Could you please share the available dates, package details, and provide a quote?

Thank you. 🙏`;

    const whatsappUrl = `https://wa.me/${panditPhoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      type="button"
      className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
      onClick={handleWhatsApp}
    >
      Get a Quote on WhatsApp
    </button>
  );
};

export default AddToCartBtn;
