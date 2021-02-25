import React from "react";
import ReactDOM from "react-dom";
import splitbee from '@splitbee/web';

import "./index.css";
import "./tailwind.css";
import App from "./components/App";

splitbee.init()

ReactDOM.render(<App />, document.getElementById("root"));