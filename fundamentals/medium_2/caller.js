function makeDoubler(caller) {
  const doubler = function (number) {
    console.log("This function was called by ${caller}.");
    return number + number;
  };

  return doubler;
}
