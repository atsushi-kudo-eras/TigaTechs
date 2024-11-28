import { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import SpMenu from "./SpMenu";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || '';
    setIsMobile(/Mobile|Android|iP(hone|od|ad)/i.test(userAgent));
  }, []);

  return isMobile;
};

const Menu: NextPage = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  if (isMobile) return (
    <>
      {isOpen && <SpMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div
        className="spHbgMenu"
        onClick={() => setIsOpen(true)}
      >
        <span />
      </div>
    </>
  )
  else return (
    <nav className="menu">
      <Link href="/profile">Profile</Link>
      <Link href="/technology">Technology</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

export default Menu;