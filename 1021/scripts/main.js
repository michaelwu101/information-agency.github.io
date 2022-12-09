let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
function toggle_info() {
  const foo = document.getElementById("foo");
  // 取得 `foo` 的 class 列表。
  // `toggle` 會賦予元素給定的 class，或是移除給定的 class，
  // 取決於 class 是否已經存在
  foo.classList.toggle("invisible");
}
