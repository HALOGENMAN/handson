"use strict";

const btn = document.querySelector(".btn");
let data;
let togalView = false;
let i1 = document.querySelector("#i1");
i1.style.display = "none";
let i2 = document.querySelector("#i2");

const getData = async () => {
  try {
    const rwa = await fetch("http://localhost:4321");
    const data = await rwa.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const updateData = async (d) => {
  try {
    let rec = await fetch("http://localhost:4321", {
      method: "POST",
      body: JSON.stringify(d),
    });
    return await rec.json();
  } catch (error) {
    console.log(error);
  }
};

const show = document.querySelector(".show");
const display1 = document.createElement("div");
const display2 = document.createElement("div");
display1.className = "one";
display2.className = "two hidden";

const flexHeading = document.createElement("div");
flexHeading.className = "fItem";
flexHeading.innerHTML = `<p>Name</p><p>ID</p><p>Skills</p><p>Project</p><p>HCM</p><p></p>`;

const makeData = (data) => {
  //for card view
  display1.innerHTML = "";
  display2.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "grid";

  const flex = document.createElement("div");
  flex.className = "flex flex-column gap";
  flex.appendChild(flexHeading);

  data.forEach((e, i) => {
    let gridItem = document.createElement("div");
    gridItem.className = "gItem flex flex-column";

    //close in grid
    let cls = document.createElement("div");
    cls.className = "flex flex-right";
    cls.innerHTML = `<button id="gBtn" onclick="dlt(${i})"><i class="fa-solid fa-circle-xmark" style="color:red;font-size:1.5rem"></i></button>`;
    gridItem.appendChild(cls.cloneNode(true));

    //image for grid Item
    let image = document.createElement("div");
    image.className = "image";
    image.innerHTML = `<img src="./images/${e.gender}.jpg" alt="${e.gender}" style="width:100%;height:100%">`;
    gridItem.appendChild(image);

    let flexItem = document.createElement("div");
    flexItem.className = "fItem";

    let name = document.createElement("p");
    name.innerHTML = `name: <span style="text-transform:capitalize">${e.name}</span>`;
    gridItem.appendChild(name.cloneNode(true));
    name.innerHTML = `${e.name}`;
    flexItem.appendChild(name);

    let id = document.createElement("p");
    id.style.textTransform = "uppercase";
    id.innerHTML = `id: ${e.id}`;
    gridItem.appendChild(id.cloneNode(true));
    id.innerHTML = `${e.id}`;
    flexItem.appendChild(id);

    let skills = document.createElement("p");
    skills.className = `skill--${i} `;
    const skl = e.skills.slice().join(", ");
    skills.innerHTML = `skills: ${skl}`;
    gridItem.appendChild(skills.cloneNode(true));
    skills.className = `fskill--${i}`;
    skills.innerHTML = `${skl}`;
    flexItem.appendChild(skills);

    let editSkill = document.createElement("div");
    editSkill.className = `skill editSkill--${i} hidden`;
    let inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "Edit Skills";
    inp.className = `inp--${i}`;
    editSkill.appendChild(inp);
    gridItem.appendChild(editSkill.cloneNode(true));
    editSkill.className = `skill feditSkill--${i} hidden`;
    inp.className = `finp--${i}`;
    flexItem.appendChild(editSkill);

    let project = document.createElement("p");
    project.innerHTML = `project: ${e.project}`;
    gridItem.appendChild(project.cloneNode(true));
    project.innerHTML = `${e.project}`;
    flexItem.appendChild(project);

    let hcm = document.createElement("p");
    hcm.style.textTransform = "uppercase";
    hcm.innerHTML = `hcm: <span style="text-transform:capitalize">${e.HCM}<span>`;
    gridItem.appendChild(hcm.cloneNode(true));
    hcm.style.textTransform = "capitalize";
    hcm.innerHTML = `${e.HCM}`;
    flexItem.appendChild(hcm);

    //close list
    let fcls = document.createElement("p");
    fcls.className = "flex flex-center";
    cls.className = "flex flex-center gap-1";
    cls.innerHTML = `<button id="gBtn" class="skill saveBtn" onclick="feditfunc(${i}); return false;"><p class="ftoggle1-${i}"><i class="fa-solid fa-pen-to-square"></i></p><p class="ftoggle2-${i} hidden"><i class="fa-solid fa-floppy-disk"></i></p></button><button id="gBtn" onclick="dlt(${i})"><i class="fa-solid fa-circle-xmark" style="color:red;font-size:1.5rem"></i></button></p>`;
    fcls.appendChild(cls);
    flexItem.appendChild(fcls);

    let edit = document.createElement("div");
    edit.className = "flex flex-right";
    edit.innerHTML = `<button id="gBtn" class="skill saveBtn" onclick="event.preventDefault(); editfunc(${i})"><p class="toggle1-${i}">EDIT</p><p class="toggle2-${i} hidden">SAVE</p></button>`;
    gridItem.appendChild(edit.cloneNode(true));

    grid.appendChild(gridItem);
    display1.appendChild(grid);

    flex.appendChild(flexItem);
    // display2.appendChild(flexHeading);
    display2.appendChild(flex);
  });
  show.appendChild(display1);
  show.appendChild(display2);
};

//delete item;
const dlt = async (e) => {
  try {
    data.splice(e, 1);
    data = await updateData(data);
    makeData(data);
  } catch (error) {
    console.log(error);
  }
};

const editfunc = async (i) => {
  try {
    const toggle1 = document.querySelector(`.toggle1-${i}`);
    const toggle2 = document.querySelector(`.toggle2-${i}`);
    toggle1.classList.toggle("hidden");
    toggle2.classList.toggle("hidden");

    const editSkill = document.querySelector(`.editSkill--${i}`);
    const skills = document.querySelector(`.skill--${i}`);

    editSkill.classList.toggle("hidden");
    skills.classList.toggle("hidden");

    let val = document.querySelector(`.inp--${i}`).value;
    if (val !== "") {
      data[i].skills = val.split(" ").filter((e) => e !== "");
      data = await updateData(data);
      makeData(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const feditfunc = async (i) => {
  try {
    const toggle1 = document.querySelector(`.ftoggle1-${i}`);
    const toggle2 = document.querySelector(`.ftoggle2-${i}`);
    toggle1.classList.toggle("hidden");
    toggle2.classList.toggle("hidden");

    const editSkill = document.querySelector(`.feditSkill--${i}`);
    const skills = document.querySelector(`.fskill--${i}`);
    editSkill.classList.toggle("hidden");
    skills.classList.toggle("hidden");

    let val = document.querySelector(`.finp--${i}`).value;
    if (val !== "") {
      data[i].skills = val.split(" ").filter((e) => e !== "");
      data = await updateData(data);
      makeData(data);
    }
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  try {
    data = await getData();
    if (!data) {
      alert(
        "first start the surver.\n\n STEPS: \n 1-> Go to backend folder, in Project Folder. \n 2-> Open Terminal/cmd In backend folder path. \n 3-> Run command 'node server.js' on terminal. \n 4-> Open 'index.html' file in browser."
      );
    }
    makeData(data);
    btn.addEventListener("click", (e) => {
      display1.classList.toggle("hidden");
      display2.classList.toggle("hidden");
      if (togalView) {
        i1.style.display = "none";
        i2.style.display = "inline";
      } else {
        i1.style.display = "inline";
        i2.style.display = "none";
      }

      togalView = !togalView;
    });
  } catch (err) {
    console.log(err);
  }
})();
