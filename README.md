<div align="center" id="top"> 

  <a href="https://class-console.vercel.app/aula/1/">Demo</a>
</div>

<h1 align="center">Console de Aulas</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/kevin-kuhn/web-course?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/kevin-kuhn/web-course?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/kevin-kuhn/web-course?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#bricks-arquitetura">Arquitetura</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <a href="https://github.com/kevin-kuhn" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

Aplicação desenvolvida para servir como um um console/lista de estudos. Estudos separados em: vídeo, texto ou exercício.

## :sparkles: Features ##

- Lista de estudos
- Apresentação de um conteúdo completo
- Cada item da lista de estudos contém um identificador do seu tipo (vídeo, texto e exercício)
- Ao clicar em um item da lista de estudos o seu conteúdo relacionado é mostrado para o estudante
- É sinalizado na lista de estudos quando um conteúdo já foi consumido (respondido/assistido)
- Quando a página é carregada, a lista de estudos mantem a sinalização de quais conteúdos já foram consumidos (respondido/assistido)
- Um exercício tem a possibilidade de seleção de uma alternativa
- Após a seleção da alternativa o estudante pode "VER A CORREÇÃO"

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizandas neste projeto:

- [TypeScript](https://www.typescriptlang.org/)
	- Adiciona tipos ao projeto.
- [Next.js](https://nextjs.org/)
	- SSG e SSR. Performance e SEO.
- [SWR](https://swr.vercel.app/)
	- Controle e cacheamento de requisições.
- [Axios](https://axios-http.com/ptbr/docs/intro/)
	- Fetcher de requisições.
- [Jest](https://jestjs.io/pt-BR/)
	- Adiciona testes ao projeto.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
	- Testes de componentes React.
- [Isomorphic DOMPurify](https://www.npmjs.com/package/isomorphic-dompurify)
	- Segurança. Limpeza de strings HTML antes de serem renderizadas.

## :bricks: Arquitetura ##
    .
    ├── ...
    ├── src                    
    │   ├── components          		# Componentes gerais da aplicação
    │   	 ├── ...
    │   	 ├── layout
    │   	 	├── __tests__		# Testes específicos do componente
    │   	 	├── index.tsx		# Core do componente
    │   	 	└── styles.module.css	# Estilização em módulo do componente
    │   	 └── ...
    │   ├── contexts  
    │   	 ├── ClassContext		# Controle dos casos de uso gerais da aplicação
    │   ├── enums   			# Centralização de variáveis únicas da API
    │   ├── hooks   			# Casos de uso específicos de um, ou mais componentes
    │   ├── models   			# Contratos da API
    │   ├── pages   			# Páginas da aplicação
    │   ├── styles   			# Estilos globais da aplicação
    │   └── test                		# Configuração geral de testes
    └── ...

## :checkered_flag: Iniciando ##

```bash
# Clone esse projeto
$ git clone https://github.com/kevin-kuhn/web-course

# Acesse
$ cd web-course

# Instale as dependencias
$ yarn

# Inicie o projetoo
$ yarn dev

# O servidor irá inicializar em <http://localhost:3000>

# Inicie os testes do projeto
$ yarn test
```

Made with :heart: by <a href="https://github.com/kevin-kuhn" target="_blank">Kevin Kuhn</a>

&#xa0;

<a href="#top">Voltar ao topo</a>
