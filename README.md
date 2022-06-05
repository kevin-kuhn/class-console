<div align="center" id="top"> 

  <a href="https://class-console.vercel.app/aula/1/">Demo</a>
</div>

<h1 align="center">Class Console</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/kevin-kuhn/web-course?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/kevin-kuhn/web-course?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/kevin-kuhn/web-course?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-stack">Stack</a> &#xa0; | &#xa0;
  <a href="#bricks-architecture">Architecture</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/kevin-kuhn" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Application developed to serve as a console/study list. Separate studies in: video, text or exercise.

## :sparkles: Features ##

- List of studies
- Presentation of a complete content (each study)
- Each study list item contains an identifier of its type (video, text and exercise)
- When clicking on an item in the study list its related content is shown to the student
- It is flagged in the list of studies when a content has already been consumed (answered/watched)
- When the page is loaded, the list of studies keeps track of which content has already been consumed (answered/watched)
- An exercise has the possibility of selecting an alternative
- After selecting the alternative, the student can "SEE THE CORRECTION"

## :rocket: Stack ##

The following stacks were used in this project:

- [TypeScript](https://www.typescriptlang.org/)
	- Adds types to the project.
- [Next.js](https://nextjs.org/)
	- SSG e SSR. Performance e SEO.
- [SWR](https://swr.vercel.app/)
	- Control and caching of requests.
- [Axios](https://axios-http.com/ptbr/docs/intro/)
	- Fetcher.
- [Jest](https://jestjs.io/pt-BR/)
	- Adds tests to the project.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
	- React components texts.
- [Isomorphic DOMPurify](https://www.npmjs.com/package/isomorphic-dompurify)
	- Safety. Cleaning up HTML strings before being rendered.

## :bricks: Architecture ##
    .
    ├── ...
    ├── src                    
    │   ├── components          		# General application components
    │   	 ├── ...
    │   	 ├── layout
    │   	 	├── __tests__		# Component-specific tests
    │   	 	├── index.tsx		# Component core
    │   	 	└── styles.module.css	# Component in module style
    │   	 └── ...
    │   ├── contexts  
    │   	 ├── ClassContext		# Use cases of application
    │   ├── enums   			# Centralization of unique API variables
    │   ├── hooks   			# Specific use cases of one or more components
    │   ├── models   			# API contracts
    │   ├── pages   			# Application pages
    │   ├── styles   			# Global styles
    │   └── test                		# General tests configurations
    └── ...

## :checkered_flag: Starting ##

```bash
# Clone this repo
$ git clone https://github.com/kevin-kuhn/web-course

# Access
$ cd web-course

# Install deps
$ yarn

# Start application
$ yarn dev

# The server will run in <http://localhost:3000>

# Start project tests
$ yarn test
```

Made with :heart: by <a href="https://github.com/kevin-kuhn" target="_blank">Kevin Kuhn</a>

&#xa0;

<a href="#top">Back to top</a>
