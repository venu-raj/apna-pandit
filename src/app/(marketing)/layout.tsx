import WhatsAppWidget from "@/components/global/whatsapp-widget";
import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full relative">
      <Navbar />
      {children}
      <Footer />
      {/* <WhatsAppWidget /> */}
    </main>
  );
};

export default MarketingLayout;
