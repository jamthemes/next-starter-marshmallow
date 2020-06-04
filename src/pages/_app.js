import "../assets/styles/style.scss"

if (typeof window !== "undefined") {
  require("requestidlecallback-polyfill")
  window.requestIdleCallback(
    async () => {
      // Load non critical CSS/JS here
      await import("@mdi/font/css/materialdesignicons.css")
    },
    { timeout: 1000 }
  )
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
