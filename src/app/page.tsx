'use client';
import { useState, useMemo } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { erc20Abi, parseUnits, Address, formatUnits } from "viem";
import { bnb_test_chain_usdt_token_addr, bnb_test_chain_usdt_approve_addr } from '@/constants/appConstants';
import { Button } from "@/components/ui/button";

export default function Main() {

  const [value, setValue] = useState("");
  const [transferValue, setTransferValue] = useState("");

  const {
    writeContract,
    data: hash,
    isPending: isPending,
  } = useWriteContract();

  const account = useAccount();
  const tokenAddr = bnb_test_chain_usdt_token_addr; // USDT合约地址
  const { data } = useReadContract({
    abi: erc20Abi,
    address: tokenAddr,
    functionName: "balanceOf",
    args: [account?.address as Address],
  });
  const balance = useMemo(() => {
    return formatUnits((data ?? "0") as bigint, 18);
  }, [data]);

  const approve = () => {
    writeContract({
      abi: erc20Abi,
      address: tokenAddr,
      functionName: "approve",
      args: [
        bnb_test_chain_usdt_approve_addr, // 授权给此账户一定金额
        parseUnits(value, 18),
      ],
    });
  }

  const transferFrom = () => {
    writeContract({
      abi: erc20Abi,
      address: tokenAddr,
      functionName: "transferFrom",
      args: [
        account?.address as Address,
        bnb_test_chain_usdt_approve_addr,
        parseUnits(transferValue, 18),
      ],
    });
  }


  return (
    <div className="p-10 h-500  bg-amber-300 mt-3">
      <div>Balance:{balance}USDT</div>
      <div className="flex items-center">
        <div>
          <input
            type="number"
            className="w-50 min-w-50 rounded-[8px] p-1 bg-blue-100 hover:bg-blue-300 border-1
            hover:border-blue-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:border-2"
            placeholder="Enter your amount"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="ms-5"> USDT </div>
      </div>
      <div className="mt-3">
        <Button onClick={approve}>Submit</Button>
      </div>

      <div className="flex items-center mt-3 ">
        <div>
          <input
            type="number"
            className="w-50 min-w-50 rounded-[8px] p-1 bg-blue-100 hover:bg-blue-300 border-1
            hover:border-blue-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:border-2"
            placeholder="Enter your amount"
            onChange={(e) => {
              setTransferValue(e.target.value);
            }}
          />
        </div>
        <div className="ms-5 text-[20px] text-red-600"> USDT </div>
      </div>
      <div className="mt-3">
        <Button onClick={transferFrom}>TransferFrom</Button>
      </div>
    </div>
  );
}
