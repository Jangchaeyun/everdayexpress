import React from "react";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/level tree/womenLevelThree";
import { allLevelTwo } from "../../../data/category/level two/allLevelTwo";
import { menLevelThree } from "../../../data/category/level tree/menLevelThree";
import { womenLeveThree } from "../../../data/category/level two/womenLevelTwo";
import { allLevelThree } from "../../../data/category/level tree/allLevelThree";
import { Box } from "@mui/material";

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  all: allLevelTwo,
};
const categoryThree = {
  men: menLevelThree,
  women: womenLeveThree,
  all: allLevelThree,
};

const CategorySheet = () => {
  return (
    <Box
      sx={{ zIndex: 1 }}
      className="bg-black shadow-lg lg:h-[500px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo["men"]?.map((item) => (
          <div>
            <p className="text-primary-color mb-5 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
