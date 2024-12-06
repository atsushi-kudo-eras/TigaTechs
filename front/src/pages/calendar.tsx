import HeadComp from "@/components/HeadComp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

// constant text
const PAGE_TITLE = "Calendar";

export default function Calendar() {
  return (
    <>
      <HeadComp pageTitle={PAGE_TITLE} />
      <Header title={PAGE_TITLE} />
      <Menu />
      <main>
        <div className="CalendarWrapper">
          <iframe src="https://calendar.google.com/calendar/embed?height=675&wkst=1&ctz=Asia%2FTokyo&showPrint=0&showTitle=0&showTz=0&showCalendars=0&mode=WEEK&showTabs=0&src=MmQ5ZDUyMTAxZGYxMTE4NTEzZGVmYWUwNGIzNjU2ZTNhNjFhNGQxNmEwNGY3MGQ2MzQyNmI4Y2M1Njc2ZjYzZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB&color=%2333B679&color=%230B8043"
            width="900px"
            height="900px"
            scrolling="no"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
