import Swal from "sweetalert2";

const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const preEl = document.querySelector("pre");

buttonEl.addEventListener("click", handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    if (data.erro) throw new Error("Erro de cep inválido");

    console.log(data);
    preEl.innerHTML = JSON.stringify(data);
  } catch (error) {
    Swal.fire("Ops", error.message, "error");
  }
}
