import BankAccount from "../BankAccount/BankAccount";
import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const BankAccountDetails = (props) => {
    const [user, token] = useAuth();
    const [budget_id, setBudgetId] = useState(0);
    let budgets = props.budgets
    
    return (
        <div>
            {props.parentAccounts.map((account) => {

            function handleSubmit(event) {
                event.preventDefault();
                let budgetId = budget_id
                editBudgetLimit(budgetId)
                window.location.reload(false);
            }

            const editBudgetLimit = async (budgetId) => {
                try {
                let response = await axios.put(`http://127.0.0.1:8000/api/banking_accounts/${account.id}/`, {
                    user_id : account.user.id,
                    account_name : account.account_name,
                    account_type_id : account.account_type.id,
                    balance : account.balance,
                    budget_id : budgetId,
                }, {
                    headers: {
                    Authorization: "Bearer " + token,
                    }, 
                });
                console.log(budgetId)
                }
                catch (error) {
                console.log(error.message);
                }
            }
                return (
                    <div>
                        <BankAccount id={account.id} user={account.user} account_name={account.account_name} account_type={account.account_type} balance={account.balance} budget={account.budget} />
                        <form className="info" onSubmit={handleSubmit}>
                            <select id={budget_id} onChange={(event) =>setBudgetId(event.target.value)}>
                                <option value={0}>Edit Budget</option>
                                {budgets.map((budget) => {
                                    return (
                                        <option value={`${budget.id}`}>{`${budget.budget_name}`}</option>
                                    );
                                })}
                            </select>
                            <button type="submit">Set Budget</button>
                        </form>
                    </div>
                );
            })}
        </div>
    )

}

export default BankAccountDetails