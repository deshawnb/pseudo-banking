import React from "react"
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import TransactionList from "../../components/TransactionList/TransactionList";
import axios from "axios";

const TransactionPage = () => {
    const [user, token] = useAuth();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransaction();
      }, [token]);

    const fetchTransaction = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/transactions/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            console.log(response)
            setTransactions(response.data);
        } catch (error) {
        console.log(error.response.data);
        }
    };

    return (
        <div className="container">
          <h1>Your Transaction History</h1>
          <TransactionList parentTransactions={transactions}/>
        </div>
      );

    }

export default TransactionPage