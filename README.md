# Resume

The primary goal of this project is to Make a Long term solution for my Blog contents and My promotion of videos and also a long term place where the resume content holds it self

## Installation

After cloning the repository go to the folder and run -

```bash
npm install
```

After Installing All the pakages run -

```
npm run host
```

# variables Thats need to be set

```
navigationData : {id: string , title: string} // Navbar.tsx (used in Navbar.tsx)

firstName : string  // Home.tsx (the contents of the banner)
```

where the title is the text that's renders on the navbar and the id is the id for the content tag
firstName is used in the Home.tsx file for the specific first name

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## License

[MIT](https://choosealicense.com/licenses/mit/)
