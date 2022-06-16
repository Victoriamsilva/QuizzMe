import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Yanone Kaffeesatz";
}
html {
--main-blue: #333b65;
--main-yellow: #FFC90B;
--text-blue: #5970E7;
--yellow-darker: #ecba0b;
--white: #F1F6FB;
--white-darker: #e2e7ec;
--red: #EA4335;
--blue: #475993;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
