import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../../Redux/Store';
import { fetchSellerProduct } from '../../../../Redux/Seller/SellerProductSlice';
import { Button, IconButton } from '@mui/material';
import { DeleteSweepRounded } from '@mui/icons-material';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function Products() {

  const dispatch = useAppDispatch();

  const {sellerProduct} = useAppSelector(store=>store);

  React.useEffect(()=>{
     dispatch(fetchSellerProduct(localStorage.getItem("jwt") || ""))
  },[])

  return (
    <TableContainer component={Paper}>
      <h1 className='font-semibold text-lg py-3' >All Products</h1>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">MRP</StyledTableCell>
            <StyledTableCell align="center">Selling Price</StyledTableCell>
            <StyledTableCell align="center">Selling Price</StyledTableCell>
            <StyledTableCell align="center">Update Stock</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {sellerProduct.products?.length>0 && sellerProduct.products.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                 <div className='flex flex-wrap gap-1'>
                      {row.images?.map((image)=> <img key={image} className='w-16 rounded-md' src={image} />)}
                 </div>
              </StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.mrpPrice}</StyledTableCell>
              <StyledTableCell align="center">{row.sellingPrice}</StyledTableCell>
              <StyledTableCell align="center">{row.discountedPercent} %</StyledTableCell>
              <StyledTableCell align="center">
                 <Button>
                  {row.stock || "STOCK"}
                 </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                 <IconButton > <DeleteSweepRounded/> </IconButton>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}