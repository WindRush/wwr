import Providers from "../components/providers";
import CHeader from "@/components/cheader";

import AboutUs from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className=" bg-[oklch(0.145_0_0)]">
          <div className="mt-16">
            <Providers>
              <div className="">
                <CHeader />
              </div>
              <div>{children}</div>
            </Providers>
          </div>
          <div className="mt-10">
            <AboutUs />
          </div>
        </div>
      </body>
    </html>
  );
}
