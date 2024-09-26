import Heading from "../Components/Heading";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form py-5 md:px-8 px-5">
        <Heading
          title={"Let’s work together!"}
          position={"items-start"}
          para={
            "I design and code beautifully simple things and i love what i do. Just simple like that!"
          }
        />
        <form>
          <div className="inn mt-5">
            <input
              type="text"
              className="w-full py-3 px-4 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="inn mt-3">
            <input
              type="email"
              className="w-full py-3 px-4 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="inn mt-3">
            <input
              type="number"
              className="w-full py-3 px-4 rounded-lg"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="inn mt-3">
            <textarea
              rows={5}
              className="w-full py-3 px-4 rounded-lg"
              placeholder="Write Your Message Here..."
            ></textarea>
          </div>
          <div className="contact-btn mt-8">
            <button className="cta-btn text-white py-2 px-10 font-bold w-full mb-5">
             Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
