import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistedStore } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <PersistGate persistor={persistedStore}>
                    <App />
                </PersistGate>
            </Provider>
        </Router>
    </React.StrictMode>
);
