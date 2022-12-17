module.exports = {
  description: 'application component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message:
        'Qual o nome do componente? Caso o mesmo possua mais de uma palavra, separe as pondo um espaço entre elas!'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.js',
      templateFile: './templates/component/index.js.hbs'
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
      templateFile: './templates/component/component.jsx.hbs'
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.jsx',
      templateFile: './templates/component/test.jsx.hbs'
    }
  ]
};
