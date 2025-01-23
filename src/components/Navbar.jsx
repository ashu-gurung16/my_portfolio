import DesktopNav from "./DesktopNav";
import Mobile from "./Mobile";

export default function Navbar({ isChangeTheme, setTheme }) {
  return (
    <>
      <DesktopNav isChangeTheme={isChangeTheme} setTheme={setTheme} />
      <Mobile />
    </>
  );
}
