document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (inputForca.value !== "") {
      lerInput("forca");
    } else if (inputFraquezas.value !== "") {
      lerInput("fraqueza");
    } else if (inputOportunidades.value !== "") {
      lerInput("oportunidade");
    } else if (inputAmeacas.value !== "") {
      lerInput("ameaca");
    }
  }
});

//FORÇAS
const inputForca = document.querySelector(".input-forca");
const btnForca = document.getElementById("btn-forca");
const caixaForca = document.getElementById("caixa-forca");

let armazenarForcas = [];

// btnForca.addEventListener("click", lerInputForca);
btnForca.addEventListener("click", () => {
  lerInput("forca");
});

/* function lerInputForca() {
//   if (inputForca.value !== "") {
//     armazenarForcas.push(inputForca.value);
//     exibirNaTela("forca");
//     inputForca.value = "";
//   } else {
//     alert("Campo força vazio, preencha o campo.");
//   }
// }*/

// FRAQUEZAS
const inputFraquezas = document.querySelector(".input-fraquezas");
const btnFraquezas = document.getElementById("btn-fraquezas");
const caixaFraquezas = document.getElementById("caixa-fraquezas");

let armazenarFraquezas = [];

btnFraquezas.addEventListener("click", () => {
  lerInput("fraqueza");
});

// OPORTUNIDADES
const inputOportunidades = document.querySelector(".input-oportunidades");
const btnOportunidades = document.getElementById("btn-oportunidades");
const caixaOportunidades = document.getElementById("caixa-oportunidades");

let armazenarOportunidades = [];

btnOportunidades.addEventListener("click", () => {
  lerInput("oportunidade");
});

// AMEAÇAS
const inputAmeacas = document.querySelector(".input-ameacas");
const btnAmeacas = document.getElementById("btn-ameacas");
const caixaAmeacas = document.getElementById("caixa-ameacas");

let armazenarAmeacas = [];

btnAmeacas.addEventListener("click", () => {
  lerInput("ameaca");
});

// LER INPUT'S
function lerInput(input) {
  if (input === "forca") {
    if (inputForca.value !== "") {
      armazenarForcas.push(inputForca.value);
      exibirNaTela("forca");
      inputForca.value = "";
    } else {
      alert("Campo força vazio, preencha o campo.");
    }
  } else if (input === "fraqueza") {
    if (inputFraquezas.value !== "") {
      armazenarFraquezas.push(inputFraquezas.value);
      exibirNaTela("fraqueza");
      inputFraquezas.value = "";
    } else {
      alert("Campo fraquezas vazio, preencha o campo.");
    }
  } else if (input === "oportunidade") {
    if (inputOportunidades.value !== "") {
      armazenarOportunidades.push(inputOportunidades.value);
      exibirNaTela("oportunidade");
      inputOportunidades.value = "";
    } else {
      alert("Campo oportunidades vazio, preencha o campo.");
    }
  } else if (input === "ameaca") {
    if (inputAmeacas.value !== "") {
      armazenarAmeacas.push(inputAmeacas.value);
      exibirNaTela("ameaca");
      inputAmeacas.value = "";
    } else {
      alert("Campo ameaças vazio, preencha o campo.");
    }
  }
}

// FUNÇÃO PARA EXIBIR NA TELA
function exibirNaTela(tipo) {
  let novaLista = "";

  console.log(tipo);

  if (tipo === "forca") {
    armazenarForcas.forEach((mensagem, posicao) => {
      novaLista =
        novaLista +
        `<li class="item-text">
          <p>${mensagem}</p>
          <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeElemento('forca',${posicao})">
        </li>`;
    });

    caixaForca.innerHTML = novaLista;
  } else if (tipo === "fraqueza") {
    armazenarFraquezas.forEach((mensagem, posicao) => {
      novaLista =
        novaLista +
        `<li class="item-text">
          <p>${mensagem}</p>
          <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeElemento('fraqueza',${posicao})">
        </li>`;
    });

    caixaFraquezas.innerHTML = novaLista;
  } else if (tipo === "oportunidade") {
    armazenarOportunidades.forEach((mensagem, posicao) => {
      novaLista =
        novaLista +
        `<li class="item-text">
          <p>${mensagem}</p>
          <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeElemento('oportunidade',${posicao})">
        </li>`;
    });

    caixaOportunidades.innerHTML = novaLista;
  } else if (tipo === "ameaca") {
    armazenarAmeacas.forEach((mensagem, posicao) => {
      novaLista =
        novaLista +
        `<li class="item-text">
          <p>${mensagem}</p>
          <img src="./src/img/icons/lixeira32.png" class="trash" alt="trash" onClick="removeElemento('ameaca',${posicao})">
        </li>`;
    });

    caixaAmeacas.innerHTML = novaLista;
  }
}

// EXCLUIR ELEMENTO
function removeElemento(id, posicao) {
  if (id === "forca") {
    armazenarForcas.splice(posicao, 1);
    exibirNaTela(`${id}`);
  } else if (id === "fraqueza") {
    armazenarFraquezas.splice(posicao, 1);
    exibirNaTela(`${id}`);
  } else if (id === "oportunidade") {
    armazenarOportunidades.splice(posicao, 1);
    exibirNaTela(`${id}`);
  } else if (id === "ameaca") {
    armazenarAmeacas.splice(posicao, 1);
    exibirNaTela(`${id}`);
  }
}

// BOTÃO BACK TO TOP APARECENDO COM O SCROLL

const backToTop = document.querySelector(".back-top");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      backToTop.classList.add("showBackTop");
    } else {
      backToTop.classList.remove("showBackTop");
    }
  });
});

observer.observe(document.querySelector(".point"));

const observer2 = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      backToTop.classList.remove("showBackTop");
    } else {
      backToTop.classList.add("showBackTop");
    }
  });
});

observer2.observe(document.querySelector(".no-point"));
