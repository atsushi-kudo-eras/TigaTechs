import { NextPage } from "next";
import Link from "next/link";

const Menu: NextPage = () => {
  return (
    <nav className="menu">
      <Link href="/profile">Profile</Link>
      <Link href="/technology">Technology</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Menu;