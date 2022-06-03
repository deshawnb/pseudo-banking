import React, { useState } from "react";


const BankAccountForm = (props) => {
    const [account_name, setAccountName] = useState('');
    const [account_type_id, setAccountTypeId] = useState(0);
    const [budget_id, setBudgetId] = useState(0);
    let user_id = props.user_id
    let account_types = props.account_types
    let balance = 0
    let budgets = props.budgets

    function handleSubmit(event) {
        event.preventDefault();
        let newCustomerInfo = {
            user_id : user_id,
            account_name : account_name,
            account_type_id : account_type_id,
            balance : balance,
            budget_id : budget_id,
        };
        console.log(account_types)
        console.log(budgets)
        console.log(newCustomerInfo)
        props.addNewInfoProperty(newCustomerInfo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Account name</label>
            <input type='text' value={account_name} onChange={(event) =>setAccountName(event.target.value)}/>
            <select id={account_type_id} onChange={(event) =>setAccountTypeId(event.target.value)}> 
                <option value={0}>Select account type</option>
                {account_types.map((account_type) => {
                    return (
                        <option value={`${account_type.id}`}>{`${account_type.type}`}</option>
                    );
                })}
            </select>
            <select id={budget_id} onChange={(event) =>setBudgetId(event.target.value)}>
                <option value={0}>Select budget</option>
                {budgets.map((budget) => {
                    return (
                        <option value={`${budget.id}`}>{`${budget.budget_name}`}</option>
                    );
                })}
            </select>
            <button type="submit">Add Account</button>
        </form>
    )
}

export default BankAccountForm