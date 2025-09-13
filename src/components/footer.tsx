import { Check } from "lucide-react";
import Image from "next/image";
import FooterLinks from "./footer_links";

export default function DappFooter() {

  
  return (
    <div className="p-10">
      <div className="flex justify-between items-center rounded-2xl bg-blue-400 p-10">
        <div className="">
          <div className="text-2xl text-white">Subscribe to our newsletter</div>
          <div className="text-md text-white mt-2">
            Get the Week in Review newsletter and all the latest trends directly
            to your inbox.
          </div>
        </div>
        <div className="">
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-l-xl p-3 text-white outline-none bg-blue-900  hover:bg-blue-200 focus:bg-amber-500"
            />
            <button className="rounded-r-xl bg-white p-3 px-6 font-semibold">
              Subscribe
            </button>
          </div>

          <div className="flex mt-3">
            <Check />
            <div className="text-sm text-black">
              By subscribing you agree to our Terms of Service and Privacy
              Policy
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <FooterLinks />
      </div>

      <div className="text-center text-sm text-white mt-10">
        © 2024 DappTiger. All rights reserved.
      </div>
    </div>
  );
}