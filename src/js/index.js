//FORÇAS
const inputForca = document.querySelector(".input-forca");
const btnForca = document.getElementById("btn-forca");
const caixaForca = document.getElementById("caixa-forca");

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (inputForca.value !== "") {
      lerInputForca();
    } else if (inputFraquezas.value !== "") {
      lerInputFraquezas();
    } else if (inputOportunidades.value !== "") {
      lerInputOportunidades();
    } else if (inputAmeacas.value !== "") {
      lerInputAmeacas();
    }
  }
});

let armazenarForcas = [];

btnForca.addEventListener("click", lerInputForca);

function lerInputForca() {
  if (inputForca.value !== "") {
    armazenarForcas.push(inputForca.value);
    exibirNaTelaForca();
    inputForca.value = "";
  } else {
    alert("Campo força vazio, preencha o campo.");
  }
}

function exibirNaTelaForca() {
  let novaLista = "";

  armazenarForcas.forEach((mensagem, posicao) => {
    novaLista =
      novaLista +
      `<li class="item-text">
        <p>${mensagem}</p>
        <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeForca(${posicao})">
      </li>`;
  });

  caixaForca.innerHTML = novaLista;
}

function removeForca(posicao) {
  armazenarForcas.splice(posicao, 1);
  exibirNaTelaForca();
}

// FRAQUEZAS
const inputFraquezas = document.querySelector(".input-fraquezas");
const btnFraquezas = document.getElementById("btn-fraquezas");
const caixaFraquezas = document.getElementById("caixa-fraquezas");

let armazenarFraquezas = [];

btnFraquezas.addEventListener("click", lerInputFraquezas);

function lerInputFraquezas() {
  if (inputFraquezas.value !== "") {
    armazenarFraquezas.push(inputFraquezas.value);
    exibirNaTelaFraquezas();
    inputFraquezas.value = "";
  } else {
    alert("Campo fraquezas vazio, preencha o campo.");
  }
}

function exibirNaTelaFraquezas() {
  let novaLista = "";

  armazenarFraquezas.forEach((mensagem, posicao) => {
    novaLista =
      novaLista +
      `<li class="item-text">
        <p>${mensagem}</p>
        <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeFraqueza(${posicao})">
      </li>`;
  });

  caixaFraquezas.innerHTML = novaLista;
}

function removeFraqueza(posicao) {
  armazenarFraquezas.splice(posicao, 1);
  exibirNaTelaFraquezas();
}

// OPORTUNIDADES
const inputOportunidades = document.querySelector(".input-oportunidades");
const btnOportunidades = document.getElementById("btn-oportunidades");
const caixaOportunidades = document.getElementById("caixa-oportunidades");

let armazenarOportunidades = [];

btnOportunidades.addEventListener("click", lerInputOportunidades);

function lerInputOportunidades() {
  if (inputOportunidades.value !== "") {
    armazenarOportunidades.push(inputOportunidades.value);
    exibirNaTelaOportunidades();
    inputOportunidades.value = "";
  } else {
    alert("Campo oportunidades vazio, preencha o campo.");
  }
}

function exibirNaTelaOportunidades() {
  let novaLista = "";

  armazenarOportunidades.forEach((mensagem, posicao) => {
    novaLista =
      novaLista +
      `<li class="item-text">
        <p>${mensagem}</p>
        <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeOportunidade(${posicao})">
      </li>`;
  });

  caixaOportunidades.innerHTML = novaLista;
}

function removeOportunidade(posicao) {
  armazenarOportunidades.splice(posicao, 1);
  exibirNaTelaOportunidades();
}

// AMEAÇAS
const inputAmeacas = document.querySelector(".input-ameacas");
const btnAmeacas = document.getElementById("btn-ameacas");
const caixaAmeacas = document.getElementById("caixa-ameacas");

let armazenarAmeacas = [];

btnAmeacas.addEventListener("click", lerInputAmeacas);

function lerInputAmeacas() {
  if (inputAmeacas.value !== "") {
    armazenarAmeacas.push(inputAmeacas.value);
    exibirNaTelaAmeacas();
    inputAmeacas.value = "";
  } else {
    alert("Campo ameaças vazio, preencha o campo.");
  }
}

function exibirNaTelaAmeacas() {
  let novaLista = "";

  armazenarAmeacas.forEach((mensagem, posicao) => {
    novaLista =
      novaLista +
      `<li class="item-text">
        <p>${mensagem}</p>
        <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeAmeaca(${posicao})">
      </li>`;
  });

  caixaAmeacas.innerHTML = novaLista;
}

function removeAmeaca(posicao) {
  armazenarAmeacas.splice(posicao, 1);
  exibirNaTelaAmeacas();
}
