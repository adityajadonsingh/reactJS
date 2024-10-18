import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-black">
        <div className="container mx-auto">
          <ul className="flex gap-x-8 text-2xl font-bold py-5 justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
