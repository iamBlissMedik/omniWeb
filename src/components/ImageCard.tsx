interface ImageCardProps {
  imgSrc: string;
  title: string | JSX.Element;
  content: string;
  reverse?: boolean;
}
const ImageCard = ({ imgSrc, title, content, reverse }: ImageCardProps) => {
  return (
    <div
      className={`grid  md:grid-cols-2  gap-10 ${
        reverse && "px-4 md:px-8 py-10  bg-blue-600 bg-opacity-5 rounded-2xl"
      }`}
    >
      <div className="rounded-2xl w-full h-full   ">
        <img
          loading="lazy"
          alt=""
          src={imgSrc}
          className="w-full h-full object-fill rounded-2xl"
        />
      </div>
      <div
        className={`flex flex-col gap-4 ${
          reverse && "order-first justify-center"
        }`}
      >
        <h3 className="lg:text-4xl md:text-2xl text-2xl font-extrabold">
          {title}
        </h3>
        <p className="text-[18px]">{content}</p>
      </div>
    </div>
  );
};

export default ImageCard;
