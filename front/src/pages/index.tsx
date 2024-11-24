import HeadComp from "@/components/HeadComp";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useFetchJson } from "@/common/fetch";
import endpoint from "@/common/endpoint";

export default function Home() {
  const topText = useFetchJson(endpoint.top);
  return (
    <>
      <HeadComp pageTitle={""} />
      <TopHeader />
      <Menu />
      <main>
        <div>
          <h2>JavaScriptが未来を作る</h2>
          {topText?.map((obj, i) => {
            return (
              <p key={i}>{obj?.text}</p>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
