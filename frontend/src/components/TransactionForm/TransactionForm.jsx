import React, { useState } from "react";


const TransactionForm = (props) => {
    const [transaction_name, setTransactionName] = useState('');
    const [transaction_type_id, setTransactionTypeId] = useState(0);
    const [amount_transferred, setAmountTransferred] = useState(0);
    let user_id = props.user_id
    let bank_account_id = props.bank_account_id
    let transaction_types = props.transaction_types

    function handleSubmit(event) {
        event.preventDefault();
        let newTransaction = {
            user_id : user_id,
            bank_account_id : bank_account_id,
            transaction_type_id : transaction_type_id,
            amount_transferred : amount_transferred,
            transaction_name : transaction_name,
        };
        console.log(newTransaction)
        props.addNewBudgetProperty(newTransaction)
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
            <button type="submit">Add New Budget</button>
        </form>
    )
}

export default TransactionForm