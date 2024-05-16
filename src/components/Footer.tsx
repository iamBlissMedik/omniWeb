import { imgLink } from "../types/footerLinks";

const Footer = () => {
  const footerLinks: imgLink[] = [
    {
      imgSrc: "/public/shape.svg",
      alt: "facebook",
    },

    {
      imgSrc: "/public/twitter.svg",
      alt: "x",
    },
  ];
  return (
    <div>
      {/* first */}
      <div className="px-8 py-4 md:px-12 lg:px-32 md:py-14 grid md:flex gap-2 ">
        {/* logo */}
        <div className="w-full md:w-2/5">
          <a href="/">
            <img
              src="/public/frame-5088@2x.png"
              alt=""
              className="w-[150px] lg:w-[250px]"
            />
          </a>
        </div>
        {/* links */}
        <div className="w-full md:w-3/5 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-[#00509e] font-bold mb-2"> Menu</p>

            <a
              href="#products"
              className="text-black font-medium hover:underline"
            >
              Products
            </a>
            <a
              href="#contactUs"
              className="text-black font-medium hover:underline"
            >
              Contact Us
            </a>
          </div>
          {/* share links */}
          <div className="flex justify-end items-center gap-4 ">
            {footerLinks.map((link) => (
              <div
                className="p-1 md:p-2 border-2 rounded-full hover:bg-gray-100 "
                key={`alt-${Date.now()}`}
              >
                <a href="http://">
                  <img src={link.imgSrc} alt={link.alt} className="w-8 h-8" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" border-b-[1px] border-gray-400 " />
      {/* last */}
      <div className="text-center p-4">
        <p className="text-[#4a4a4a]"> © 2024 Omnione. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
