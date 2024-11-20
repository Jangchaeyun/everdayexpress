import React from "react";
import DrawerList from "../../component/DrawerList";
import {
  AccountBox,
  Add,
  Category,
  Dashboard,
  ElectricBolt,
  Home,
  IntegrationInstructions,
  LocalOffer,
  Logout,
} from "@mui/icons-material";

const menu = [
  {
    name: "대시보드",
    path: "/admin",
    icon: <Dashboard className="text-primary-color" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "쿠폰",
    path: "/admin/coupon",
    icon: <IntegrationInstructions className="text-primary-color" />,
    activeIcon: <IntegrationInstructions className="text-white" />,
  },
  {
    name: "새로운 쿠폰 추가",
    path: "/admin/add-coupon",
    icon: <Add className="text-primary-color" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "홈 페이지",
    path: "/admin/home-grid",
    icon: <Home className="text-primary-color" />,
    activeIcon: <Home className="text-white" />,
  },
  {
    name: "전자제품 카테고리",
    path: "/admin/electronics-category",
    icon: <ElectricBolt className="text-primary-color" />,
    activeIcon: <ElectricBolt className="text-white" />,
  },
  {
    name: "제품 카테고리",
    path: "/admin/shop-by-category",
    icon: <Category className="text-primary-color" />,
    activeIcon: <Category className="text-white" />,
  },
  {
    name: "거래",
    path: "/admin/deals",
    icon: <LocalOffer className="text-primary-color" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
];

const menu2 = [
  {
    name: "계정",
    path: "/admin/account",
    icon: <AccountBox className="text-primary-color" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "로그아웃",
    path: "/",
    icon: <Logout className="text-primary-color" />,
    activeIcon: <Logout className="text-white" />,
  },
];

const AdminDrawerList = ({ toggleDrawer }: any) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default AdminDrawerList;
