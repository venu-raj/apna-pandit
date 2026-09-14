"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What is included in the puja service?",
    answer:
      "The selected package includes the puja rituals, an experienced pandit, and guidance throughout the ceremony. Samagri availability depends on the package you choose.",
  },
  {
    question: "Can I book the puja at my home?",
    answer:
      "Yes, you can request a home puja at your preferred location. Availability depends on the selected service and your location.",
  },
  {
    question: "How long does the puja take?",
    answer:
      "The duration depends on the type of puja and the selected package. Most services take approximately 1–2 hours.",
  },
  {
    question: "Can I choose a pandit who speaks my language?",
    answer:
      "Yes, you can mention your preferred language during booking. We will try to arrange a pandit based on availability.",
  },
  {
    question: "Do I need to arrange the puja samagri?",
    answer:
      "Samagri arrangements depend on the selected package. Please check the package details or contact us before booking.",
  },
  {
    question: "How can I reschedule my booking?",
    answer:
      "Contact our support team as early as possible if you need to change your booking date or time. Rescheduling is subject to pandit availability.",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">
        Frequently Asked Questions
      </h3>

      <p className="text-sm sm:text-base text-black/60 leading-6 mb-6">
        Everything you need to know before booking your puja.
      </p>

      <Accordion type="single" collapsible className="w-full">
        {faqsData.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx + 1}`}
            className="border-black/10"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-5 hover:no-underline">
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className="text-sm leading-6 text-black/60 pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
