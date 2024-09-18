import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

// React router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeTxt, setModeTxt] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  // Function to show Alert
  const showAlert = (message, type) => {
    setAlert({
      mes: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // Function to Toggle Mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeTxt("Enable Light Mode");
      document.body.style.backgroundColor = "#202C39";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      setModeTxt("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleModeTxt={modeTxt}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
