

const BankAccount = (props) => {
    return (
        <div className="info details">
            <p>owner: {props.user.username}</p>
            <p>Account Name: {props.account_name}</p>
            <p>Account number: {props.id}</p>
            <p>Account type: {props.account_type.type}</p>
            <p>Balance: {props.balance}$</p>
            <p>Budget Limit: {props.budget.budget_limit}</p>
        </div>
    );
}

export default BankAccount