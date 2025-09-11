import Providers from "../components/providers";
import CHeader from "@/components/cheader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div>
          <CHeader/>
        </div>
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
