
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{margin:"10px",fontSize:"50px"}}>404 - Not Found</h1>
      <p style={{margin:"10px",fontSize:"30px"}}>The page does not exist.</p>
      <Link to="/home">
        <button id="backToHomeButton" className="bg-blue-600 m-5  py-3 px-5 text-white rounded-lg hover:bg-blue-500 mb-4 ">Go to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;