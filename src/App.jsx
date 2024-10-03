import Cards from "./components/Cards";
import ContentBackground from "./components/ContentBackground";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import { useSocialMedia } from "./context/SocialMediaProvider";

function App() {
  const { darkMode } = useSocialMedia();

  return (
    <div className={`container ${darkMode ? "" : "light"}`}>
      <div className="widthController">
        <ContentBackground />
        <Navigation />
        <Cards />
        <Overview />
      </div>
    </div>
  );
}

export default App;
