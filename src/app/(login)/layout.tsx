import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image";
import {
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  HeartIcon,
  HomeModernIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "SeC - Secound Chance",
  description: "Dating App für Menschen, die eine zweite Chance verdienen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <header className="bg-yellow-800 text-white p-4 bg-opacity-50 flex items-center justify-between top-0 w-full z-50">
          <div className="flex items-center"></div>
          <div
            className="absolute top-5 left-0 right-0 text-center z-30"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={"/icon.png"} width={80} height={80} alt={""} />
          </div>
        </header>

        <div className="z-20">{children}</div>
      </body>
    </html>
  );
}
