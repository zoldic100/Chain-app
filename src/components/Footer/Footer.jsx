import React from "react";
import "./Footer.css";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    secondary: "",
  },
});
const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col justify-center gap-8 items-center">
        <h2 className="font-bold text-4xl text-center">
          Join Our Mailing List To Receive The{" "}
          <br className="hidden md:block" /> News & Latest Trends
        </h2>
        <div className="subscribe">
          <form
            action=""
            method="post"
            className="flex flex-row items-center justify-center  gap-14"
          >
            <div className="field text-white ">
              <ThemeProvider theme={theme}>
                <TextField
                  id="standard-basic"
                  label="Email"
                  color="secondary"
                  variant="standard"
                  sx={{
                    "& input": { color: "#fff" },
                    "& label": { color: "#fff", fontWeight: 800 },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white !important", // Set border bottom color to white
                    },
                    "&:focus label": { color: "#fff" },
                    "&focus  label": {
                      color: "#fff",
                    },
                  }}
                />
              </ThemeProvider>
            </div>
            <button className=" border-solid border-2 rounded-full px-20 py-2 font-bold bg-transparent hover:text-blue-400 hover:bg-white hover:border-white">
              Subscribe Now {">"}{" "}
            </button>
          </form>
          <div className="footer-links lg:grid grid-cols-12 justify-center  gap-16 mt-10">
            <div className=" col-span-3">
              <h4 className="font-bold text-xl">About Our Company</h4>
              <img src="" alt="" />
              <ul className="flex flex-col gap-5 mt-5">
                <li>Rio de Janeiro - RJ, 22795-008, Brazil</li>
                <li>
                  <a href="">010-020-0340</a>
                </li>
                <li>
                  <a href="">info@company.co</a>
                </li>
              </ul>
            </div>
            <div className=" col-span-3">
              <h4 className="font-bold text-xl">About Our Company</h4>
              <img src="" alt="" />
              <ul>
                <li>
                  <a href="">about</a>
                </li>
              </ul>
              <p className="text-white max-w-[200px]">
                About Our Company Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <div className=" col-span-3">
              <h4 className="font-bold text-xl">About Our Company</h4>
              <img src="" alt="" />
              <ul>
                <li>
                  <a href="">about</a>
                </li>
              </ul>
              <p className="text-white max-w-[200px]">
                About Our Company Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <div className=" col-span-3">
              <h4 className="font-bold text-xl">About Our Company</h4>
              <img src="" alt="" />
              <ul>
                <li>
                  <a href="">about</a>
                </li>
              </ul>
              <p className="text-white max-w-[200px]">
                About Our Company Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
          </div>
        </div>
        <span>
          Copyright © 2022 Chain App Dev Company. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
