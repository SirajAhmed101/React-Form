import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/Header";
import MemeSection from "./component/Meme";
import State from "./component/State";
import Message from "./component/Message";
import Forms from "./component/Forms";

function App() {
  return (
    <div>
      <Header />
      <MemeSection />
      <State />
      <Message />
      <Forms />
    </div>
  );
}

export default App;
