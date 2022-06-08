import React, { useState } from "react";


const BudgetForm = (props) => {
    const [budget_name, setBudgetName] = useState('');
    const [budget_limit, setBudgetLimit] = useState(0);
    let user_id = props.user_id

    function handleSubmit(event) {
        event.preventDefault();
        let newBudget = {
            user_id : user_id,
            budget_name : budget_name,
            budget_limit : budget_limit,
        };
        console.log(newBudget)
        props.addNewBudgetProperty(newBudget)
    }

    return (
        <form className="info" onSubmit={handleSubmit}>
            <label>New Account name</label>
            <input type='text' value={budget_name} onChange={(event) =>setBudgetName(event.target.value)}/>
            <label>Budget Limit</label>
            <input type='num' value={budget_limit} onChange={(event) =>setBudgetLimit(event.target.value)}/>
            <button type="submit">Add New Budget</button>
        </form>
    )
}

export default BudgetForm

