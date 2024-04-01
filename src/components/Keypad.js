// Code Keypad Component Here

function Keypad() {
  const onChange = () => {
    console.log("Entering password...");
  };

  return <input type="password" onChange={onChange} />;
}

export default Keypad;
