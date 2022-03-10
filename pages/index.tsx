import Head from "next/head";
import MediaSection from "../src/components/MediaSection/MediaSection";
import MainSection from "../src/components/MainSection/MainSection";
import EcosystemSection from "../src/components/EcosystemSection/EcosystemSection";
import Partners from "../src/components/Partners/Partners";
import getContentfulData from "../src/utils/getContentfulData";
import Roadmap from "../src/components/RoadmapSection/Roadmap";
import Layout from "../src/components/Layout/Layout";
import * as contentful from "contentful";
import TokenDescriptionSection from "../src/components/TokenDescriptionSection/TokenDescriptionSection";
import BulletSection from "../src/components/BulletSection/BulletSection";
import DownloadModalSection from "../src/components/DownloadModalSection/DownloadModalSection";

interface Props {
  partnersItems: any;
  footerData: any;
  tokenData: any;
  missionData: any;
}

const Home: React.FC<Props> = ({
  partnersItems,
  footerData,
  tokenData,
  missionData,
}) => {
  return (
    <Layout footerData={footerData}>
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metasportfans.space" />
        <title>Metasport Fans - become a superfan</title>
        <meta property="og:title" content="Metasport" />
        <meta name="description" content="Metasport Fans - become a superfan" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#EA70E5" />
        <link
          rel="preload"
          href="/fonts/FontGilroy/Gilroy-Medium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/FontGilroy/Gilroy-SemiBold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <MediaSection />
      <MainSection />
      <BulletSection />
      <EcosystemSection />
      <Roadmap />
      <TokenDescriptionSection tokenData={tokenData} />
      <Partners data={partnersItems} />
      <DownloadModalSection />
    </Layout>
  );
};

export async function getStaticProps() {
  //partners section
  const partnersData = await getContentfulData("partners");

  const partnersItems = partnersData.items.map((partnersProps: any) => {
    return {
      name: partnersProps.fields?.name,
      image: partnersProps.fields?.image.fields.file.url,
    };
  });

  //token section
  const tokenSectionData = await getContentfulData("tokenHighlight");
  const tokenData = tokenSectionData.items.map((tokenSectionProps: any) => {
    return {
      description: tokenSectionProps.fields.description,
      content: tokenSectionProps.fields.content,
      button: tokenSectionProps.fields.button,
      tokenImage: tokenSectionProps.fields.tokenImage,
    };
  });

  //footer section
  const client = contentful.createClient({
    space: "m4lnap460f61",
    environment: "master",
    accessToken: "hGwoTOArcLjX-Ecs04QsNpm6G5gQ011rUZb_NXn-v5w",
  });

  const footerContentTypes =
    "footerDescription,footerOverview,footerSocialIcon";

  const footerContentfulData = await client.getEntries({
    "sys.contentType.sys.id[in]": `${footerContentTypes}`,
  });

  const footerData: any = {};
  const mapData = (someData) => {
    someData.items.forEach((element) => {
      const key = element.sys.contentType.sys.id;
      if (!footerData.hasOwnProperty(key)) {
        footerData[key] = [];
      }
      footerData[key].push(element.fields);
    });
  };

  mapData(footerContentfulData);
  return {
    props: { partnersItems, footerData, tokenData },
    revalidate: 10,
  };
}

export default Home;
