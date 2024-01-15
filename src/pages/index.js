import BannerThree from "@/components/BannerSection/BannerThree";
import GallerySectionThree from "@/components/GallerySection/GallerySectionThree";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import ProjectSeven from "@/components/ProjectSection/ProjectSeven";
import ServiceEight from "@/components/ServicesSection/ServiceEight";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";

const Home = () => {
  return (
    <Layout pageTitle="Inicio">
      <HeaderOne headerStyle="header-style-two" logo={4} />
      <MobileMenu />
      <BannerThree />
      <ServiceEight />
      <GallerySectionThree />
      <ProjectSeven />
      <WeWorkSection />
      <ParallaxSection />
      <WeDOSection />
      <MainFooter />
    </Layout>
  );
};

export default Home;
