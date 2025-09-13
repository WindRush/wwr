import Image from "next/image";

export default function FooterLinks() {
  const aboutUsLinks = [
    [
      "Products",
      { name: "Rankings", link: "/rankings" },
      { name: "Quests", link: "/quests" },
      { name: "Airdrops", link: "/airdrops" },
      { name: "Hot contracts", link: "/hot-contracts" },
      { name: "Games", link: "/games" },
      { name: "Chains", link: "/chains" },
      { name: "Portfolio", link: "/portfolio" },
    ],

    [
      "Company",
      { name: "About us", link: "/about" },
      { name: "Press", link: "/press" },
      { name: "Disclaimer", link: "/disclaimer" },
      { name: "Privacy policy", link: "/privacy" },
      { name: "Terms of use", link: "/terms" },
      { name: "Bug bounty", link: "/bug-bounty" },
      { name: "Careers", link: "/careers" },
    ],
    [
      "Resources",
      { name: "Blog", link: "/blog" },
      { name: "Reports", link: "/reports" },
      { name: "DappRadar API", link: "/api" },
      { name: "Boosting", link: "/boosting" },
      { name: "Brand Assets", link: "/brand-assets" },
      { name: "FAQ", link: "/faq" },
      { name: "DappLaunch", link: "/dapplaunch" },
    ],
    [
      "Contributors",
      { name: "Submit a project", link: "/submit-project" },
      { name: "Submit a quest", link: "/submit-quest" },
      { name: "Advertise", link: "/advertise" },
    ],
  ];
  return (
    <div className="flex p-10 rounded-2xl mb-10 bg-amber-300">
      {/* left */}
      <div className="shrink-0">
        <div className="flex items-center">
          <Image src="/tiger.svg" alt="logo" width={28} height={28} />
          <div className="text-lg font-semibold ms-3 text-white">DappTiger</div>
        </div>
        <div className="text-sm text-white mt-5">The World's Dapp Store</div>
      </div>

      {/* right */}
      <div className="flex justify-between grow-1 ml-20">
        {aboutUsLinks.map((section, idx) => (
          <div key={idx}>
            <div className="font-semibold text-white">
              {section[0] as string}
            </div>
            <div className="flex flex-col mt-2">
              {section.slice(1).map((item, itemIndex) => (
                <div key={itemIndex}>
                  {typeof item === "object" && "name" in item ? item.name : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
