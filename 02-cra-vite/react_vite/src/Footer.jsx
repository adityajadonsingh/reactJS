
import Copyright from "./copyright";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <Copyright year={[1,2,3,4,5,6]} nums={[1,2,34,5,6]} details={{userName : "Aditya", age : "23"} }/>
    </footer>
  );
  
};

export default Footer;