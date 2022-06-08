import React from "react";
import useAuth from "../../hooks/useAuth";
import derek from "../../assets/derek-thomson-M1jCmRxO7cY-unsplash.jpg"



const HomePage = () => {
  const [user, token] = useAuth();


  return (
    <div className="container">
      <div>
        <img src={derek} alt="happy family" style={{width: "50%"}}/>
      </div>
      <h1>Welcome {user.username}!</h1>
      <p>Please update your info if you have not already</p>
    </div>
  );
};

export default HomePage;
