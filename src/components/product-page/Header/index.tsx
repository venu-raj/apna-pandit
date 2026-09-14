import React from "react";
import PhotoSection from "./PhotoSection";
import { integralCF } from "@/styles/fonts";
import Rating from "@/components/ui/Rating";
import AddToCardSection from "./AddToCardSection";
import { Product } from "@/types/product";
import { cn } from "@/utils";

const Header = ({ data }: { data: Product }) => {
  const discountedPrice =
    data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
        ? data.price - data.discount.amount
        : data.price;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Photos */}
      <div>
        <PhotoSection data={data} />
      </div>

      {/* Service Details */}
      <div>
        <h1
          className={cn([
            integralCF.className,
            "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize",
          ])}
        >
          {data.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center mb-3 sm:mb-3.5">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-50"
            size={25}
            readonly
          />

          <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px]">
            {data.rating.toFixed(1)}
            <span className="text-black/60">/5</span>
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center flex-wrap gap-2.5 mb-5">
          <span className="font-bold text-black text-2xl sm:text-[32px]">
            ₹{discountedPrice}
          </span>

          {data.discount.percentage > 0 || data.discount.amount > 0 ? (
            <span className="font-bold text-black/40 line-through text-xl sm:text-[28px]">
              ₹{data.price}
            </span>
          ) : null}

          {data.discount.percentage > 0 && (
            <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              -{data.discount.percentage}%
            </span>
          )}

          {data.discount.amount > 0 && (
            <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              -₹{data.discount.amount}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-black/60 mb-5 leading-6">
          Book this sacred puja service with experienced and trusted pandits.
          Our pandits perform the rituals according to traditional Vedic
          practices and guide you through every step of the ceremony.
        </p>

        <hr className="h-[1px] border-t-black/10 mb-5" />

        {/* Service Information */}
        <div className="space-y-4 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base text-black/60">
              Service Type
            </span>

            <span className="text-sm sm:text-base font-medium text-black">
              Puja & Ritual
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base text-black/60">Pandit</span>

            <span className="text-sm sm:text-base font-medium text-black">
              Experienced Pandit
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base text-black/60">Language</span>

            <span className="text-sm sm:text-base font-medium text-black">
              Kannada / Hindi / English
            </span>
          </div>
        </div>

        <hr className="h-[1px] border-t-black/10 mb-5" />

        {/* Booking */}
        <AddToCardSection data={data} />
      </div>
    </div>
  );
};

export default Header;
