

const CustomerInfo = (props) => {
    return (
        <div>
            {props.parentCustomers.map((customer) => {
                return (
                    <div className="info">
                        <p>First Name: {customer.first_name}</p>
                        <p>Last Name: {customer.last_name}</p>
                        <p>Address: {customer.street_address}</p>
                        <p>City: {customer.city}</p>
                        <p>State: {customer.state}</p>
                        <p>Zip Code: {customer.zip_code}</p>
                        <p>Memebership History: {customer.membership_history}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default CustomerInfo