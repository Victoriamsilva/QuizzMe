import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes/router";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
html {
--background-blue: #333b65;
--background-yellow: #FFC90B;
--text-blue: #5970E7;
--hover-yellow: #ecba0b;
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
    </div>
  );
}

export default App;
