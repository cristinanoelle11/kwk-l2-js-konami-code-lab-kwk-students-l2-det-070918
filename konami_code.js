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
  let sunny = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    sunny = (codes[idx] === key) ? ++idx : 0
    
    if (sunny === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
    
  });
