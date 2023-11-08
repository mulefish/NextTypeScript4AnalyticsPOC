import {initializeAnalytics} from "@lululemon/mwa-analytics"; 
import { Html, Head, Main, NextScript } from 'next/document'


initializeAnalytics("Hello world this string is needed but its value does not matter ") 


export default function Document() {



  const federated_module_version = "4.3.2"
  return (
    <Html lang="en">
      <Head>
        <script src={`https://shop.lululemon.com/static/fmodules/dcp/transformation-configs/${federated_module_version}/transformation-configs-remoteEntry.js`}></script>
        <script src={`https://shop.lululemon.com/static/fmodules/dcp/validation-configs/${federated_module_version}/validation-configs-remoteEntry.js`}></script>
        <script src={`https://shop.lululemon.com/static/fmodules/dcp/lam-model/${federated_module_version}/lam-model-remoteEntry.js`}></script>
        <script src={`https://shop.lululemon.com/static/fmodules/dcp/experiment-module/${federated_module_version}/experiment-module-remoteEntry.js`}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
