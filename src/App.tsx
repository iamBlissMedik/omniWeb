import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TransformingHealthCare from "./components/TransformingHealthCare";
import Products from "./components/Products";
import ImageCards from "./components/ImageCards";
import OnePlatform from "./components/OnePlatform";
import ReactMultiSelect from "./components/ReactMultiSelect";
const App = () => {
  return (
    <>
      <header className="sticky z-50 top-0 bg-white">
        <NavBar />
      </header>
      <main className="flex flex-col gap-8 ">
        <Hero />
        <TransformingHealthCare />
        <Products />
        <ImageCards />
        <OnePlatform />
        <ReactMultiSelect />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
