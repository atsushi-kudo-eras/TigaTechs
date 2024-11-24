import Image from "next/image";
import HeadComp from "@/components/HeadComp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import GalleryModal from "@/components/GalleryModal";
import { useFetchJson } from "@/common/fetch";
import endpoint from "@/common/endpoint";
import { useState } from "react";
// Local image import
import architectureImg from "../../public/architecture.png";

const PAGE_TITLE = "Gallery";

export default function Gallery() {
  const [modalImgNum, setModalImgNum] = useState(0);
  const [modalImageList, setModalImageList] = useState({});
  const gallery = useFetchJson(endpoint.gallery);
  return (
    <>
      <HeadComp pageTitle={PAGE_TITLE} />
      <Header title={PAGE_TITLE} />
      <Menu />
      <main>
        <section>
          <h2>構成図</h2>
          <div className="architecture-container">
            <Image className="architecture-image" src={architectureImg} alt="構成図" quality={100} />
          </div>
        </section>
        {
          gallery?.map((obj, i) => {
            return (
              <section className="gallery-content-wrapper" key={i}>
                <h2>{obj.head}</h2>
                <div className="gallery-image-wrapper">
                  {
                    obj?.images.map((img, j) => {
                      const index = j + 1;
                      return (
                        <div className="" key={j}>
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={480}
                            height={360}
                            onClick={() => {
                              setModalImgNum(index);
                              setModalImageList(obj?.images);
                            }}
                          />
                          <p>{img.alt}</p>
                          {
                            !!setModalImgNum && (
                              <GalleryModal modalImgNum={modalImgNum} setModalImgNum={setModalImgNum} modalImageList={modalImageList} />
                            )
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </section>
            )
          })
        }
      </main>
      <Footer />
    </>
  );
}
