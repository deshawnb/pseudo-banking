import React, { useState } from "react";

const CustomerInfoForm = (props) => {
    let user = props.user
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip_code, setZipCode] = useState('');
    let membership_history = props.membership_history

    function handleSubmit(event) {
        event.preventDefault();
        let newCustomerInfo = {
            user : user,
            first_name : first_name,
            last_name : last_name,
            street_address : street_address,
            city : city,
            state : state,
            zip_code : zip_code,
            membership_history : membership_history,
        };
        console.log(newCustomerInfo)
        props.addNewInfoProperty(newCustomerInfo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='text' value={first_name} onChange={(event) =>setFirstName(event.target.value)}/>
            <label>Last Name</label>
            <input type='text' value={last_name} onChange={(event) =>setLastName(event.target.value)}/>
            <label>Street Address</label>
            <input type='text' value={street_address} onChange={(event) =>setStreetAddress(event.target.value)}/>
            <label>City</label>
            <input type='text' value={city} onChange={(event) =>setCity(event.target.value)}/>
            <label>State</label>
            <input type='text' value={state} onChange={(event) =>setState(event.target.value)}/>
            <label>Zip Code</label>
            <input type='text' value={zip_code} onChange={(event) =>setZipCode(event.target.value)}/>
        </form>
    )
}

export default CustomerInfoForm