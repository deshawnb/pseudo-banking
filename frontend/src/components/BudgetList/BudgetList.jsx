import Budget from "../Budget/Budget";

const BudgetList = (props) => {

    return (
        <div>
            {props.parentBudgets.map((budget) => {
                return (
                    <div>
                        <Budget id={budget.id} user={budget.user} budget_name={budget.budget_name} budget_limit={budget.budget_limit} has_passed_limit={budget.has_passed_limit}/>
                    </div>
                );
            })}
        </div>
    )
}

export default BudgetList