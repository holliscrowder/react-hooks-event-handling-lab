// Code EyesOnMe Component Here

function EyesOnMe() {
  const onFocus = () => {
    console.log("Good!");
  };
  const onBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <button onFocus={onFocus} onBlur={onBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
