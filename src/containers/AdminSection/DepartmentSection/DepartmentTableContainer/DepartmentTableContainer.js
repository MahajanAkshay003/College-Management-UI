import React, {Fragment, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Button} from "@material-ui/core";
import useGetRefreshedDepartments from "../../../../remoteHooks/getRefreshedDepartments";
import {green, orange} from "@material-ui/core/colors";
import AddOrEditHodDialog from "../DepartmentDialogs/AddOrEditHodDialog";

const DepartmentTableContainer = props => {
  const [ departments, setSearch ] = useGetRefreshedDepartments();
  const [ open, setOpen ] = useState(false);
  const [ isEdit, setEdit ] = useState(false);
  const [ selectedDepartment, setSelectedDepartment ] = useState();
  const tableHeaders = ["Department Name", "Department Description", "HOD", "Actions"];
  const getRefreshedDepartmentData = () => setSearch(true);
  const addEditHodHandler = (departmentIndex, isEdit) => {
    setSelectedDepartment(departments[departmentIndex]);
    setEdit(isEdit);
    setOpen(true);
  }
  return (
    <Fragment>
      <Paper>
        <Table size={'medium'}>
          <TableHead>
            <TableRow>
              {tableHeaders.map((tableHeader, index) => (
                <TableCell
                  key={index}
                  align={'left'}
                  padding={'default'}
                  sortDirection={false}
                >
                  {tableHeader}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {departments && departments.map((department, index) => (
              <TableRow key={department.id}>
                <TableCell><b>{department.departmentName}</b></TableCell>
                <TableCell>{department.departmentDescription}</TableCell>
                <TableCell>{department.departmentHodId && department.departmentHod.fullName}</TableCell>
                <TableCell>
                  {
                    !department.departmentHodId &&
                    <Button variant={"contained"} style={{ backgroundColor: green[500], color: "white" }} onClick={() => addEditHodHandler(index, false)}>
                      Add HOD
                    </Button>
                  }
                  {
                    department.departmentHodId &&
                    <Button variant={"contained"} style={{ backgroundColor: orange[500], color: "white" }} onClick={() => addEditHodHandler(index, true)}>
                      Edit HOD
                    </Button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <AddOrEditHodDialog department={selectedDepartment} open={open} setOpen={setOpen} isEdit={isEdit} getRefreshedDepartmentData={getRefreshedDepartmentData}  />
    </Fragment>
  );
}

export default DepartmentTableContainer;