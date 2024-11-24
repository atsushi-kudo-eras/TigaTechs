import HeadComp from "@/components/HeadComp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { postSender } from "@/common/fetch";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// constant text
const PAGE_TITLE = "Contact";
const RADIO_ERROR_MESSAGE = "選択してください。";
const STATUS_MESSAGE_ARR = [
  false,
  "送信中です...",
  "送信が完了しました。",
  "エラーが発生しました。恐れ入りますが、時間をおいて再度お試しください。"
];

type Inputs = {
  name: string;
  mail: string;
  type: string;
  text: string;
  submit: any;
};

export default function Contact() {
  const [status, setStatus] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => postSender(data, setStatus);

  const radioButtons = [
    { id: "webPage", label: "Webページ制作について", value: "Webページ制作について", required: RADIO_ERROR_MESSAGE },
    { id: "webApp", label: "Webアプリ構築について", value: "Webアプリ構築について", required: RADIO_ERROR_MESSAGE },
    { id: "teaching", label: "プログラミング教育について", value: "プログラミング教育について", required: RADIO_ERROR_MESSAGE },
    { id: "other", label: "その他", value: "その他", required: RADIO_ERROR_MESSAGE },
  ];

  return (
    <>
      <HeadComp pageTitle={PAGE_TITLE} />
      <Header title={PAGE_TITLE} />
      <Menu />
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-content-wrapper">
            <label>
              <span>ハンドルネーム（お名前）</span>
              <input
                type="text"
                {...register("name", {
                  required: "お名前をご入力ください。"
                })}
              />
            </label>
            <p className="error-message">
              {errors.name?.message && (
                <span>{errors.name.message}</span>
              )}
            </p>
          </div>
          <div className="form-content-wrapper">
            <label>
              <span>メールアドレス</span>
              <input
                type="text"
                {...register("mail", {
                  required: "メールアドレスをご入力ください。"
                })}
              />
            </label>
            <p className="error-message">
              {errors.mail?.message && (
                <span>{errors.mail.message}</span>
              )}
            </p>
          </div>
          <div className="form-content-wrapper">
            <span>お問い合わせの種類</span>
            <div className="radio-wrapper">
              {radioButtons.map((radio) => {
                const { id, label, value, required } = radio;
                return (
                  <label key={id}>
                    <input
                      type="radio"
                      value={value}
                      {...register("type", { required })}
                    />
                    {label}
                  </label>
                );
              })}
            </div>
            <p className="error-message">
              {errors.type?.message && (
                <span>{errors.type.message}</span>
              )}
            </p>
          </div>
          <div className="form-content-wrapper">
            <label>
              <span>お問い合わせ内容</span>
              <textarea
                {...register("text", {
                  required: "お問い合わせ内容をご入力ください。",
                  minLength: {
                    value: 10,
                    message: "10文字以上で入力してください。"
                  },
                  maxLength: {
                    value: 512,
                    message: "512文字以内で入力してください。"
                  },
                })}
              />
            </label>
            <p className="error-message">
              {errors.text?.message && (
                <span>{errors.text.message}</span>
              )}
            </p>
          </div>
          <div className="form-content-wrapper">
            {(status === 0 || status === 3) && <input className="submit-button" type="submit" />}
            <p className="error-message">
              {STATUS_MESSAGE_ARR[status] && (
                <span>{STATUS_MESSAGE_ARR[status]}</span>
              )}
            </p>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
