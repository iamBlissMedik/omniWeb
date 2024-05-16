import CustomInput from "./ui/CustomInput";
import CustomButton from "./ui/CustomButton";

const ContactForm = () => {
  // to enable just number
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const isValid = /^\d+$/.test(keyValue) || [8, 46, 37, 39].includes(keyCode);
    if (!isValid) {
      event.preventDefault();
    }
  };
  return (
    <section
      id="contactUs"
      className="flex justify-center px-8 md:px-12 lg:px-32 md:py-14 py-2 h-full"
      style={{
        backgroundImage: "url(/public/frame-5089.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <form className=" grid grid-cols-1 gap-3 sm:gap-4">
        <h1 className="text-5xl text-white font-bold text-center">
          Get in touch with us
        </h1>
        <p className="text-white text-lg text-center font-semibold">
          Feel free to contact us at anytime. We will get back to you as soon as
          we can.
        </p>
        {/* organisation name */}
        <CustomInput
          label="Organization Name"
          placeholder="Enter Your Organization Name"
        />
        {/* email + phone numb */}
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-3">
          <CustomInput
            type="email"
            label="Email Address"
            placeholder="Enter Your Organization Email Address"
          />
          <CustomInput
            label="Phone Number"
            placeholder="Enter Phone Number"
            type="tel"
            handlekeypress={handleKeyPress}
          />
        </div>
        {/* message */}
        <CustomInput
          label="Message"
          placeholder="Write Your Message"
          type="text"
          textArea
        />
        {/* button */}
        <div className="flex justify-center">
          <CustomButton className="bg-transparent  border-2 rounded-full px-16 py-4 text-white hover:bg-white hover:text-black">
            Submit
          </CustomButton>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
