// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CustomerInfoPage from "./pages/CustomerInfoPage/CustomerInfoPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import BudgetPage from "./pages/BudgetPage/BudgetPage";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import AccountDetailsPage from "./pages/AccountDetailsPage/AccountDetailsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  const [accountId, setAccountId] = useState();


  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/info"
          element={
            <PrivateRoute>
              <CustomerInfoPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <AccountPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="/budget"
          element={
            <PrivateRoute>
              <BudgetPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/transfers"
          element={
            <PrivateRoute>
              <TransactionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/account-details/:accountId"
          element={
            <PrivateRoute>
              <AccountDetailsPage/>
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
