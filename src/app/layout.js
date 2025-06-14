import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import favicon from "@/app/favicon.ico";
import LayoutChildren from "@/lib/layoutChildren";
import ProgressCircle from "@/components/ui/scrollCircle";
import Footer from "@/components/footer";
import HeaderTwo from "@/components/header/headerTwo";
import { Analytics } from "@vercel/analytics/next";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
});

export const metadata = {
  title: "San Luis Bail Bonds",
  description:
    "San Luis Bail Bonds provides fast, reliable 24/7 bail bond services in San Luis Obispo County. Discreet, compassionate support to get you or your loved one home quickly.",
  icons: {
    icon: `${favicon.src}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta_sans.variable}`}
        suppressHydrationWarning={true}
      >
        <div id="page-wrapper" className="!relative ">
          {/* ------ body line start */}
          <div className="w-full h-full fixed -z-[1] top-0 left-0 right-0 mx-auto page-lines">
            <div className="container h-full">
              <div className="flex justify-between w-full h-full">
                <span className="block h-full w-[1px] bg-secondary_rgba"></span>
                <span className="block h-full w-[1px] bg-secondary_rgba"></span>
                <span className="block h-full w-[1px] bg-secondary_rgba"></span>
              </div>
            </div>
          </div>
          {/* ------ body line end */}
          <ProgressCircle />
          <LayoutChildren>
            <HeaderTwo />
            {children}
            <Analytics />
            <Footer />
          </LayoutChildren>
        </div>
      </body>
    </html>
  );
}
