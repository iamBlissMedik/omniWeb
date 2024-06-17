import { OnePlatformCardProps } from "../types/onePlatform";
import OnePlatformCard from "./OnePlatformCard";

const OnePlatform = () => {
  const data: OnePlatformCardProps[] = [
    {
      icon: "/carbonmeteralt.svg",
      iconAlt: "Elevating",
      title: "Elevating Healthcare Efficiency",
      text: "Omnione transforms healthcare facilities by optimizing workflows, enhancing communication, and delivering unparalleled efficiency, ultimately allowing healthcare professionals to focus on what matters most—patient well-being.",
    },
    {
      icon: "/icoutlineconnectwithoutcontact.svg",
      iconAlt: "Connections",
      title: "Bridging Gaps, Building Connections",
      text: "Our brand is a bridge between the gaps in healthcare, connecting providers, patients, and data seamlessly. Omnione facilitates a connected healthcare landscape, where collaboration thrives.",
    },
    {
      icon: "/mdimedicalbag.svg",
      iconAlt: "Healthcare",
      title: "Future-Forward Healthcare with Omnione",
      text: "As a forward-thinking brand, Omnione embraces the future of healthcare, leveraging advanced technologies to drive innovation and shape the landscape of patient-centered, data-driven care.",
    },
  ];
  return (
    <section className="px-8 md:px-12 lg:px-32 md:py-14 py-4">
      <div className="flex flex-col gap-4">
        {/* top */}
        <div>
          <h2 className="text-4xl font-bold">
            One platform,
            <br />
            infinite possibilities
          </h2>
        </div>
        {/* grid list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {data.map((card) => (
            <OnePlatformCard {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnePlatform;
