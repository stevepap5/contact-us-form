import { Provider } from "react-redux";
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div className="center">
        <ContactForm />
      </div>
    </Provider>
  );
}

export default App;
