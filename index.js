import * as dotenv from "dotenv";
import React from "react";
import { render } from "react-dom";
import App from "./App";

dotenv.config();
render(<App />, document.getElementById("root"));
