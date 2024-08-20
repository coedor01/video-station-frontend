import React from "react";
import Sidebar from "@/app/(site)/components/sideBar";

export default async function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <div className="h-full">
        {children}
      </div>
    </Sidebar>
  )
}