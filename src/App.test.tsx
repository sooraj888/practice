import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CountryInput from "./pages/CountryInput";

test("rendering App componenet", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.debug();
});

// test("rendering CountryInput componenet", () => {
//   render(
//     <BrowserRouter>
//       <CountryInput></CountryInput>
//     </BrowserRouter>
//   );
//   screen.debug();
// });

// test("rendering CountryInput componenet", () => {
//   render(
//     <BrowserRouter>
//       <CountryInput></CountryInput>
//     </BrowserRouter>
//   );
//   fireEvent.change(screen.getByPlaceholderText("Enter country name"), {
//     target: { value: "s" },
//   });
// });

// test("rendering CountryInput componenet", () => {
//   const a = render(
//     <BrowserRouter>
//       <CountryInput></CountryInput>
//     </BrowserRouter>
//   );
//   fireEvent.change(screen.getByPlaceholderText("Enter country name"), {
//     target: { value: "s" },
//   });
//   expect(screen.getAllByPlaceholderText("Enter country name")).toBeCalledTimes(
//     1
//   );
//   expect(a).toMatchSnapshot();
// });
