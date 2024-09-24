
const Banner = () => {
  return (
    <div className="banner bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-center bg-no-repeat bg-cover">
      <div className="container mx-auto h-full flex items-center">
        <div className="bg-[#0000008f] outer lg:w-2/5 md:w-full rounded px-10 py-12 text-white">
            <h1 className="text-5xl font-bold ">Let us find your <br />
            <span className="text-[#ff003e]">Forever Food</span></h1>
            <p className="mt-5 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, deleniti!</p>
            <div className="flex gap-x-5 mt-5">
                <button className="rounded bg-[#ff003e] hover:bg-[#c02121] ease-linear duration-100 text-white font-bold px-6 py-2">Search Now</button>
                <button className="rounded bg-[#fff] hover:bg-[#dfdfdf] ease-linear duration-100 text-[#c80505] font-bold px-6 py-2">Know More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
