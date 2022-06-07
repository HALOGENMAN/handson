function opennn(e) {
  window.open(`?p=${Number(e)}`, "_self");
}

let page = document.querySelector(".page").textContent;

document.querySelector(".btnPrev").addEventListener("click", (e) => {
  opennn(Number(page) - 1);
});

document.querySelector(".btnNext").addEventListener("click", (e) => {
  opennn(Number(page) + 1);
});
