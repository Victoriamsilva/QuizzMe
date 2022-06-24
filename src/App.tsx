import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
.App{
  display: flex;
  height: 100vh;
  width: 100vw;
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
--black: #000000;
--blue-lighter:#124e78;
--beige: #f0f0c9;
--purple-lighter: #c3d0fc;
--purple-white: #d9e1ff;
--blue-light: #c4e3ff;
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
