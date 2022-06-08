import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const TransactionsChartTracker = (props) => {

    const [depositData, setDepositData] = useState([]);
    const [withdrawData, setWithdrawData] = useState([]);

    useEffect(() => {
        let getWithdrawals = props.parentEntries.filter(entry => {
            if(entry.transaction_type.id == 1){
                return true;
            }
            else{
                return false
            }
        });
        let setWithdrawals = getWithdrawals.map(entry => {
            return [entry.time_of_transaction, entry.amount_transferred]
        })
        setWithdrawData(setWithdrawals);

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

    return (  
        <div>
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
        </div>
    );
}
 
export default TransactionsChartTracker;