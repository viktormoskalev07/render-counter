import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {Header} from "@/header";
import {SwrParent} from "@/screens/swr/parent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
    <SwrParent/>

    </>
  );
}
