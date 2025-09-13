import Image from "next/image";
import { Button } from "./ui/button";

export default function CHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[oklch(0.145_0_0)] text-white">
      <div className="mx-auto flex h-16 w-full items-center justify-between gap-4 px-4 max-w-7xl">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image src="/tiger.svg" alt="logo" width={28} height={28} />
          <div className="text-lg font-semibold ms-3">DappTiger</div>

          {/* Search */}
          <div className="ms-10 w-2xl flex items-center max-w-xl border border-white/10 rounded-xl px-4 py-2">
            <Image src="/icon_search.svg" alt="search" width={16} height={16} />
            <input
              type="text"
              placeholder="Search dapps"
              className="w-full bg-transparent focus:outline-none ms-4 text-[15px]"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center">
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
            <Button className="ms-3 bg-white/10 text-white rounded-xl px-4 py-2 hover:bg-white/15">
              Connect →
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
