import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BudgetList from "../../components/BudgetList/BudgetList";
import BudgetForm from "../../components/BudgetForm/BudgetForm";
import axios from "axios";
import budget from "../../assets/sincerely-media-rct82Ei80Fw-unsplash.jpg"

const BudgetPage = () => {
  const [user, token] = useAuth();
  const [budgets, setBudgets] = useState([]);
  
  useEffect(() => {
    fetchBudget();
  }, [token]);

  const fetchBudget = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/budgets/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setBudgets(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  
  const createBudget = async (newAccount) => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/budgets/", newAccount, {
        headers: {
          Authorization: "Bearer " + token,
        }, 
      } );
      if(response.status === 201){
        await fetchBudget();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div>
        <img src={budget} alt="happy family" style={{width: "50%"}}/>
      </div>
      <h1>Your Budgets</h1>
      <BudgetList parentBudgets={budgets}/>
      <BudgetForm addNewBudgetProperty={createBudget} user_id={user.id}/>
    </div>
  );
};

export default BudgetPage