import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={9}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              E
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-bold text-lg">Everday</p>
              <p className="opactity-70">2024-11-10</p>
            </div>
          </div>
          <Rating readOnly value={4} precision={1} />
          <p>가방 질이 너무 좋아요~~</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://image.msscdn.net/thumbnails/images/goods_img/20240816/4336354/4336354_17247392379149_big.jpg?w=1200"
              alt=""
            />
          </div>
        </Grid2>
      </Grid2>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
