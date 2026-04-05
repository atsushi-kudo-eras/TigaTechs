import HeadComp from "@/components/HeadComp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import useIsMobile from "@/common/useIsMobile";
import { useState, useEffect } from "react";

// constant text
const PAGE_TITLE = "Calendar";
// constance numbers to calc calender height on SP
const HEADER_HEIGHT = 182;
const FOOTER_HEIGHT = 128;
const MAIN_MARGIN_Y = 64;

export default function Calendar() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [calendarHeight, setCalendarHeight] = useState(900);
  useEffect(() => {
    setMounted(true);

    const updateHeight = () => {
      if (isMobile) {
        // SPの場合は画面の高さからヘッダーとフッターとmainのmarginを引く
        setCalendarHeight(window.innerHeight - HEADER_HEIGHT - FOOTER_HEIGHT - MAIN_MARGIN_Y);
      } else {
        // PCの場合は固定値（または必要に応じた計算）
        setCalendarHeight(900);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isMobile]);

  // Hydration Error防止：マウントされるまではレンダリングしない
  if (!mounted) return null;

  return (
    <>
      <HeadComp pageTitle={PAGE_TITLE} />
      <Header title={PAGE_TITLE} />
      <Menu />
      <main>
        <div className="CalendarWrapper" style={{ width: "100%", textAlign: "center" }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=900&wkst=2&ctz=Asia%2FTokyo&showPrint=0&mode=WEEK&showTitle=0&showTabs=0&showCalendars=0&showTz=0&src=MmQ5ZDUyMTAxZGYxMTE4NTEzZGVmYWUwNGIzNjU2ZTNhNjFhNGQxNmEwNGY3MGQ2MzQyNmI4Y2M1Njc2ZjYzZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC5vLmNhbGVuZGFyLmdvb2dsZS5jb2m"
            width="100%"
            height={calendarHeight}
            style={{ border: 0 }}
            scrolling="no"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
