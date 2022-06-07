import Transaction from "../Transaction/Transaction";

const TransactionList = (props) => {
    
    return (
        <div>
            {props.parentTransactions.map((transaction) => {
                return (
                    <div>
                        <Transaction id={transaction.id} bank_account={transaction.bank_account}transaction_type={transaction.transaction_type} transaction_name={transaction.transaction_name} amount_transferred={transaction.amount_transferred} time_of_transaction={transaction.time_of_transaction}/>
                    </div>
                )
            })}
        </div>
    )
}

export default TransactionList