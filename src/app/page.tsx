import Hero from "./Components/Home/Hero/Hero";
import PortFolio from "./Components/Home/PortFolio/PortFolio";
import WhatIdo from "./Components/Home/WhatIdo/WhatIdo";


export default function Home() {
  return (
    <main className=" container mx-auto py-1">
      <Hero></Hero>
      <WhatIdo></WhatIdo>
      <PortFolio></PortFolio>
    </main>
  );
}
