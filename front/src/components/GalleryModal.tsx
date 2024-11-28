import Image from "next/image";
import ReactModal from "react-modal";
import favicon from "../../public/favicon.ico";

const GalleryModal = (props: { modalImgNum: number, setModalImgNum: Function, modalImageList: any }) => {
  const { modalImgNum, setModalImgNum, modalImageList } = props;
  const index = modalImgNum - 1;
  const imgData = modalImageList[index];
  const length = modalImageList.length;
  const isAvtiveLtArrow = index !== 0;
  const isAvtiveGtArrow = index < length - 1;
  return (
    <ReactModal isOpen={!!modalImgNum} ariaHideApp={false}>
      <div className="modal">
        <button onClick={() => setModalImgNum(0)}>Close Modal</button>
        <div className="modal-image-container">
          <button className={isAvtiveLtArrow ? "bk-button active" : "bk-button"} onClick={() => isAvtiveLtArrow && setModalImgNum(modalImgNum - 1)}>＜</button>
          <div className="link-container">
            <a href={imgData?.src} target="_blank" rel="noopener noreferrer" >
              {/* <Image
                alt={imgData?.alt || ""}
                src={imgData?.src || favicon}
                width={1600}
                height={1200}
              /> */}
              <img
                loading="lazy"
                alt={imgData?.alt || ""}
                src={imgData?.src || favicon}
                width={1600}
                height={1200}
              />
              <p>{imgData?.alt}</p>
            </a>
          </div>
          <button className={isAvtiveGtArrow ? "ah-button active" : "ah-button"} onClick={() => isAvtiveGtArrow && setModalImgNum(modalImgNum + 1)}>＞</button>
        </div>
      </div>
    </ReactModal>
  );
};

export default GalleryModal;
