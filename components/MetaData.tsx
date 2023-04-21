import Head from "next/head";

type MetaDataProps = {
  title: string;
  desc: string;
  url: string;
  img: string;
};

export const MetaData = ({ title, desc, url, img }: MetaDataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={img} />
    </Head>
  );
};
