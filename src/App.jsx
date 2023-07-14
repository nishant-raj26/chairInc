import HeroTextContent from "./components/HeroTextContent";
import ImageContainer from "./components/ImageContainer";
import LeftFooter from "./components/LeftFooter";
import Navicons from "./components/Navicons";
import Navlinks from "./components/Navlinks";
import PageCount from "./components/PageCount";
import RightFooter from "./components/RightFooter";

export default function App() {
  return (
    <div className="w-screen h-screen font-alata flex" >
    <div className="h-full flex-1 pl-40 pr-24 pb-8 flex flex-col justify-between " >
      <Navlinks />
      <HeroTextContent />
      <LeftFooter />
      <div>Bottom</div>
    </div>
    <div className="h-full flex-1 bg-[#FFF0C8] pr-40 flex flex-col justify-between relative pb-8" >
      <Navicons />
      <ImageContainer />
      <PageCount />
      <RightFooter />
      <div>Bottom</div>
    </div>
    </div>
  )
} 