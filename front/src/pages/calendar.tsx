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
          <iframe
            src="https://calendar.google.com/calendar/embed?height=900&wkst=2&ctz=Asia%2FTokyo&showPrint=0&mode=WEEK&showTitle=0&showTabs=0&showCalendars=0&showTz=0&src=MmQ5ZDUyMTAxZGYxMTE4NTEzZGVmYWUwNGIzNjU2ZTNhNjFhNGQxNmEwNGY3MGQ2MzQyNmI4Y2M1Njc2ZjYzZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB&color=%230B8043"
            width="900"
            height="900"
            scrolling="no"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
