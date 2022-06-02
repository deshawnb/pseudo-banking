import BankAccount from "../BankAccount/BankAccount";
import { useNavigate, Link } from "react-router-dom";
import BankAccountForm from "../BankAccountForm/BankAccountForm";

const BankAccountList = (props) => {
    const navigate = useNavigate();
    
    return (
        <div>
            {props.parentAccounts.map((account) => {
                return (
                    <div>
                        <BankAccount id={account.id}   account_type={account.account_type} balance={account.balance} budget={account.budget}/>
                        <button onClick={() => navigate(`/${account.id}`)}>Deposit</button>
                        <button onClick={() => navigate(`/${account.id}`)}>Withdraw</button>
                    </div>
                );
            })}
        </div>
    )
}

export default BankAccountList