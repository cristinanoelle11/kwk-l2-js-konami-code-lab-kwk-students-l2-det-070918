const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
}
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    idx = (codes[index] === key) ? ++idx : 0
    
    if (index === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
    
  });
