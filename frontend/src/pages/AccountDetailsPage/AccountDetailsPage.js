import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import BankAccountDetails from "../../components/BankAccountDetails/BankAccountDetails";
import TransactionsChartTracker from "../../components/TransactionChartTracker/TransactionChartTracker";
import card from "../../assets/towfiqu-barbhuiya-HNPrWOH2Z8U-unsplash.jpg"

const AccountDetailsPage = () => {
    const [user, token] = useAuth();
    const {accountId} = useParams();
    const [account, setAccount] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [transactionTypes, setTransactionTypes] = useState([]);

    
    useEffect(() => {
        fetchAccountById(accountId);
        fetchBudget();
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

      const fetchBudget = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/budgets/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response)
          setBudgets(response.data);
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
            <div>
              <img src={card} alt="happy family" style={{width: "50%"}}/>
            </div>
            <h1>Bank Account {accountId}</h1>
            <h2>Account Details</h2>
            <BankAccountDetails parentAccounts={account} budgets={budgets}/>

            <Link to={`/`}>
              <button style={{color: "red"}} onClick={deleteAccount}>Delete Account</button>
            </Link>
            <TransactionForm addNewBudgetProperty={createTransaction} user_id={user.id} bank_account_id={accountId} transaction_types={transactionTypes} account={account}/>
            <h2>Transaction History</h2>
            <TransactionsChartTracker parentEntries={transactions} parentAccounts={account}/>
            </div>
        </div>
      );
};

export default AccountDetailsPage