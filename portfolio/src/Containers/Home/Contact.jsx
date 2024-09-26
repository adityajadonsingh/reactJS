import ContactForm from "../../Components/ContactForm";
import ContactDetails from "../../Components/ContactDetails";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact-home">
        <div className="container mx-auto px-10">
            <div className="flex flex-wrap justify-evenly items-center">
                <div className="lg:w-2/5 w-full">
                    <ContactForm/>
                </div>
                <div className="lg:w-2/5 w-full lg:mt-0 mt-10">
                    <ContactDetails/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
