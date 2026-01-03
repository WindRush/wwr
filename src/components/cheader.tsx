'use client';
import Image from "next/image";
import MyConnectButton2 from "./myConnectButton2";
import MyConnectButton from "./myConnectButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function CHeader() {
  return (
    <header className="fixed top-0 w-full bg-[oklch(0.145_0_0)] text-white">
      <div className="mx-auto flex h-16 items-center gap-4 max-w-7xl px-5">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image src="/tiger.svg" alt="logo" width={28} height={28} />
          <div className="text-lg font-semibold ms-3">DappTiger</div>
        </div>

        {/* Search */}
        <div className="flex items-center border border-white/10 rounded-xl px-4 py-2 flex-1">
          <Image src="/icon_search.svg" alt="search" width={16} height={16} />
          <input
            type="text"
            placeholder="Search dapps"
            className="w-full bg-transparent focus:outline-none ms-4 text-[15px]"
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center flex-shrink-0">
          <div>
            <button className="p-3 text-sm text-[#a9bfc5] border border-blue-500/30 bg-blue-600/10 rounded-xl border-">
              + List a project
            </button>
          </div>
          <div>
            <div className="p-3 text-sm text-white border border-white/10 rounded-xl ms-3">
              $0.0016
            </div>
          </div>
          <div>
            <div className="p-3 text-sm text-white border-2 border-green-500/80 rounded-xl ms-3 hover:scale-105">
              👋 0
            </div>
          </div>

          <div>
            <div className="ms-3">
              <ConnectButton
                accountStatus="avatar"
                chainStatus="icon"
                showBalance={false}
                label="sign in"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
