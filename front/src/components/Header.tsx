import Link from "next/link";

type Props = {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header className="header">
      <Link href="/">A.Kudo</Link>
      <h1 className="header-h1">{title}</h1>
    </header>
  )
}

export default Header;
