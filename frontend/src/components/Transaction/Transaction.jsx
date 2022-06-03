

const Transaction = (props) => {
    return (
        <div>
            <p>Transfer ID: {props.id}</p>
            <p>Type: {props.transaction_type.type}</p>
            <p>Transfer Name: {props.transaction_name}</p>
            <p>Amount: {props.amount_transferred}$</p>
            <p>Time of Transfer: {props.time_of_transaction}</p>
        </div>
    );
}

export default Transaction