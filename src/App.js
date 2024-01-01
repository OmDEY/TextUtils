import { useState } from "react";
import About from "./components/About";
import { NavBar } from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const [Mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success")
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/About",
  //     element : (<About/>)
  //   },
  //   {
  //     path: "/",
  //     element:(<><NavBar/><Alert/><div className="container">
  //     <TextForm showAlert = {showAlert} mode = {Mode} heading = "Enter the text to Analyze Below"/>
  //     </div></>)
  //   }
  // ])

  return (
    <>
      <BrowserRouter>
        <NavBar title="TextUtils" about="About TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Alert alert={alert} />
                <div className="container">
                  <TextForm showAlert={showAlert} mode={Mode} heading="Enter the text to Analyze Below" />
                </div>
              </>
            }>
          </Route>
          <Route 
            exact
            path="/About"
            element={<About mode={Mode}/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar title="TextUtils" about = "About TextUtils" mode ={Mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container">
        <TextForm showAlert = {showAlert} mode = {Mode} heading = "Enter the text to Analyze Below"/>
        <About/>
      </div> */}
    </>
  );
}

export default App;
