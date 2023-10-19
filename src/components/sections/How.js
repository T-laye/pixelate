import React from "react";
import Card from "../Card";
import wallet from "public/images/create_wallet.svg";
import sendWallet from "public/images/send_wallet.svg";
import uniswap from "public/images/uniswap.svg";
import slip from "public/images/spillage.svg";
import swap from "public/images/change.svg";
import DropBoxes from "../DropBoxes";

export default function How() {
  return (
    <div
      id="how"
      className="min-h-screen lg:pb-20  border-b border-b-[#FFFFFF20] "
    >
      <DropBoxes />
      <div className="container mx-auto ">
        <h2
          data-aos="flip-down"
          data-aos-delay="100"
          className="text-xl font-semibold mb-4 md:mb-14 lg:mb-20 text-center lg:text-3xl"
        >
          How to Buy
        </h2>

        <div className="flex flex-col items-center">
          <div className="md:flex w-full justify-evenly">
            <Card
              number={1}
              heading="Create MetaMask wallet"
              text="Create a Meta Mask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive $PXEL8"
              icon={wallet}
            />

            <Card
              number={2}
              heading="Send ETH to your wallet"
              text="You can buy Ethereum (ETH) directly on Meta Mask or transfer it to your MetMask Wallet from exchanges like Coinbase, Binance, etc."
              icon={sendWallet}
            />
          </div>

          <Card
            number={3}
            heading="Connect to your wallet"
            text="Go to Uniswap and connect your wallet by clicking  'Connect wallet' and selecting MetaMask"
            icon={uniswap}
          />

          <div className="md:flex w-full justify-evenly">
            <Card
              number={4}
              heading="Increase Slippage"
              text="Click the setting icon just above the swap and set the slippage to 4.5%"
              icon={slip}
            />

            <Card
              number={5}
              heading="Swap ETH for $PXL8"
              text="Press 'Select a token' and enter the token contract address to find $PXL8 and start your swpa from ETH to $PXL8."
              icon={swap}
              w="w-8 lg:w-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
