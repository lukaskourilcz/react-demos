const Copy = () => {

  const copyHandler = () => {
    console.log('dont steal')
  }

    return (
      <p onCopy={copyHandler}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor delectus necessitatibus impedit, saepe facere nisi corporis, 
        molestiae accusamus nostrum ratione ex cupiditate soluta omnis mollitia! Delectus vel recusandae consectetur molestias?</p>
    )
}

function App() {
  return (
    <section>
      <Copy/>
    </section>
  );
}

export default App;
