//referências
const div_imagens = document.getElementById('imagens');
const input_filtro = document.getElementById('input_filtro');
const botao = document.getElementById('button_filtrar');

// modificando o array
minhas_imagens.forEach(
  (ele) => {
      ele.caminho = 'imagens/numero_' + ele.valor + '.png';
  }
)

// manipulando o DOM

// listando imagens
const lista_imagens = ( entrada ) => {
  div_imagens.innerHTML = '';
  entrada.forEach(
    (ele) => {
      const img = document.createElement('img');
      img.src = ele.caminho;
      img.width = 100;
      img.alt = ele.descricao;
      img.className = 'item_lista_imagens';
      div_imagens.appendChild(img);
    }
  );
}

lista_imagens(minhas_imagens);

// criando card

const card = ( elemento ) => {

  const destino = document.getElementById('destaque')

  const container = document.createElement('div');
  const img = document.createElement('img');
  const legenda = document.createElement('h5');
  
  destino.innerHTML = '';
  
  container.style.width = '150px';
  container.style.textAlign = 'center';
  container.style.margin = 'auto';
  container.style.border = 'solid 1px black';
  container.style.padding = '5px';
  container.style.borderRadius = '3%';


  img.style.width = '100%'
  img.src = elemento.caminho

  legenda.innerHTML = elemento.descricao;
  legenda.style.fontFamily = 'Arial, Helvetica, sans-serif';
  
  container.appendChild(img);
  container.appendChild(legenda);

  destino.appendChild(container);
}

// relacionando evento
const relaciona_eventos = () => {
  const referencia_imagens = document.querySelectorAll('.item_lista_imagens');
  referencia_imagens.forEach(
    ( ele ) => {
      ele.addEventListener('click', (evento) => {
        const obj = {
          descricao : evento.target.alt,
          caminho : evento.target.src,
        }
        card(obj);
      });
    }
  );
}

relaciona_eventos();


// filtrar
const filtrar_imagens = (lista, pesquisa) => {
  let deve_entrar;
  let descricao_limpa;

  const nova_lista = lista.filter( (elemento) => {
    descricao_limpa = elemento.descricao;
    deve_entrar = descricao_limpa.includes(pesquisa.toLowerCase());
    return deve_entrar;
  });

  return nova_lista;
}

button_filtrar.onclick =  () => {
    const filtro = input_filtro.value;
    const imagens = filtrar_imagens(minhas_imagens, filtro);
    lista_imagens(imagens);
    relaciona_eventos();
  };