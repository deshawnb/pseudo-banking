import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const TransactionForm = (props) => {
    const [user, token] = useAuth();
    const [transaction_name, setTransactionName] = useState('');
    const [transaction_type_id, setTransactionTypeId] = useState(0);
    const [amount_transferred, setAmountTransferred] = useState(0);
    let user_id = props.user_id
    let bank_account_id = props.bank_account_id
    let transaction_types = props.transaction_types
    let account = props.account[0]
    console.log(props.account)

    const setBalance = async (balance) => {
        try {
          let response = await axios.put(`http://127.0.0.1:8000/api/banking_accounts/${bank_account_id}/`, {
            user_id : account.user.id,
            account_name : account.account_name,
            account_type_id : account.account_type.id,
            balance : balance,
            budget_id : account.budget.id,
          }, {
            headers: {
              Authorization: "Bearer " + token,
            }, 
          });
          console.log(balance)
        }
         catch (error) {
          console.log(error.message);
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        let balance = parseInt(account.balance)
        if(transaction_type_id == 1){
            let newTransaction = {
                user_id : user_id,
                bank_account_id : bank_account_id,
                transaction_type_id : transaction_type_id,
                amount_transferred : parseInt(`-${amount_transferred}`),
                transaction_name : transaction_name,
            };
            let newBalance = (parseInt(balance) - parseInt(amount_transferred));
            setBalance(newBalance)
            console.log(balance)
            props.addNewBudgetProperty(newTransaction)
            window.location.reload(false);
        }
        else if(transaction_type_id == 2){
            let newTransaction = {
                user_id : user_id,
                bank_account_id : bank_account_id,
                transaction_type_id : transaction_type_id,
                amount_transferred : parseInt(amount_transferred),
                transaction_name : transaction_name,
            };
            let newBalance =  (parseInt(balance) + parseInt(amount_transferred));
            setBalance(newBalance)
            console.log(balance)
            props.addNewBudgetProperty(newTransaction)
            window.location.reload(false);
        }
    }

    return (
        <form className="info" onSubmit={handleSubmit}>
            <label>Transaction Name</label>
            <input type='text' value={transaction_name} onChange={(event) =>setTransactionName(event.target.value)}/>
            <select id={transaction_type_id} onChange={(event) =>setTransactionTypeId(event.target.value)}> 
                <option value={0}>Select account type</option>
                {transaction_types.map((transaction_type) => {
                    return (
                        <option value={`${transaction_type.id}`}>{`${transaction_type.type}`}</option>
                    );
                })}
            </select>

            <label>Amount Transferred</label>
            <input type='int' value={amount_transferred} onChange={(event) =>setAmountTransferred(event.target.value)}/>

                <button type="submit" >make Transfer</button>

        </form>
    )
}

export default TransactionForm