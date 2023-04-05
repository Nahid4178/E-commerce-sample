import FeatureProduct from "./components/FeatureProduct";
import Slide from './components/MainPage/Slider';
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  return (
    <>
      <Slide />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
