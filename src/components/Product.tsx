import { useState } from "react";
import CustomButton from "./ui/CustomButton";
interface ProductProps {
  title: string;
  content: string;
  backgroundColor?: string;
  limit?: number;
}
const Product = ({
  content,
  title,
  backgroundColor = "bg-black",
  limit = 250,
}: ProductProps) => {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore((prevState) => !prevState);
  return (
    <div
      className={`p-7  bg-opacity-15 rounded-3xl flex flex-col gap-3 ${backgroundColor}`}
    >
      <div className="text-lg">
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-lg">
          {readMore ? content : `${content.substring(0, limit)}...`}
        </p>

      </div>
      <CustomButton className="p-0 border-none" onClick={toggleReadMore}>
        <div className="flex items-center w-full h-full text-lg text-[#6f003c]">
          {readMore ? (
            <p>Read Less</p>
          ) : (
            <>
              <p>Read More</p>
              <img
                className=""
                alt=""
                src="/public/icbaselinearrowdropdown.svg"
              />
            </>
          )}
        </div>
      </CustomButton>
    </div>
  );
};

export default Product;
