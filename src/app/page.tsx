import Hero from "./Components/Home/Hero/Hero";
import MyResume from "./Components/Home/MyResume/MyResume";
import PortFolio from "./Components/Home/PortFolio/PortFolio";
import WhatIdo from "./Components/Home/WhatIdo/WhatIdo";
import Contact from "./Components/Home/Contact/Contact";
import Line from "./Components/Common/Line";
import About from "./Components/Home/About/About";


export default function Home() {
  return (
    <main className=" container mx-auto py-1">
      <Hero></Hero>
      <WhatIdo></WhatIdo>
      <PortFolio></PortFolio>
      <Line></Line>
      <MyResume></MyResume>
      <Line></Line>
      <About></About>
      <Line></Line>
      <Contact></Contact>
      
     
    </main>
  );
}
