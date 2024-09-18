import { useDebugValue } from "react";
import "./HomePage.scss";
import Searchbar from "../../components/Searchbar/Searchbar";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="textcontainer">
        <div className="titlewrapper">
          <p className="findyourtext">Find your</p>
          <h1 className="spacetext">SPACE</h1>
          <div className="wrapper">
            <p className="descriptiontext">
              With Habi, your search is simple, intuitive, and designed to fit
              your needs. Room finder for Kathmandu Valley.
            </p>
          </div>
        </div>
        <Searchbar />
        {/* <div className="extratexts">
          <p>100+ Users</p>
          <p>Trusted</p>
          <p>Free</p>
        </div> */}
      </div>
      <div className="imagecontainer">
        <img src="/paintingoptimized.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
