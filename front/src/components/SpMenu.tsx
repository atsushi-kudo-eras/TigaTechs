import ReactModal from "react-modal";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const SpMenu = (props: { isOpen: Boolean, setIsOpen: Function }) => {
  const pathName = usePathname();
  return (
    <ReactModal isOpen={!!props.isOpen} ariaHideApp={false}>
      <div className="spMenuModal">
        <div>
          <button onClick={() => props.setIsOpen(false)}>Close</button>
        </div>
        <nav className="menu">
          <Link href="/" className={pathName === "/" ? "gray" : ""}>Top</Link>
          <Link href="/profile" className={pathName === "/profile" ? "gray" : ""}>Profile</Link>
          <Link href="/technology" className={pathName === "/technology" ? "gray" : ""}>Technology</Link>
          <Link href="/gallery" className={pathName === "/gallery" ? "gray" : ""}>Gallery</Link>
          <Link href="/contact" className={pathName === "/contact" ? "gray" : ""}>Contact</Link>
        </nav>
      </div>
    </ReactModal>
  );
};

export default SpMenu;
