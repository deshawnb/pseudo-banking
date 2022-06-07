import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Budget = (props) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  let id = props.id

  useEffect(() => {
    
  }, [token]);

    const deleteBudget = async () => {
        try {
          let response = await axios.delete(`http://127.0.0.1:8000/api/budgets/${props.id}/`, {
            headers: {
              Authorization: "Bearer " + token,
            }, 
          } );
            }
             catch (error) {
            console.log(error.message);
          }
        };

    return (
        <div>
            <p>Budget ID: {props.id}</p>
            <p>Owner: {props.user.username}</p>
            <p>Budget Name: {props.budget_name}</p>
            <p>Budget Limit: {props.budget_limit}$</p>
            <button onClick={deleteBudget}>Delete Budget</button>
            <Link to="/edit-budget" style={{ textDecoration: "none", color: "white" }}>
              <button>Edit Budget</button>
            </Link>

        </div>
    );
}

export default Budget