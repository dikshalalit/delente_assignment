import Header from "./component/header";
import ThemeToggle from "./component/themeToggle";
import ThemeProvider from "./context/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <ThemeToggle />
    </ThemeProvider>
  );
}
