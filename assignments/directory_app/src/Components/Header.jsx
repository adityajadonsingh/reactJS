import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-5 fixed w-full z-30">
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div className="w-48">
                    <Link to={"/"}><img className="w-full h-auto" src="https://code-theme.com/html/listifind/images/logo-white-blue.svg" alt="" /></Link>
                    
                </div>
                <div className="flex gap-x-10 text-white text-lg font-bold items-center">
                    <div className="link">
                        <Link className="hover:text-[#e1c0ff]" to={"/"}>Home</Link>
                    </div>
                    <div className="link">
                        <Link className="hover:text-[#e1c0ff]" to={"/retrive"}>Retrieve Details</Link>
                    </div>
                    
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
