import { Delete } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

const accountStatu = [
  {
    status: "PENDING_VERFICATION",
    title: "검증 대기 중",
    description: "검증 대기 중",
  },
  {
    status: "ACTIVE",
    title: "활성화",
    description: "활성화",
  },
  {
    status: "SUSPENDED",
    title: "정지",
    description: "정지",
  },
  {
    status: "DEACTIVATED",
    title: "비활성화됨",
    description: "비활성화됨",
  },
  {
    status: "BANNED",
    title: "금지됨",
    description: "금지됨",
  },
  {
    status: "CLOSED",
    title: "닫음",
    description: "닫음",
  },
];

const Coupon = () => {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");

  const handleChange = (event: any) => {
    setAccountStatus(event.target.value);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>쿠폰 코드</StyledTableCell>
              <StyledTableCell>시작 날짜</StyledTableCell>
              <StyledTableCell align="right">끛나는 날짜</StyledTableCell>
              <StyledTableCell align="right">최소 주문 금액</StyledTableCell>
              <StyledTableCell align="right">할인율</StyledTableCell>
              <StyledTableCell align="right">삭제</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button>
                    <Delete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Coupon;
