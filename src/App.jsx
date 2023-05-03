import { CardanoToaster, CardanoWalletSelector } from "use-cardano";
import "use-cardano/styles/use-cardano.css";
import "./App.css";

const Content = () => {
  return (
    <div>
      <CardanoWalletSelector />
      <CardanoToaster />
    </div>
  );
};

function App() {
  return (
    <>
      <Content />
    </>
  );
}

export default App;
