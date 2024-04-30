import ImageCard from "./ImageCard";
interface dataObj {
  imgSrc: string;
  title: string;
  content: string;
}
const data: dataObj[] = [
  {
    imgSrc: "/public/medicalimage2@2x.png",
    title: "Inspiring Trust,Delivering Excellence",
    content:
      "Built on a foundation of trust, Omnione strives for excellence in every aspect. Our solutions are designed to inspire confidence, creating a healthcare environment where trust is earned and outcomes are optimized.",
  },
  {
    imgSrc: "/public/medicalimage1@2x.png",
    title: " Lorem Ipsun,Preposition",
    content:
      "Cross hospitals and and patient care facilities. By integrating advanced digital technology with the unique needs of healthcare facilities, we offer a comprehensive solution that enhances patient care, improves operational efficiency, and ensures secure, accessible medical data.",
  },
];

const ImageCards = () => {
  return (
    <section className="px-8 md:px-12 lg:px-32 flex flex-col gap-8">
      {data.map((imgCard, index) => {
        const title = imgCard.title.split(",");
        const formatted = (
          <span>
            {title[0]},
            <br /> {title[1]}
          </span>
        );
        return (
          <ImageCard
            imgSrc={imgCard.imgSrc}
            title={formatted}
            content={imgCard.content}
            reverse={index === 1 && true}
          />
        );
      })}
    </section>
  );
};

export default ImageCards;
