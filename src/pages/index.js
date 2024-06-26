import { Inter } from "next/font/google";
import {SwrParent} from "@/screens/swr/parent";
import ContextVsRedux from "@/pages/context-vs-redux";
import State from "@/pages/state";
import DependentState from "@/pages/dependent-state";
import OwnChildrenState from "@/pages/own-children-state";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
      <>
          <SwrParent/>
          <ContextVsRedux/>
          <State/>
          <OwnChildrenState/>
          <DependentState/>
      </>
  );
}
