import DesktopNav from "./DesktopNav";

export default function Navbar({ isChangeTheme, setTheme }) {
  return (
    <>
      <DesktopNav isChangeTheme={isChangeTheme} setTheme={setTheme} />
    </>
  );
}
