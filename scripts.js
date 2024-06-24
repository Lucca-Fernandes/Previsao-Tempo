const key = "cea16bccb62b9f933389515e3b8c32f3";

function colocarDadosNaTela(dados) {
  if (dados.name === undefined) {
    document.querySelector(".city").innerHTML = "Cidade não encontrada";
    return;
  }

  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".prev").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".img2"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  console.log(dados);
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  colocarDadosNaTela(dados);
}

function cliqueNoBotao() {
  const cidade = document.querySelector(".cidade").value;
  buscarCidade(cidade);
}
