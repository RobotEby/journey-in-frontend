import Swal from "sweetalert2";

const img = document.querySelector("#image");
const name = document.querySelector("#name");
const button = document.querySelector("#button");

const BASE_URL = "https://akabab.github.io/superhero-api/api";
const MAX_HEROES = 731;

const randomId = () => Math.floor(Math.random() * MAX_HEROES) + 1;

button.addEventListener("click", async (event) => {
  event.preventDefault();

  const id = randomId();

  try {
    const response = await fetch(`${BASE_URL}/id/${id}.json`);

    if (!response.ok) {
      throw new Error("Herói não encontrado");
    }

    const data = await response.json();

    if (!data?.images?.md || !data?.name) {
      throw new Error("Dados inválidos do herói");
    }

    img.src = data.images.md;
    img.alt = data.name;
    name.textContent = data.name;
  } catch (error) {
    console.error(error);

    img.src = "";
    name.textContent = "Herói não encontrado";

    Swal.fire({
      title: "Hero not found",
      text: "Tente novamente, estamos sorteando outro universo",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
});
