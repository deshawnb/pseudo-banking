import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BudgetList from "../../components/BudgetList/BudgetList";
import axios from "axios";

const BudgetPage = () => {
    const [user, token] = useAuth();
    const [accounts, setAccounts] = useState([]);
  
    useEffect(() => {
      const fetchAccount = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/budgets/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setAccounts(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchAccount();
    }, [token]);
  
    return (
      <div className="container">
        <h1>Your Budgets</h1>
        <BudgetList parentBudgets={accounts}/>
      </div>
    );
  };

export default BudgetPage