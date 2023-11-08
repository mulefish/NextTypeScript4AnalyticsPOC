import '../styles/globals.scss';
import {initializeAnalytics} from "@lululemon/mwa-analytics"; 

export default function App({ Component, pageProps }:any) {

  if (typeof window != "undefined") {
    initializeAnalytics("Hello world") 
  } 
  return (
    <div className="base">
      {/* Site navigation and title and viewport stuff */}
        
      <Component {...pageProps} />

    </div>
  )
}
