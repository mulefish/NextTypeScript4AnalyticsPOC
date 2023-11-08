import '@/styles/global.scss';
import {initializeAnalytics} from "@lululemon/mwa-analytics"; 
console.log("Initialz!")
initializeAnalytics("Hello world") 


export default function App({ Component, pageProps }:any) {


  return (
    <div className="base">
      {/* Site navigation and title and viewport stuff */}
        
      <Component {...pageProps} />

    </div>
  )
}
