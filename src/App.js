import { ChakraProvider } from '@chakra-ui/react'

import NavBar from "components/NavBar";
import Banner from "components/Banner";
import Intro from "components/Intro";
import Numbers from 'components/Numbers';
import Maps from 'components/Maps';
import Faq from 'components/Faq';
import Footer from 'components/Footer';





function App() {


  return (
    <ChakraProvider>
      <NavBar/>
      <Banner />
      <Intro />
      <Numbers />
      <Maps />
      <Faq />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
