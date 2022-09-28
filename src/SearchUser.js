import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import { tableData } from "./tableData";
import Paper from "@mui/material/Paper";
import UserTable from "./UserTable";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { CSVLink } from "react-csv";
import "./App.css";

export default function SearchUser() {
  const [searchUser, setSearchUser] = useState("");
  // const [searchAction, setSearchAction] = useState("");

  const search = (data) => {
    return data.filter(
      (item) =>
        item.userName.toLowerCase().includes(searchUser.toLowerCase()) ||
        item.userName.toUpperCase().includes(searchUser.toLowerCase())
    );
  };

  const headers = [
    { label: "User Name", key: "userName" },
    { label: "Date", key: "date" },
    { label: "Time", key: "time" },
    { label: "Action", key: "action" },
    { label: "Extra Data", key: "extraData" },
    { label: "IP Address", key: "ipAddress" },
    { label: "Geo Location", key: "geoLocation" },
  ];

  const csvReport = {
    filename: "Report.csv",
    headers: headers,
    data: tableData,
  };

  return (
    <>
      <div className="container">
        <div className="column-1">
          <p>User name</p>
          <Paper
            style={{
              width: "300px",
              height: "55px",
              display: "flex",
              margin: "10px",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Filter by User Name"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="column-2">
          <Button variant="contained" color="success">
            <CSVLink className="csv" {...csvReport}>
              CSV⬇️
            </CSVLink>
          </Button>
        </div>
        <div className="column-3">
          <Button variant="contained" color="secondary">
            columns
          </Button>
        </div>
      </div>
      <div className="user-body">
        <UserTable data={search(tableData)} />
      </div>
    </>
  );
}
