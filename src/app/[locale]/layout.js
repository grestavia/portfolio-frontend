import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Provider from "./provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <Provider>
          <Header lang={locale} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
