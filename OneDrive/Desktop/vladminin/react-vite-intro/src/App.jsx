import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import Differences from "./components/Differences";
import IntroSection from "./components/IntraSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectsSection";

export default function App() {
  const [tab, setTab]= useState('effect');
  const [visible, setVisible] = useState(true)

  // setTimeout(() => {
  //   setVisible(false)
  //   }, 3000)  

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>
{tab === 'main' && (
  <>
     <TeachingSection />
     <Differences />
  </>
)}

{tab==='feedback' && (
  <>
  <FeedbackSection />
  </>
)}
{tab==='effect' && (
  <>
  <EffectSection />
  </>
)}

      </main>
    </>
  );
}
//export default App
