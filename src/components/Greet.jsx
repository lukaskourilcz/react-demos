function Greet() {
  const greetingMessage = "Hello world";
  const currentDate = new Date().toLocaleString();
  return (
    <>
      <h1>{greetingMessage}</h1>
      <p>{currentDate}</p>
    </>
  );
}

export default Greet;
