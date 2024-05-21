import "@/styles/globals.css";
import {Layout} from "@/layout";
import CounterProvider from "@/provider/counter-provider";


export default function App({ Component, pageProps }) {
  return(
      <CounterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CounterProvider>

      )
}
