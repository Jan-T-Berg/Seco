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
        <header className="bg-yellow-800 text-white p-4 bg-opacity-50 flex items-center justify-between top-0  z-50">
          <div className="flex items-center">
            <div className="mr-4">
              {" "}
              <Cog6ToothIcon className="h-6 w-6 " />
            </div>
          </div>
          <div
            className="absolute top-5 left-0 right-0 text-center z-30"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={"/icon.png"} width={80} height={80} alt={""} />
          </div>
          <div className="mr-4">
            <ChatBubbleLeftRightIcon className="h-6 w-6 " />
          </div>
        </header>

        <div className="z-20">{children}</div>
        <section className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-white bg-yellow-700 dark:bg-dark backdrop-blur-lg bg-opacity-30 border-t-2 border-royal/20">
          <div id="tabs" className="flex justify-between">
            <a
              href="#"
              className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-yellow-800"
            >
              <HomeModernIcon className={"h-10 w-10 inline-block mb-1"} />
            </a>

            <a
              href="#"
              className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-yellow-800"
            >
              <HeartIcon className={"h-10 w-10 inline-block mb-1"} />
            </a>

            <a
              href="#"
              className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-yellow-800"
            >
              <PhotoIcon className={"h-10 w-10 inline-block mb-1"} />
            </a>
            <a
              href="#"
              className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-yellow-800"
            >
              <UserIcon className={"h-10 w-10 inline-block mb-1"} />
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}
