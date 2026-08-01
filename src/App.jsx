import { Card } from "./components/Card";
import "./App.css";
import { Counter } from "./components/Counter";
import { ToggleButton } from "./components/Toggle";
import { ProfileCompletion } from "./components/ProfileCompletion";

function App() {
  return (
    <>
      <Card
        name="Abhishek Anand"
        role="FullStack Developer"
        email="xyz@gmail.com "
      />

      <Counter />

      <ToggleButton />

      <ProfileCompletion 
        percentage={32}  
      />
    </>
  );
}

export default App;
