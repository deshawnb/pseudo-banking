import BankAccount from "../BankAccount/BankAccount";
import { useNavigate, Link } from "react-router-dom";


const BankAccountList = (props) => {

    function handleClick(id){
        let accountId = id
        props.setAccountId(accountId)
        console.log(accountId)
    }
    
    return (
        <div className="info">
            {props.parentAccounts.map((account) => {
                return (
                    <div>
                        <BankAccount id={account.id} user={account.user} account_name={account.account_name} account_type={account.account_type} balance={account.balance} budget={account.budget} />
                        <Link to={`/account-details/${account.id}`}>
                            <button onClick={() => handleClick(account.id)}>Account Details</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default BankAccountList