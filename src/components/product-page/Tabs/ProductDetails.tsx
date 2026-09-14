import React from "react";

export type SpecItem = {
  label: string;
  value: string;
};

const specsData: SpecItem[] = [
  {
    label: "Puja duration",
    value: "1–2 hours",
  },
  {
    label: "Puja performed by",
    value: "Experienced pandit",
  },
  {
    label: "Languages",
    value: "Kannada, Hindi, English",
  },
  {
    label: "Location",
    value: "At your home or preferred location",
  },
  {
    label: "Samagri",
    value: "Available as per selected package",
  },
  {
    label: "Booking",
    value: "Advance booking required",
  },
];

const ProductDetails = () => {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {specsData.map((item) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-4 sm:py-5"
          key={item.label}
        >
          <p className="text-sm text-black/50">{item.label}</p>

          <p className="sm:col-span-2 text-sm text-black font-medium leading-6">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
