
import { Connector, useConnect, injected } from "wagmi";
import { config } from "../wagmi.config";
import { useState } from "react";

export function useConnectWallet() {
  const connect = useConnect({ config });
  const [showModal, setShowModal] = useState(false);

  const connectWallet = (connector: Connector) => { 
    connect.connect({ connector });
    setShowModal(false);
  }
  return { connectWallet, showModal, setShowModal };
}

export function disconnectWallet() {

}