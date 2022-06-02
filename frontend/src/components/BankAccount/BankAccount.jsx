

const BankAccount = (props) => {
    return (
        <div>
            <p>Account number: {props.id}</p>
            <p>Account type: {props.account_type}</p>
            <p>Balance: {props.balance}</p>
            <p>Budget: {props.budget}</p>
        </div>
    );
}

export default BankAccount