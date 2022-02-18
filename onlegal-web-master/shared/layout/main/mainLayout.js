import Head from "next/head";
import PropTypes from "prop-types";
import MobileMenu from "../../components/mobile-menu/mobileMenu";
import DesktopHeader from "../../components/desktop-header/desktopHeader";
import Footer from "../../components/footer/footer";
import WhatsappBubble from "../../components/whatsapp-bubble/whatsappBubble";

const MainLayout = ({ Content }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MobileMenu />
      <DesktopHeader />
      {Content}
      <WhatsappBubble />
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  Content: PropTypes.element.isRequired,
};

export default MainLayout;
