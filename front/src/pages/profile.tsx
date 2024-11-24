import HeadComp from "@/components/HeadComp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useFetchJson } from "@/common/fetch";
import endpoint from "@/common/endpoint";
import Link from "next/link";

// constant text
const PAGE_TITLE = "Profile";

export default function Profile() {
  const intro = useFetchJson(endpoint.intro);
  const business = useFetchJson(endpoint.business);
  const prj = useFetchJson(endpoint.prj);

  return (
    <>
      <HeadComp pageTitle={PAGE_TITLE} />
      <Header title={PAGE_TITLE} />
      <Menu />
      <main>
        <div className="wrapper">
          <h2>自己紹介</h2>
          {intro?.map((obj, index) => {
            return (
              <p key={index}>{obj?.text}</p>
            );
          })}
        </div>

        <div className="wrapper">
          <h2>事業内容</h2>
          {business?.map((obj, i) => {
            return (
              <ul className="first-items" key={i}>
                <li>{obj?.head}</li>
                <ul className="child-items">
                  <p className="list-text">{obj?.text}</p>
                </ul>
              </ul>
            );
          })}
          <p>お問い合わせは<Link className="link-text" href="/contact">こちら</Link>から</p>
        </div>

        <div className="wrapper">
          <h2>主な参画プロジェクト</h2>
          {prj?.map((obj, i) => {
            return (
              <ul className="first-items" key={i}>
                <li>{obj?.head}</li>
                <ul className="child-items">
                  <li>担当業務</li>
                  <ul className="child-items">
                    {obj?.items.map((text, j) => {
                      return (
                        <li key={j}>{text}</li>
                      );
                    })}
                  </ul>
                </ul>
              </ul>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
