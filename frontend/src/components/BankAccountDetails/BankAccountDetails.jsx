import BankAccount from "../BankAccount/BankAccount";


const BankAccountDetails = (props) => {
    return (
        <div>
            {props.parentAccounts.map((account) => {
                return (
                    <div>
                        <BankAccount id={account.id} user={account.user} account_name={account.account_name} account_type={account.account_type} balance={account.balance} budget={account.budget} />
                    </div>
                );
            })}
        </div>
    )

}

export default BankAccountDetails