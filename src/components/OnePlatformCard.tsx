import { OnePlatformCardProps } from "../types/onePlatform";

const OnePlatformCard = ({
  icon,
  iconAlt,
  text,
  title,
}: OnePlatformCardProps) => {
  return (
    //   card
    <div className="flex flex-col gap-3 ">
      {/* border */}
      <div className=" border-t-2 border-gray-400"></div>
      {/* icon */}
      <div className="flex justify-start ">
        <div className="bg-blue-600 bg-opacity-5  rounded-lg p-2 ">
          <img src={icon} alt={iconAlt} className="w-8 h-8" loading="lazy" />
        </div>
      </div>
      {/* title */}
      <div className=" font-semibold text-lg">
        <h2>{title}</h2>
      </div>
      {/* text */}
      <div>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default OnePlatformCard;
