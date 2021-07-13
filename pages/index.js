// import Head from "next/head";
import Banner from "../components/home/banner";
import Connect from "../components/home/connect";
import Features from "../components/home/feature";
import Intro from "../components/home/intro";
import Services from "../components/home/services";

export default function Home() {
  return (
    <>
      <Banner />
      <Intro />
      <Features />
      <Services />
      <Connect />
    </>
  );
}
