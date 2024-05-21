import "@/styles/globals.css";
import {Layout} from "@/layout";
import CounterProvider from "@/provider/counter-provider";
import {Provider} from "react-redux";
import store from "@/app/store";


export default function App({ Component, pageProps }) {
  return(
      <Provider store={store}>
          <CounterProvider>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </CounterProvider>
      </Provider>

      )
}
