module.exports = {
  description: 'application hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message:
        'Qual o nome do hook? Caso o mesmo possua mais de uma palavra, separe as pondo um espaço entre elas!'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/index.js',
      templateFile: './templates/hook/index.js.hbs'
    },
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/{{camelCase name}}.js',
      templateFile: './templates/hook/hook.js.hbs'
    },
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/{{camelCase name}}.test.js',
      templateFile: './templates/hook/test.js.hbs'
    }
  ]
};
