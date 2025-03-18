import { useState } from "react";

function App() {

  const [friends, setFriends] = useState(['Alex', 'Jones'])
  const addOneFriend = () => setFriends([...friends, 'Lukas', 'Kakoak'])
  const removeOneFriend = () => setFriends(friends.filter((f) => f !== "Jones" ))
  const updateOneFriend = () => {
    setFriends(friends.map(f => f === 'Alex' ? 'Alan' : f))
  }


  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeOneFriend}>Remove One Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>

    </section>
  );
}

export default App;
