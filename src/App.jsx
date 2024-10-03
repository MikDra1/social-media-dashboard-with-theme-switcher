import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import { useSocialMedia } from "./context/SocialMediaProvider";

function App() {
  const { darkMode } = useSocialMedia();

  return (
    <div className={`container ${darkMode ? "" : "light"}`}>
      <div className="widthController">
        <Navigation />
        <Cards />
        <Overview />
      </div>
    </div>
  );
}

export default App;
