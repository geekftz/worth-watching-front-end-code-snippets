const ele = document.getElementById("box");

document.addEventListener("click", function (evt) {
  console.log("🚀 --> evt:", evt);
  // isClickedOutside 为 true 如果点击的元素在 ele 之外
  const isClickedOutside = !ele.contains(evt.target);
  console.log("🚀 --> isClickedOutside:", isClickedOutside);
});
