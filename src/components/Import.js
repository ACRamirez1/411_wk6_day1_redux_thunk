import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Menu, MenuItem } from '@mui/material'
import { MoreVert } from '@mui/icons-material'


const Import = (props) => {
    // fill out this component

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
        <Container>
        <p>Import Component</p>
        <Button variant="contained" color='primary' onClick={props.fetchMakes}>Import</Button>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make) => (
            <TableRow
              key={make.MakeId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {make.MakeId}
              </TableCell>
              <TableCell align="right">{make.MakeName}</TableCell>
              <TableCell align="right"><MoreVert onClick={handleClick} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </Container>
    )
}

export default Import