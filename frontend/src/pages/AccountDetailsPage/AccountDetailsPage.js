import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import TransactionList from "../../components/TransactionList/TransactionList";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import BankAccountDetails from "../../components/BankAccountDetails/BankAccountDetails";

const AccountDetailsPage = () => {
    const [user, token] = useAuth();
    const {accountId} = useParams();
    const [account, setAccount] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [transactionTypes, setTransactionTypes] = useState([]);

    
    useEffect(() => {
        fetchAccountById(accountId);
        fetchTransactionById();
        fetchTransactionTypes();
    }, [token]);

        const fetchAccountById = async () => {
          try {
              let response = await axios.get(`http://127.0.0.1:8000/api/banking_accounts/${accountId}/`, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
              console.log(response)
              setAccount(response.data);
            } catch (error) {
            console.log(error.response.data);
            }
        };

        const fetchTransactionById = async () => {
          try {
              let response = await axios.get(`http://127.0.0.1:8000/api/transactions/${accountId}/`, {
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

      const fetchTransactionTypes = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/transaction_types/all/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response)
          setTransactionTypes(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };

      const createTransaction = async (newTransaction) => {
        try {
          let response = await axios.post("http://127.0.0.1:8000/api/transactions/", newTransaction, {
            headers: {
              Authorization: "Bearer " + token,
            }, 
          } );
          if(response.status === 201){
            await fetchTransactionById();
          }
        } catch (error) {
          console.log(error.message);
        }
      };

      const deleteAccount = async () => {
        try {
          let response = await axios.delete(`http://127.0.0.1:8000/api/banking_accounts/${accountId}/`, {
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
            <div className="container">
            <h1>Bank Account {accountId}</h1>
            <h2>Account Details</h2>
            <BankAccountDetails parentAccounts={account}/>
            <button>Edit Account</button>
            <Link to={`/`}>
              <button onClick={deleteAccount}>Delete Account</button>
            </Link>
            <TransactionForm addNewBudgetProperty={createTransaction} user_id={user.id} bank_account_id={accountId} transaction_types={transactionTypes}/>
            <h2>Transaction History</h2>
            <TransactionList parentTransactions={transactions}/>
            
            </div>
        </div>
      );
};

export default AccountDetailsPage