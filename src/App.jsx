
import { Card } from "./Component/Card/card";
import { Header } from "./Component/header/header";
import { Body } from "./Component/Body/body";
import { Tools } from "./Component/tools/tools";
import { Work } from "./Component/Work/work";
import { Contact } from "./Component/contact/contact";


function App() {
  return (
    <>
     <Header />
     <Body>
      <Card />
     </Body>
     <Tools />
     <Work />
     <Contact />
    </>
  );
}

export default App;
