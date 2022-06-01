import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CustomerInfo from "../../components/CustomerInfo/CustomerInfo";
import axios from "axios";


const CustomerInfoPage = () => {
    const [user, token] = useAuth();
    const [customers, setCustomers] = useState([]);
  
    useEffect(() => {
      const fetchInfo = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/customers/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setCustomers(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchInfo();
    }, [token]);
  
    return (
      <div className="container">
        <h1>Your Info</h1>
        <CustomerInfo parentCustomers={customers}/>
      </div>
    );
  };

export default CustomerInfoPage