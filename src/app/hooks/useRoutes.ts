import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  BiSolidHome,
  BiSolidCategory,
  BiSolidVideos,
  BiSolidVideo,
  BiSolidUserCircle,
} from "react-icons/bi";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(() => [
    {
      label: "首页",
      href: "/home",
      icon: BiSolidHome,
      active: pathname === "/home"
    },
    {
      label: "发现",
      href: "/discovery",
      icon: BiSolidCategory,
      active: pathname === "/discovery"
    },
    {
      label: "短视频",
      href: "/short-video",
      icon: BiSolidVideos,
      active: pathname === "/short-video"
    },
    {
      label: "直播",
      href: "/live",
      icon: BiSolidVideo,
      active: pathname === "/live"
    },
    {
      label: "我的",
      href: "/me",
      icon: BiSolidUserCircle,
      active: pathname === "/me"
    }
  ], [pathname])

  return routes;
}

export default useRoutes;