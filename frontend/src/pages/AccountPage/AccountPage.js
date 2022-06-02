import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BankAccountList from "../../components/BankAccountList/BankAccountList";
import BankAccountForm from "../../components/BankAccountForm/BankAccountForm";
import axios from "axios";

const AccountPage = () => {
    const [user, token] = useAuth();
    const [accounts, setAccounts] = useState([]);
  
    useEffect(() => {
      fetchAccount();
    }, [token]);

  const fetchAccount = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/banking_accounts/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setAccounts(response.data);
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
        <h1>Your Bank Accounts</h1>
        <BankAccountList parentAccounts={accounts}/>
        <BankAccountForm addNewInfoProperty={createAccount}/>
        <button>Add new account</button>
        </div>
      </div>
      
    );
  };

export default AccountPage