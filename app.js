const btn_up = document.getElementById("btn_up")
const btn_down = document.getElementById("btn_down")
const btn_reset = document.getElementById("btn_reset")

btn_up.addEventListener("click", function () {
  const count = document.getElementById("count_text")
  // console.log(count.innerHTML)
  count.innerHTML = String(Number(count.innerHTML) + 1)
})

btn_down.addEventListener("click", function () {
  const count = document.getElementById("count_text")
  count.innerHTML = String(Number(count.innerHTML) - 1)
})

btn_reset.addEventListener("click", function () {
  const count = document.getElementById("count_text")
  count.innerHTML = String(0)
})
