import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This project was coded by{" "}
        <a
          href="https://www.youtube.com/channel/UC0rQDkXDNeidKnUafldmpdA"
          target="_blank"
        >
          Taylor Heaton
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/theaton89/weather-app-from-scratch"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
        .
      </p>
    </div>
  );
}

export default App;
