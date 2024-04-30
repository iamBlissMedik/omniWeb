import Product from "./Product";
interface product {
  title: string;
  content: string;
  backgroundColor?: string;
}
const Products = () => {
  const products: product[] = [
    {
      title: "OmniNote",
      content:
        "Our AI-Powered Physician Notes feature offers a transformative approach to documentation, one that allows physicians to focus on the patient rather than the process of note-taking. With advanced AIalgorithms at work, this tool listens, learns, and accurately captures the intricacies of patient-physician interactions during consultations. The system is designed to understand medical terminology and context, ensuring that the nuances of each conversation are not lost. With AI-Powered Physician Notes, healthcare providers can navigate the increasing demands of documentation in a way that is efficient, accurate, and most importantly, patient-focused. This represents a significant stride toward the future of medical record-keeping, where technology enhances the humantouch of medicine.",
      backgroundColor: "bg-pink-800",
    },
    {
      title: " EHR",
      content:
        "An Electronic Health Record (EHR) system that offers a transformative solution by integrating various aspects of healthcare management into a single, digital platform. Our system has  features designed to meet the unique needs of medical facilities and physicians, including Appointment Setting, Billing, Patients’ Page, Vitals Monitoring, AI-powered Physician Notes, Orders and Prescriptions, Medical Diagnosis, Medical Staff Profiles and more.",
      backgroundColor: "bg-blue-600 bg-opacity-15",
    },
    {
      title: "  OmniExchange",
      content:
        "The integration of Fast Healthcare Interoperability Resources (FHIR) standards with Health Information Exchange (HIE) marks a significant advancement in healthcare IT by promoting interoperability and efficient data sharing. Our adoption of FHIR in our health data exchange enhances care coordination, facilitates real-time, accurate data exchange, empowers patients through access to their health information, patient-centered care, operational efficiency, and the development of new health IT solutions, ultimately contributing to better healthcare outcomes and more responsive healthcare systems.",
      backgroundColor: "bg-yellow-600 bg-opacity-5",
    },
  ];

  return (
    <section className="px-8 md:px-12 lg:px-32 py-4" id="products">
      <div className="flex flex-col gap-4">
        <h3 className="text-center lg:text-4xl md:text-2xl text-2xl font-extrabold">
          Our Products
        </h3>
        <p className="text-xl md:text-2xl font-light text-center">
          We offer a comprehensive solution that enhances patient care, improves
          operational efficiency, and ensures secure, accessible medical data.
        </p>
        {/* list of products */}
        <div className="flex flex-col gap-6">
          {products.map((product, index) => (
            <Product
              title={product.title}
              content={product.content}
              backgroundColor={product.backgroundColor}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
