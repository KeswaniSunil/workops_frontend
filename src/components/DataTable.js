import React from 'react';
import "../styles/DataTable.css";

import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Link} from 'react-router-dom';
import WorkOpsApi from "../api/WorkOpsBackend";
import {useSelector} from 'react-redux';


  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  
  
  function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
    const headCells=props.headCells;
    return (
      <TableHead className="table__header">
        <TableRow className="table__header__cell">
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              width={headCell.width}
              key={headCell.id}
            //   align={headCell.numeric ? 'right' : 'left'}
              align="left"
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    headCells: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }));
  
  // const EnhancedTableToolbar = (props) => {
  //   const classes = useToolbarStyles();
  //   const { numSelected } = props;
  
  //   return (
  //     <div className="selectedrows">
  //       {numSelected > 0 &&
  //         <div className="selectedrows__title">
  //           {numSelected} selected
  //         </div>
  //       }
  
  //       {numSelected > 0 &&
  //         <div title="Delete">
  //           <IconButton aria-label="delete" onClick={()=>{deleteRows}}>
  //             <DeleteIcon />
  //           </IconButton>
  //         </div>
  //       }
  //     </div>
  //   );
  // };
  
  // EnhancedTableToolbar.propTypes = {
  //   numSelected: PropTypes.number.isRequired,
  // };
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

const DataTable = ({rows,headCells,mode,generate}) => {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {projectId}=useSelector(state=>state.ProjectReducer);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
    
      const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          if(mode==='projectteam'){
            // console.log("rows= "+rows);
            const newSelecteds = rows.map((n) => n.id.user.email);
            // console.log(newSelecteds);
            setSelected(newSelecteds);
          }
          else if(mode==='components'){
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
          }
          else{
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
          }

          return;
        }
        setSelected([]);
      };
    
      const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        
        setSelected(newSelected);
      };
    
      const deleteRows=()=>{
        if(mode==="projectteam"){
          // console.log(selected);
          selected.map(s=>{
            console.log(projectId+" "+s);
            WorkOpsApi.delete("/api/projectteam/"+projectId+"/"+s)
            .then(res=>{
              if(res){
                console.log(res);
                generate();
                setSelected([]);
                return;
              } 
            })
          });
        }
        if(mode==="components"){
          // console.log(selected);
          selected.map(s=>
            {
            // console.log(s)
            WorkOpsApi.delete("/api/components/"+s)
            .then(res=>{
              if(res){
                // console.log(res);
                generate();
                setSelected([]);
                return;
              } 
            })
          }
          );
        }
      }

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const handleChangeDense = (event) => {
        setDense(event.target.checked);
      };
    
      const isSelected = (name) => selected.indexOf(name) !== -1;
    
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                    {/* <EnhancedTableToolbar numSelected={selected.length}/> */}
                    <div className="selectedrows">
                      {selected.length > 0 &&
                        <div className="selectedrows__title">
                          {selected.length} selected
                        </div>
                      }
                
                      {selected.length > 0 &&
                        <div title="Delete">
                          <IconButton aria-label="delete" onClick={deleteRows}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      }
                    </div>
                    <TableContainer>
                        <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                        >
                        <EnhancedTableHead
                            headCells={headCells}
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        {mode==='backlog' &&
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                
                                    return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                onClick={(event) => handleClick(event, row.id)}
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row" padding="none"
                                            // style={{display:"flex",alignItems:"center"}}
                                        >
                                            <img src={row.typeIcon} style={{paddingRight:5}}/>
                                            <span>{row.type}</span>
                                        </TableCell>
                                        <TableCell align="left">{row.desc}</TableCell>
                                        <TableCell align="left">{row.key}</TableCell>
                                        <TableCell align="left">{row.status}</TableCell>
                                        <TableCell align="center">
                                            <img src={row.priority} height="20"/>
                                        </TableCell>
                                    </TableRow>
                                    );
                                })}
                                {/* {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={7} />
                                </TableRow>
                                )} */}
                            </TableBody>
                        }
                        {mode==='components' &&
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                
                                    return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                onClick={(event) => handleClick(event, row.id)}
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell component={Link} to={"/components/"+row.id} id={labelId} scope="row" padding="none">
                                            {/* <Link to={"/components/"+row.id}> */}
                                              {row.name}
                                            {/* </Link> */}
                                        </TableCell>
                                        <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="left">{row.user.fullName}</TableCell>
                                    </TableRow>
                                    );
                                })}
                                {/* {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={7} />
                                </TableRow>
                                )} */}
                            </TableBody>
                        }
                        {mode==='projectteam' &&
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id.user.email);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                
                                    return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id.user.email}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                onClick={(event) => handleClick(event, row.id.user.email)}
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row" padding="none"
                                        >
                                        {row.id.user.fullName}
                                        </TableCell>
                                        <TableCell align="left">{row.id.user.email}</TableCell>
                                        <TableCell align="left">{row.role.role}</TableCell>
                                    </TableRow>
                                    );
                                })}
                                {/* {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={7} />
                                </TableRow>
                                )} */}
                            </TableBody>
                        }
                        </Table>
                    </TableContainer>
                    <TablePagination
                        className="table__pagination"
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    </Paper>
                    <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label="Dense padding"
                    />
        </div>
    );
}

export default DataTable;
