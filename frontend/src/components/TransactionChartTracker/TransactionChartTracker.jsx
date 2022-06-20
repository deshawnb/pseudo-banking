import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const TransactionsChartTracker = (props) => {
    const [data, setData] = useState([]);
    const [depositData, setDepositData] = useState([]);
    const [withdrawData, setWithdrawData] = useState([]);
    const [totalSpent, setTotalSpent] = useState(0);
    const [budgetLimit, setBudgetLimit] = useState(0);



    useEffect(() => {
        let getBudget = props.parentAccounts.map(account => {
            console.log(account.budget.budget_limit)
            return account.budget.budget_limit
        });
        setBudgetLimit(getBudget)

        let setTransactions =  props.parentEntries.map(entry => {
            return [entry.transaction_type.type, entry.transaction_name, entry.amount_transferred, entry.time_of_transaction]
        });
        setData(setTransactions);

        let getWithdrawals = props.parentEntries.filter(entry => {
            if(entry.transaction_type.id == 1){
                return true;
            }
            else{
                return false
            }
        });
        let amountSpent = 0
        let setWithdrawals = getWithdrawals.map(entry => {
            amountSpent = amountSpent + entry.amount_transferred
            console.log(amountSpent)
            return [entry.time_of_transaction, entry.amount_transferred]
        });
        setTotalSpent(amountSpent)
        setWithdrawData(setWithdrawals);
        console.log('test')
        

        let getdeposits = props.parentEntries.filter(entry => {
            if(entry.transaction_type.id == 2){
                return true;
            }
            else{
                return false
            }
        });
        let setDeposits = getdeposits.map(entry => {
            return [entry.time_of_transaction, entry.amount_transferred]
        })
        setDepositData(setDeposits);
    }, [props.parentEntries])

    const depositOptions = {
        title: "Past Deposits",
        hAxis: { title: "Time Of Transaction", minValue: 0, maxValue: 15 },
        vAxis: { title: "Amount", minValue: 0, maxValue: 15 },
        legend: { position: "bottom" },
        animation: {
            startup: true,
            easing: "linear",
            duration: 500,
        },
        enableInteractivity: true,
        colors: ['blue']
        };
    
    const withdrawOptions = {
        title: "Past Withdrawals",
        hAxis: { title: "Time Of Transaction", minValue: 0, maxValue: 15 },
        vAxis: { title: "Amount", minValue: 0, maxValue: 15 },
        legend: { position: "bottom" },
        animation: {
            startup: true,
            easing: "linear",
            duration: 500,
        },
        enableInteractivity: true,
        colors: ['red']
        };

    const transactionOptions = {
        allowHtml: true,
        showRowNumber: true,
        };

    const budgetOptions = {
        title: "Budget percentage",
        vAxis: { 
            title: "Percentage Uptime", 
            viewWindowMode:'explicit',
            viewWindow:{
              min:0
            }
          }
        };

    const formatters = [
        {
            type: "NumberFormat",
            column: 2,
            options: {
            prefix: "$",
            negativeColor: "red",
            negativeParens: false,
            },
        },
    ];

    const remainingBudget = (num) => {
        if(num < 0){
            console.log('over limit')
            alert('you have exeeded the budget limit')
            return 0
        }
        else{
            return num
        }
    }

    const budgetData = [
        ["budget", "cash"],
        ["remaining budget",remainingBudget(budgetLimit[0]+totalSpent)],
        ["budget spent", -totalSpent],
    ];

    return (  
        <div>
            <p>Total Spent {-totalSpent}$</p>
            <p>Budget Remaining {budgetLimit[0]+totalSpent}$</p>
            <Chart
            chartType="PieChart"
            data={budgetData}
            width="100%"
            height="400px"
            options={budgetOptions}
            />
            <Chart
            chartType="ScatterChart"
            data={[["Time", "Deposit"], ...depositData]}
            width="100%"
            height="400px"
            options={depositOptions}
            />
            <Chart
            chartType="ScatterChart"
            data={[["Time", "Withdrawal"], ...withdrawData]}
            width="100%"
            height="400px"
            options={withdrawOptions}
            />
            <Chart
            chartType="Table"
            data={[["Type", "Name", "Transaction", "Time of Transaction"], ...data]}
            width="100%"
            height="400px"
            options={transactionOptions}
            formatters={formatters}
            />
            
        </div>
    );
}
 
export default TransactionsChartTracker;