import React, { useState } from "react";

const BankAccountForm = (props) => {
    let user = 1
    let account_type = 1
    let balance = 0
    let budget = 1

    function handleSubmit(event) {
        event.preventDefault();
        let newCustomerInfo = {
            user : user,
            account_type : account_type,
            balance : balance,
            budget : budget,
        };
        console.log(newCustomerInfo)
        props.addNewInfoProperty(newCustomerInfo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add new ckecking account</label>
            <button type="submit">Add</button>
        </form>
    )
}

export default BankAccountForm