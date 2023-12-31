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
      <body>{children}</body>
    </html>
  );
}
