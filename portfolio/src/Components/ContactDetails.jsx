const ContactDetails = () => {
  return (
    <>
      <div className="contact-details">
        <ul>
          <li className="flex md:gap-x-5 gap-x-2">
            <div className="icn text-white my-auto">
              <div className="inner">
                <i className="bi bi-telephone-fill"></i>
              </div>
            </div>
            <div className="text">
              <span className="block text-xl text-[#dddddd]">Phone</span>
              <a className="block font-bold xl:text-3xl md:text-2xl text-lg" href="tel:+91-9711118228">
                +91 971 111 8228
              </a>
            </div>
          </li>
          <li className="flex md:gap-x-5 gap-x-2 mt-8">
            <div className="icn text-white my-auto">
              <div className="inner">
                <i className="bi bi-envelope-fill"></i>
              </div>
            </div>
            <div className="text">
              <span className="block text-xl text-[#dddddd]">Phone</span>
              <a className="block font-bold xl:text-3xl md:text-2xl text-lg" href="mailto: adityajadonsingh@gmail.com">
                adityajadonsingh@gmail.com
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactDetails;
