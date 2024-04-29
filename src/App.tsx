import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TransformingHealthCare from "./components/TransformingHealthCare";
const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col gap-8">
        <Hero />
        <TransformingHealthCare />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
