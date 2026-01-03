// app/providers.tsx
"use client"; // 必须声明为客户端组件

import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { lightTheme, darkTheme, midnightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../wagmi.config"; // 你的 wagmi 配置
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // 在客户端初始化 QueryClient
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          theme={{
            lightMode: lightTheme({
              accentColor: "#7b3fe4",
              accentColorForeground: "white",
              borderRadius: "small",
              fontStack: "system",
              overlayBlur: "small",
            }),
            darkMode: darkTheme(),
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
