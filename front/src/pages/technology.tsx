import HeadComp from "@/components/HeadComp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useFetchJson } from "@/common/fetch";
import endpoint from "@/common/endpoint";

// constant text
const PAGE_TITLE = "Technology";

export default function Technology() {
  const technology = useFetchJson(endpoint.tech);
  return (
    <>
      <HeadComp pageTitle={PAGE_TITLE} />
      <Header title={PAGE_TITLE} />
      <Menu />
      <main>
        <div>
          <h2>技術経験</h2>
          <ul className="first-items">
            {technology?.map((obj, i) => {
              return (
                <div key={i}>
                  <li>{obj?.head}</li>
                  <ul className="child-items">
                    {obj?.items.map((text, j) => {
                      return (
                        <li key={j}>{text}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
