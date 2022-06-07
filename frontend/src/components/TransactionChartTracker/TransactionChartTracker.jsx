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
        setWithdrawData(setWithdrawals)
    }, [props.parentEntries])

    const data = [
        ["Time", "Deposits"],
        ...withdrawData
        ];

    const options = {
        title: "Past Transactions",
        legend: { position: "bottom" },
        };

    return (  
        <Chart
            chartType="LineChart"
            data={data}
            width="100%"
            height="400px"
            options={options}
        />
    );
}
 
export default TransactionsChartTracker;