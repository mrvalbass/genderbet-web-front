"use client";
import Header from "@/app/components/Header";
import UserContext from "@/app/context/UserContext";
import { useContext, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
dayjs.locale("fr");

export default function Birthday() {
  const { user } = useContext(UserContext);
  const [date, setDate] = useState<Dayjs>(
    user.predictions.birthDay
      ? dayjs(user.predictions.birthDay)
      : dayjs(new Date(2024, 11, 26))
  );

  const handleDateChange = async (newDate: Dayjs) => {
    user.predictions.birthDay = newDate;
    setDate(newDate);
    const options = {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        date: newDate.toDate(),
      }),
    };
    await fetch(
      "https://genderbet-back.vercel.app/users/updateBirthday",
      options
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <Header back />
      <main className="h-[90svh] bg-orange-100 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-[500] pt-5 md:pt-10 font-BabyFont text-center mx-10 leading-relaxed">
          Date estimée : <br />
          26 Décembre 2024
        </h1>
        <div className="flex flex-col grow m-5 md:m-10 max-w-[1000px] w-4/5 justify-center">
          <DateCalendar
            value={date}
            onChange={handleDateChange}
            sx={{
              backgroundColor: "#00000022",
              fontSize: "2rem",
              borderRadius: "10px",
              border: "5px #ef7c51 solid",
              transform: {
                md: "scale(1.3)",
              },
              ".MuiPickersDay-root.Mui-selected": {
                backgroundColor: "#ef7c51",
                color: "#ffedd5",
                "&focus": {
                  backgroundColor: "#ef7c51",
                },
                "&active": {
                  backgroundColor: "#ef7c51",
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "#ef7c51",
                },
              },
              ".MuiPickersDay-root": {
                fontWeight: "bold",
              },
            }}
          />
        </div>
      </main>
    </LocalizationProvider>
  );
}
