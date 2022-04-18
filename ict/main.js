let mainData;

const leftSection = document.querySelector("#leftSection");
const rightSection = document.querySelector("#rightSection");

const imgCntName = document.querySelector(".imgCnt-name");
const empid = document.querySelector(".empid");
const doj = document.querySelector(".doj");
const exp = document.querySelector(".exp");
const tech = document.querySelector(".tech");

const getData = async () => {
  const raw = await fetch("https://jsonblob.com/api/923947078393282560", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await raw.text();
  const arr = [...data];
  arr[0] = "[";
  arr[arr.length - 1] = "]";
  const remCurl = arr.join("");
  return JSON.parse(remCurl);
};

const display = (e) => {
  imgCntName.textContent = mainData[e].Name;
  empid.textContent = mainData[e].EmpID;
  doj.textContent = mainData[e]["DOJ"];
  exp.textContent = mainData[e]["Total Exp"];
  tech.textContent = mainData[e]["Technologies"];
};

(async () => {
  mainData = await getData();
  mainData.forEach((e, i) => {
    const list = `<div class="item item--${
      i % 2 == 0 ? "0" : "1"
    }" onclick="display(${i})">Name: ${e.Name} (${e.EmpID})</div`;
    leftSection.insertAdjacentHTML("beforeend", list);
  });
  display(0);
  console.log(mainData);
})();
