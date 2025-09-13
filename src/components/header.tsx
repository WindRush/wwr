import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-[oklch(0.145_0_0)] text-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image src="/tiger.svg" alt="logo" width={28} height={28} />
          <span className="text-lg font-semibold tracking-tight">DappRadar</span>
        </div>

        {/* Middle: Search */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex w-full max-w-xl items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm ring-1 ring-inset ring-white/10 focus-within:ring-white/20">
            <Image src="/icon_search.svg" alt="search" width={16} height={16} />
            <input
              type="text"
              placeholder="Search dapps"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600/10 px-3 py-2 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/40 hover:bg-blue-600/20 md:flex">
            <span className="text-base">＋</span>
            <span>List a project</span>
          </button>

          <div className="hidden items-center rounded-xl border border-white/10 px-3 py-2 text-sm text-white/80 ring-1 ring-inset ring-white/10 md:flex">
            $0.0016
          </div>

          <div className="hidden items-center rounded-xl border border-white/10 px-3 py-2 text-sm text-white/80 ring-1 ring-inset ring-white/10 md:flex">
            👋 0
          </div>

          <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/15 hover:bg-white/15">
            Connect →
          </button>

          <button aria-label="notifications" className="hidden rounded-xl border border-white/10 p-2 ring-1 ring-inset ring-white/10 md:block">
            🔔
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-white/10" />
    </header>
  );
}