import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";

export default function UserTable({ data }) {
  return (
    <>
      <div className="data-body">
        {!data.length ? (
          <TableContainer className="no-data">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{color:"crimson"}}>Oops! No User Found</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer component={Paper}>
            <Table
              style={{ minWidth: 550, marginLeft: "auto", marginRight: "auto" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell align="left">User Name</TableCell>
                  <TableCell align="left">Date & Time</TableCell>
                  <TableCell align="left">Action</TableCell>
                  <TableCell align="left">Extra Data</TableCell>
                  <TableCell align="left">IP</TableCell>
                  <TableCell align="left">Geo Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((user) => {
                  return (
                    <TableRow key={user.id}>
                      <TableCell component="th" scope="row">
                        {user.userID}
                      </TableCell>
                      <TableCell align="left">{user.userName}</TableCell>
                      <TableCell align="left">
                        {user.date} {user.time}
                      </TableCell>
                      <TableCell align="left">{user.action}</TableCell>
                      <TableCell align="left">{user.extraData}</TableCell>
                      <TableCell align="left">{user.ipAddress}</TableCell>
                      <TableCell align="left">{user.geoLocation}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
}
