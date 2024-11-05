import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://image.msscdn.net/data/curating/19099/19099_2_org.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdi5Hh89_PWg7GQUsApl5MdnwoRkBHc-tIA&s"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://static.lookpin.co.kr/20211210144609-c7fa/70420eef14f121a3756e7ff981320ef1.jpg"
          alt=""
        />
      </div>
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://image.sivillage.com/upload/C00001/goods/org/593/230525005245593.jpg?RS=750&SP=1"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-center rounded-md"
          src="https://cafe24.poxo.com/ec01/sanpoodo/EjglQcnyYl9oLKpqUS6wZrJP1RZw9qO9cdiou8mMBF22L2nvV+FU0WqMa0aUv6vqT/ywPV/NCUnrxbKhw45XqA==/_/web/product/big/201905/368a7069002044c2b519abe606d6e0bf.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://image.msscdn.net/thumbnails/images/goods_img/20240514/4128785/4128785_17156574038604_big.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
