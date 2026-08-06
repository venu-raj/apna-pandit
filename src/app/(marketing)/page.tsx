import Workflow from "@/components/marketing/workflow";
import WallOfLove from "@/components/marketing/wall-of-love";
import Cta from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Stats from "@/components/marketing/stats";
import Hero from "@/components/marketing/hero";
import Gallery from "@/components/gallery";
import { LOCATIONGALLERY } from "@/constants/location-gallery";
import { SERVICESGALLERY } from "@/constants/services-gallery";

const HomePage = () => {
  return (
    <div className="w-full min-h-dvh pt-18">
      <Hero />
      <Stats />
      <Gallery
        gallery={LOCATIONGALLERY}
        title="Find Verified Pandits Near You"
        description="Our verified Pandits perform Vedic Pujas, Homas, Griha Pravesh, and festival rituals across major Indian cities with complete samagri included."
      />
      <Gallery
        gallery={SERVICESGALLERY}
        title="We provide a range of services"
        description="Book online for a Sacred, Hassle-free Puja Ceremony"
      />
      <Workflow />
      <Faq />
      <WallOfLove />
      <Cta />
    </div>
  );
};

export default HomePage;
