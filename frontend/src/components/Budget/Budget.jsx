

const Budget = (props) => {
    return (
        <div>
            <p>Budget ID: {props.id}</p>
            <p>Owner: {props.user.username}</p>
            <p>Budget Name: {props.budget_name}</p>
            <p>Budget Limit: {props.budget_limit}$</p>
        </div>
    );
}

export default Budget