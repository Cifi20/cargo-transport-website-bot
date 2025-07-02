import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import TariffSection from "@/components/TariffSection";
import LoaderServices from "@/components/LoaderServices";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Advantages />
      <TariffSection />
      <LoaderServices />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
