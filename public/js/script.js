let cursosArrayGeral = [
  {
    "Descricao": "Back-end",
    "Link": "https://testeback-end.com.br",
    "preco": '100.00',
    "avaliacao": 5

  },
  {
    "Descricao": "Front-end",
    "Link": "https://testefront-end.com.br",
    "preco": '50.00',
    "avaliacao": 4

  },
  {
    "Descricao": "Banco de dados",
    "Link": "https://testedb-end.com.br",
    "preco": '0.00',
    "avaliacao": 3

  }
];

function avaliacao(numero = 1) {
  let star = '';

  if (numero === 1) {
    star = `<td><div class="star"><span class="star-icon">☆</span></div></td>`
  } else if (numero === 2) {
    star = `<td><div class="star"><span class="star-icon">☆</span><span class="star-icon">☆</span></div></td>`
  } else if (numero === 3) {
    star = `<td><div class="star"><span class="star-icon">☆</span><span class="star-icon">☆</span><span class="star-icon">☆</span></div></td>`
  } else if (numero === 4) {
    star = `<td><div class="star"><span class="star-icon">☆</span><span class="star-icon">☆</span><span class="star-icon">☆</span><span class="star-icon">☆</span></div></td>`
  } else if (numero === 5) {
    star = `<td><div class="star"><span class="star-icon">☆</span><span class="star-icon">☆</span><span class="star-icon">☆</span><span class="star-icon">☆</span><span class="star-icon">☆</span></div></td>`
  }
  return star
}

function formatObj(listaOpt) {
  let cursos = [], avaliacaoStar = '';
  listaOpt.forEach(e => {
    avaliacaoStar = avaliacao(e.avaliacao);
    cursos.push(
      {
        "Descricao": e.Descricao,
        "Link": e.Link,
        "preco": e.preco,
        "avaliacao": avaliacaoStar
      }
    )
  });
  return cursos
}
function buscar() {
  let listaGratis = [], listaOpt = [], listaPaga = [], lista = [];
  let optModalidade = document.getElementById("opt-modalidade");
  var valueModalidade = optModalidade.options[optModalidade.selectedIndex].text;
  let optPreco = document.getElementById("opt-preco");
  var valuePreco = optPreco.options[optPreco.selectedIndex].text;

  console.log(valueModalidade);
  console.log(valuePreco);

  cursosArrayGeral.forEach(e => {
    if (e.preco != '0.00') {
      listaPaga.push(e);
    } else {
      listaGratis.push(e);
    }
  })

  if (valuePreco != 'Pago') {
    lista = listaGratis;
    console.log('LISTA GRAT', listaGratis);

  } else {
    lista = listaPaga;
    console.log('LISTA PAGA', listaPaga);

  }

  lista.forEach(e => {
    if (e.Descricao === valueModalidade) {
      listaOpt.push(e);
    }
  });

  if (!listaOpt.length) {
    let semDados = '<p>Não temos dados para este filtro<p>';
    let elemResultado = document.getElementById("busca");
    elemResultado.innerHTML = semDados;
  } else {
    let trClass = '';
    formatObj(listaOpt).forEach(e => {
      trClass += `<tr class="table-busca-dados"><td>${e.Descricao}<td>${e.Link}<td> ${e.preco}${e.avaliacao}`
    });
    let table = `<table><tr class="r-busca-titulo" id="r-busca-titulo"><td>Descrição</td><td>Link</td><td>Preço</td><td>Avaliação</td></tr>${trClass}</table>`
    let elemResultado = document.getElementById("busca");
    elemResultado.innerHTML = table;
  }
}

function adicionar() {
  let descricao = document.getElementById("opt-modalidade-add");
  let descricaoValue = descricao.options[descricao.selectedIndex].text;
  let linkValue = document.getElementById("link").value;
  var precoValue = document.getElementById("preco").value;
  var avaliacaoValue = document.getElementById("avaliacao").value;

  cursosArrayGeral.push(
    {
      "Descricao": descricaoValue,
      "Link": linkValue,
      "preco": precoValue,
      "avaliacao": avaliacaoValue
    }
  );
}