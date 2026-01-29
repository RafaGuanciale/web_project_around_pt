# TripleTen — Around the U.S.

**visualizar projeto:** https://rafaguanciale.github.io/web_project_around_pt/

Este projeto tem como objetivo tornar uma página totalmente dinâmica utilizando JavaScript, substituindo elementos HTML estáticos por componentes criados via código. A aplicação permite:
- Criar, curtir, excluir e visualizar cards de forma interativa.

Além disso, o projeto trabalha intensivamente com:
- Manipulação do DOM
- Eventos
- Templates 
- Formulários

O foco principal desse projeto referente ao Sprint 8 do curso de Web Development da TripleTen, é consolidar conceitos fundamentais de JavaScript aplicados ao DOM, como criação dinâmica de elementos, reutilização de componentes, manipulação de eventos e organização do código em funções bem definidas.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Principais Funcionalidades e Soluções Técnicas

1. Função getCardElement()

- Clona o template do card
- Preenche título, imagem e texto alternativo
- Adiciona eventos de curtir, excluir e abrir imagem
- Utiliza parâmetros padrão para lidar com dados incompletos

2. Função renderCard()

- Responsável por inserir o card no DOM
- Insere novos cards sempre no início do container
- Mantém separação clara entre criação e renderização

3. Cards iniciais

- Os cards iniciais são renderizados a partir de um array de objetos
- Um forEach() percorre os dados e chama renderCard(), criando os cards iniciais

4. Adição de novos cards via formulário

- Um pop-up permite criar novos cards dinamicamente.
- Os cards são criados a partir da tag <template> do HTML
- O formulário captura nome e link da imagem.
- Ao enviar: 
O comportamento padrão é prevenido.
Um novo card é criado e inserido no DOM.
O modal é fechado e o formulário resetado.

5. Curtir e excluir cards

- Cada card possui um botão de curtir e outro de excluir
- O estado do botão é controlado via classList.toggle() e element.remove() respectivamente
- O evento é adicionado no momento da criação do card.

6. Controle de modais

- Funções genéricas para abrir e fechar modais.
- Modais são fechados por botão de fechar.

## Aprendizados Pessoais

Este foi um projeto no qual pude aplicar conceitos utilizados em aplicações reais, implementando interações comuns em sites modernos e tornando a página totalmente dinâmica para o usuário.
Alguns aprendizados que consolidaram minha base:

- Uso correto da tag <template> para criação dinâmica de componentes.
- Separação de responsabilidades entre funções.
- Manipulação eficiente do DOM.
- Uso de eventos em elementos criados dinamicamente.
- Diferença entre elementos, atributos e valores.
- Importância de parâmetros padrão em funções.
- Boas práticas para formulários e modais.

## Melhorias Futuras

- Fechar modais ao clicar no overlay.
- Fechar modais ao pressionar a tecla ESC.
- Adicionar validações mais avançadas nos formulários.
- Implementar animações de abertura e fechamento dos modais.
- Persistência dos cards utilizando armazenamento local (LocalStorage).