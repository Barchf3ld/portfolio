function obterParametrosDaURL() {
  // Obter a URL atual
  const url = new URL(window.location.href);

  // Obter os parâmetros da URL
  const parametros = new URLSearchParams(url.search);

  // Extrair valores dos parâmetros
  const nome1 = parametros.get('nome1');
  const nome2 = parametros.get('nome2');
  const data = parametros.get('data');

  return { nome1, nome2, data };
}

// Exemplo de uso
const parametrosURL = obterParametrosDaURL();
const nomes1 = document.querySelector('.nome1');
const nomes2 = document.querySelector('.nome2');
const datas = document.querySelector('.data');

if (parametrosURL.nome1) {
  nomes1.innerHTML = parametrosURL.nome1;
}
if (parametrosURL.nome2) {
  nomes2.innerHTML = parametrosURL.nome2;
}

if (parametrosURL.data) {
  datas.innerHTML = parametrosURL.data;
}

console.log(datas);
