import { Card } from "./components/Card";
import "./App.css";
import { Counter } from "./components/Counter";
import { ToggleButton } from "./components/Toggle";
import { ProfileCompletion } from "./components/ProfileCompletion";
import { ProductCard } from "./components/ProductCard";
import { TemperatureDisplay } from "./components/Temperature"
import { LikeButton } from "./components/LikeButton";
import { NotificationBadge } from "./components/NotificationBadge";
import { ToDo } from "./components/ToDo";

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

      <ProductCard
        title="Dell convertiable Laptop"
        price={79999}
        rating={4.7}
        inStock={true}
      />

      <TemperatureDisplay 
        temperature={24}
      />

      <LikeButton />

      <NotificationBadge 
        notifications={234}
      />

      <ToDo />
    </>
  );
}

export default App;
