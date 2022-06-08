import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BankAccountList from "../../components/BankAccountList/BankAccountList";
import BankAccountForm from "../../components/BankAccountForm/BankAccountForm";
import axios from "axios";
import bank from "../../assets/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg"

const AccountPage = () => {
    const [user, token] = useAuth();
    const [accounts, setAccounts] = useState([]);
    const [budgets, setBudgets] = useState([]);
    const [account_types, setAccountTypes] = useState([]);
  
    useEffect(() => {
      fetchAccount();
      fetchBudget();
      fetchAccountTypes();
    }, [token]);

  const fetchAccount = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/banking_accounts/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response)
      setAccounts(response.data);
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

  const fetchAccountTypes = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/account_types/all/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response)
      setAccountTypes(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const createAccount = async (newAccount) => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/banking_accounts/", newAccount, {
        headers: {
          Authorization: "Bearer " + token,
        }, 
      } );
      if(response.status === 201){
        await fetchAccount();
      }
    } catch (error) {
      console.log(error.message);
    }
  };


    return (
      <div>
        <div className="container">
        <div>
          <img src={bank} alt="happy family" style={{width: "50%"}}/>
        </div>
        <h1>Your Bank Accounts</h1>
        <BankAccountList parentAccounts={accounts}/>
        <BankAccountForm addNewInfoProperty={createAccount} user_id={user.id} budgets={budgets} account_types={account_types}/>
        </div>
        <div>
          <p>Place holder</p>
        </div>
      </div>
      
    );
  };

export default AccountPage