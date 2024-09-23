const AboutSection = () => {
  return (
    <div className="about">
      <div className="container mx-auto">
        <div className="wrapper flex items-center">
          <div className="image-box w-1/2 flex items-center relative z-10">
            <img
              className="w-full h-full rounded"
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
          <div className="content flex items-center w-1/2 px-20 bg-[#ececec] relative rounded">
            <div className="box absolute h-full w-16 bg-[#ececec] rounded"></div>
            <div className="wrapper">
                <h2 className="font-bold text-3xl mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p className="mb-5 text-[#2b2b2b]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dignissimos doloremque cupiditate nam accusantium laudantium recusandae eum, placeat provident mollitia, quos quia commodi? Fugit quaerat nemo ad tempore voluptate perferendis?</p>
                <button className="text-white bg-[#2563eb] hover:bg-[#1a3d88] ease-linear duration-100 py-1 px-6 font-bold rounded">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
