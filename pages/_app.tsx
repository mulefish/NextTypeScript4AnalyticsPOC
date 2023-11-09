import '../styles/globals.scss';
import {initializeAnalytics} from "@lululemon/mwa-analytics"; 
let isDirty = false 
export default function App({ Component, pageProps }:any) {

  if (typeof window != "undefined" && isDirty === false) {
    isDirty = true
    initializeAnalytics("Hello world") 
    console.log("%cmwa-analytics is initialized!", "background:lightgreen")
  } 
  return (
    <div className="base">
      {/* Site navigation and title and viewport stuff */}
        
      <Component {...pageProps} />

    </div>
  )
}
