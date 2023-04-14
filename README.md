<h1 align="center">ADA UI</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
![GitHub issues](https://img.shields.io/github/issues/protoxvga/ada_ui?color=emerald)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/protoxvga/ada_ui?color=emerald)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)

</div>

---

<p align="center">User Interface of the <a href="https://github.com/theohemmer/ada" target="_BLANK">Ada</a> original API created by <a href="https://github.com/theohemmer" target="_BLANK">Théo Hemmer</a></p>
<h3 align="center">⭐️</h3>
<p align="center">
If you like this project, do not hesitate to contribute and star it
</p>

## 📝 Table of Contents

- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [📝 Contribute](#-contribute-)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)

## 🧐 About <a name="about"></a>

For our end-of-school project at Epitech Nancy, we are required to regularly submit project log documents detailing our work through diagrams and user stories. We must also organize our team's work to move in a single direction.

Ada aims to simplify this process through the creation of user stories, changing their status (not started/in progress/completed), as well as scheduling appointments and automatically generating PLDs. Many features will be regularly added to Ada to evolve and become a project tracking tool for EIP projects.

The development of this tool was initiated by [Théo hemmer](https://github.com/theohemmer), and the creation of ada_ui was a natural next step.

## 🏁 Getting Started <a name="getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

First, you need to have a Ada instance running and operational. Please [check](https://github.com/theohemmer/ada) the Ada documentation to install your environment

### Installing

First thing first, you need to clone ada_ui project

```
git clone git@github.com:protoxvga/ada_ui.git
```

Install ada_ui dependencies

```
npm install
```

If you want to contribute and develop on ada UI you need a .env file
Create a .env file at the root of the repository with the following values

```
BASE_URL=YOUR_BASE_URL
```
ex.
```
BASE_URL=https://myserver.fr
```

Finally if you want to run the application:
```
npm run dev
```
And your application shoul run on [http://localhost:3000](http://localhost:3000)

To build ada in static for deployment:
```
npm run build
```

## 👨🏻‍💻 Contribute <a name="contribute"></a>

You can follow the contribution guidelines <a href="https://github.com/protoxvga/ada_ui/blob/production/CONTRIBUTE.md">here</a>

## ⛏️ Built Using <a name="built_using" ></a>

- [Mantine](https://mantine.dev/) - React component library
- [Redux toolkit](https://redux-toolkit.js.org/) - State manager
- [NextJS](https://nextjs.org/) - Web Framework
- [TypeScript](https://www.typescriptlang.org/) - Language

## ✍️ Authors <a name="authors"></a>

- [Pierre Perrin](https://github.com/protoxvga) - Idea & Initial work
- [Théo hemmer](https://github.com/theohemmer) - Ada idea and API

See also the list of [contributors](https://github.com/protoxvga/ada_ui/contributors) who participated in this project.
