import "../styles/App.css";
import "./MyBrowser";
import MyBrowser from "./MyBrowser";

function App() {
  return (
    <div className="App">
      <MyBrowser
        expandedFolders={[
          "/Common7",
          "/SDK/Bootstrapper",
          "/VC/redist/onecore",
        ]}
      />
    </div>
  );
}

export default App;
