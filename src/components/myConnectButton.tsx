'use client';
import { useAccount, useConnect } from "wagmi";
import { truncateMiddle } from "@/lib/utils";
import { useConnectWallet } from "@/lib/walletUtil"; // 导入连接钱包的函数
import { Button } from "./ui/button";
import { config } from "@/wagmi.config";
import Image from "next/image";


export default function MyConnectButton() {
  const account = useAccount();
  const { connectors } = useConnect({ config });
  console.log("ylh:connectors", connectors);
  if (!account.isConnected) {
    const { connectWallet, showModal, setShowModal }  = useConnectWallet(); // 获取连接钱包的函数
    return (
      <div>
        <Button onClick={() => setShowModal(true)}>连接钱包</Button>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-4 font-bold">选择钱包</div>
              {connectors.map((item) => (
                <Button
                  key={item.uid}
                  className="block w-full text-left p-2 hover:bg-gray-100"
                  onClick={() => {
                    setShowModal(false);
                    connectWallet(item);
                  }}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && (
                      <Image src={item.icon} alt="icon" width={20} height={20} style={{ borderRadius: 4 }} />
                    )}
                    <span>{item.name}</span>
                  </span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {account.chain?.name}:{truncateMiddle(account.address as string)}
      </div>
    );
  }
  
}



