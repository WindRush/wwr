"use client";
import {
  useAccount,
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseUnits, Address, erc20Abi, formatUnits } from "viem";
import { useEffect, useMemo } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Providers from "../../components/providers";
import { Button } from "@/components/ui/button";

const IC = () => {
  const {
    writeContract,
    data: hash,
    isPending: isPending,
  } = useWriteContract();

  const account = useAccount();
  const tokenAddr = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
  const { data } = useReadContract({
    abi: erc20Abi,
    address: tokenAddr,
    functionName: "balanceOf",
    args: [account?.address as Address],
  });
  console.log("ylh", data);
  const balance = useMemo(() => {
    return formatUnits((data ?? "0") as bigint, 18);
  }, [data]);
  const approve = () => {
    writeContract({
      abi: erc20Abi,
      address: tokenAddr,
      functionName: "approve",
      args: [
        "0xe369AEc574D5408604DAA3d12E95d5624fAE9112",
        parseUnits("122", 18),
      ],
    });
  };

  const {
    isLoading: lockLoading,
    isSuccess: lockSuccess,
    error: lockError,
    status,
  } = useWaitForTransactionReceipt({
    hash,
  });
  useEffect(() => {
    console.log("ylh status", status);
  }, [status]);
  return (
    <Providers>
      <ConnectButton />
      <button onClick={approve}>Approve</button>
      {account.address ?? "Not connected"}
      <div>{balance}USDT</div>
      <div>
        <Button>ApproveXUSDT</Button>
      </div>
    </Providers>
  );
};

export default IC;
