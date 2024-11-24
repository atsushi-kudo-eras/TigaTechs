import Head from "next/head";

type Props = {
  pageTitle: string | "";
};

const HeadComp = ({ pageTitle }: Props) => {
  return (
    <Head>
      <title>{pageTitle && pageTitle + "｜"}A.Kudo</title>
      <meta name="description" content={`${pageTitle && pageTitle + " "}A.Kudo JSパワーが明日を作る`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadComp;
