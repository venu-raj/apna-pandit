import React from "react";
import ProductDetails from "./ProductDetails";

const ProductDetailsContent = () => {
  return (
    <section className="space-y-8">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3">
          About This Puja
        </h3>

        <p className="text-sm sm:text-base leading-7 text-black/60 max-w-3xl">
          Book a traditional puja performed by experienced pandits. Our services
          are designed to help you perform sacred rituals with proper guidance,
          authentic traditions, and a peaceful experience at your preferred
          location.
        </p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
          Puja Details
        </h3>

        <ProductDetails />
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
          What&apos;s Included
        </h3>

        <ul className="space-y-3 text-sm sm:text-base text-black/60 leading-6">
          <li>• Experienced pandit for the selected puja</li>
          <li>• Complete guidance throughout the rituals</li>
          <li>• Puja samagri as per the selected package</li>
          <li>• Personalized booking assistance</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetailsContent;
