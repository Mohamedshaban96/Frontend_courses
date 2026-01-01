const inp = document.querySelector("input");
const div = document.querySelector("div");

inp.addEventListener("input", () => {
  let usd = Number(inp.value) || 0;

  if (usd < 0) usd = 0;

  div.textContent = `{${usd}} USD Dollar = {${(usd * 15.6).toFixed(
    2
  )}} Egyptian Pound`;
});
