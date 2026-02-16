import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card } from "./Component/Card/card";
import { Header } from "./Component/header/header";
import { Body } from "./Component/Body/body";
import { Tools } from "./Component/tools/tools";
import { Work } from "./Component/Work/work";
import { Contact } from "./Component/contact/contact";
import { Resume } from "./Component/resume/resume";

function Layout() {

  return (
    <>
    <Header/>
    <Body>
      <Card/>
    </Body>
    <Tools />
    <Work/>
    <Contact/>
    </>
  )
}

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
