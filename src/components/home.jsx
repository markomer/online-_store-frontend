import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-page">
      <h1>Art Venue</h1>
      <h5>Your Artwork Hub</h5>

      <div>
        <Link to="/catalog" className="btn btn-info">Check out our awesome catalog!</Link>
      </div>

    </div>
  );
};

export default Home;