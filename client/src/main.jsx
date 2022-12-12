import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { store } from './store/store.js'
import { CartProvider } from "react-use-cart";
import { Provider } from 'react-redux'
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
    <CartProvider>
      <App />
      </CartProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
