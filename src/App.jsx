import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

function App() {
  return (
    <main>
      <h1>Conditional Rendering in React</h1>
      <Weather temp={6} />
      <Weather temp={18} />
      <Weather temp={37} />

      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={true}/>

      <h1>Conditional Rendering in React</h1>

      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting />
    </main>
  );
}

export default App;
