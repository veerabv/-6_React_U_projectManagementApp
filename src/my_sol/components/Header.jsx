import { memo } from "react";

const Header =memo( () => {
  return (
    <header className="bg-slate-200 p-2 text-center">
      <h1 className="font-main font-bold text-[26px]">Project Management App</h1>
    </header>
  );
});

export default Header;


