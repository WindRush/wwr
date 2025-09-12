import Providers from "../components/providers";
import CHeader from "@/components/cheader";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[oklch(0.145_0_0)]">
        <div className="h-500  bg-[oklch(0.145_0_0)]">
          <div className="">
            <CHeader />
          </div>
          <div>
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
