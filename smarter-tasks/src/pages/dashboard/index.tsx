import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const data = JSON.parse(localStorage.getItem('userData') || "{}");
    const navigate = useNavigate()
    const logout = () => {
       localStorage.removeItem("userData");
       localStorage.removeItem("authToken");
       navigate("/signin")
    }
  return (
    <div className="min-h-screen items-center bg-gray-100" style={{display:"flex" , flexDirection:"column", justifyContent:"center"}}>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <p className="text-1xl font-bold text-center text-gray-800 mb-3">{data.name}</p>
      <p className="text-1xl font-bold text-center text-gray-800 mb-5">{data.email}</p>
      <a href='#' id='logout-link' onClick={logout}>logout</a>
    </div>
  );
}

export default Dashboard;