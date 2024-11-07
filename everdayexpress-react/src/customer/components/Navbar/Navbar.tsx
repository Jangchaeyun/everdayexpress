import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { AddShoppingCart, Storefront } from "@mui/icons-material";
import CategorySheet from "./CategorySheet";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-white " sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 className="logo cursor-pointer text-lg md:text-xl text-[#00927c]">
                EverDay Express
              </h1>
            </div>
            <ul className="flex items-center font-medium text-gray-800">
              {["전체", "남성", "여성"].map((item) => (
                <li className="minCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {false ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://img.freepik.com/free-photo/anime-rainbow-landscape_23-2151712762.jpg"
                />
                <h1 className="font-semibold hidden lg:block">EveryDay</h1>
              </Button>
            ) : (
              <Button variant="contained">로그인</Button>
            )}
            <IconButton>
              <FavoriteBorderIcon sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                판매자
              </Button>
            )}
          </div>
        </div>
        <div className="categorySheet absolute top-[4.41rem] left-20 right-20 border">
          <CategorySheet />
        </div>
      </Box>
    </>
  );
};

export default Navbar;
