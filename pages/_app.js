import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "@/components/Navbar";
import '../styles/custom.css';

export default function App({ Component, pageProps }) {
  return (
      <>
        <Navbar/>
        <Component {...pageProps} />
      </>
  )
}
