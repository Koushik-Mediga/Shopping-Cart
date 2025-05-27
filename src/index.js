import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from 'react-redux'
import { store } from "./redux/Store";
import { BrowserRouter, HashRouter } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <HashRouter>
    <App />
    <Toaster />
  </HashRouter>
  </Provider>
);
