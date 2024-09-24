
const Header = () => {
  return (
    <div className="header py-5 fixed w-full z-50">
      <div className="container mx-auto">
        <div className="flex">
            <div className="logo w-1/5">
                <a href="/" className="flex gap-x-4 items-center text-2xl font-bold text-white"><img src="https://flowbite.com/docs/images/logo.svg" alt="logo"/> GeekFoods</a>
            </div>
            <div className="nav flex justify-center items-center w-3/5">
                <ul className="flex gap-x-3 text-white font-bold">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Quote</a></li>
                    <li><a href="/">Resturants</a></li>
                    <li><a href="/">Foods</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="btn w-1/5">
                <button className="text-white bg-[#2563eb] hover:bg-[#1a3d88] ease-linear duration-100 py-1 px-6 font-bold rounded">Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
