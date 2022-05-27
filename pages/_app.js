import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
