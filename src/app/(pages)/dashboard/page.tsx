"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { UserInterface } from "@/app/context/UserContext";

export default function Dashboard() {
  const [rows, setRows] = useState([]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nom", width: 100 },
    { field: "email", headerName: "E-mail", width: 250 },
    { field: "gender", headerName: "Sexe", width: 60 },
    { field: "firstname", headerName: "Prénom", width: 500 },
    { field: "birthday", headerName: "Date", width: 100 },
  ];

  useEffect(() => {
    (async () => {
      const data = await fetch("https://genderbet-back.vercel.app/users").then(
        (r) => r.json()
      );
      const users = data.users;
      setRows(
        users.map((user: UserInterface) => ({
          id: user._id,
          name: user.name,
          email: user.email,
          gender: user.predictions.gender,
          firstname: `♂: ${user.predictions.firstName.boy.join(
            ", "
          )}, ♀: ${user.predictions.firstName.girl.join(", ")} `,
          birthday:
            user.predictions.birthDay &&
            dayjs(user.predictions.birthDay).format("DD/MM/YYYY"),
        }))
      );
    })();
  }, []);

  return (
    <>
      <Header back />
      <main className="h-[90svh] bg-orange-100 flex flex-col items-center p-10 overflow-auto">
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            ".MuiDataGrid-columnHeader": {
              backgroundColor: "#ef7c51",
              fontWeight: "bold",
              color: "#ffedd5",
            },
            ".MuiDataGrid-columnHeaders": { backgroundColor: "#000" },
          }}
        />
      </main>
    </>
  );
}
