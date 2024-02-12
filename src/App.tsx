import { Bell, Menu, MessageCircle, Search } from "lucide-react";

import MenuBar from "@/components/layout/navigation/top";
import { useState } from "react";
import SideBar from "@/components/layout/navigation/side";

function App() {
  const [showSideMenu, setshowSideMenu] = useState(false);
  return (
    <div className="">
      <Header showSideBar={showSideMenu} setShowSideBar={setshowSideMenu} />
      <MenuBar />
      <SideBar open={showSideMenu} hide={() => setshowSideMenu(false)} />
    </div>
  );
}

export default App;

interface propTypes {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ showSideBar, setShowSideBar }: propTypes) => {
  return (
    <div className="p-4 flex justify-between items-center bg-backgroundDarker ">
      <div className="w-full flex items-center gap-2">
        <Menu onClick={() => setShowSideBar(!showSideBar)} />
        <h1 className="text-xl w-full flex-1 font-semibold">ERP</h1>
      </div>
      <h1 className="text-xl w-full flex-1 font-semibold">Warehouse</h1>
      <div className="flex w-full justify-end gap-6 items-center">
        <Search />
        <MessageCircle />
        <Bell />
        <div className="p-2 rounded-full bg-primary text-white">DS</div>
      </div>
    </div>
  );
};
