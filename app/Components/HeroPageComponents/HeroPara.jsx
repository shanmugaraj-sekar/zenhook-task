import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({ weight: '300', subsets: ['latin'] });

export default function HeroPara() {
  return (
    <div className={` ${poppins.className} text-white w-[25%] h-[50%] justify-between flex flex-col font-light`}>
      <p >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo
        natus quis, quaerat, nam consectetur nisi unde illum velit, odit error
        Quod.
      </p>
      <div className="flex gap-5 ">
      <Button   >Try for free</Button>
      <Button variant="customBlack">Compare</Button>
      </div>
    

    </div>
  );
}
