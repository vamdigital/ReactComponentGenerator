module.exports = plop => {
  plop.setHelper('date', function() {
    let dateObj;
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const fullYear = today.getFullYear();
    const currentTime = today.toLocaleTimeString();
    return dateObj = `${date}/${month}/${fullYear} ${currentTime}`;
  });

  plop.setPartial('today', '{{date}}');

  plop.setGenerator ('component', {
    description: 'This is a ReactJS Component Scaffolding file',
    prompts: [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of your Component'
      },
      {
        type: 'list',
        name: 'type',
        choices: ['functional', 'class'],
        message: 'Which Component do you want to create ?'
      },
      {
        type: 'input',
        name: 'ComponentAuthor',
        message: 'Who is the Author of this Component'
      }
    ],
    actions: data => {
      let actions = [
        {
          type: 'add',
          path: './src/components/{{pascalCase ComponentName}}/{{pascalCase ComponentName}}.scss',
          templateFile: './template/component.scss.hbs'
        },
        {
          type: 'add',
          path: './src/components/{{pascalCase ComponentName}}/AUTHOR.md',
          templateFile: './template/AUTHOR.hbs'
        },
        {
          type: 'add',
          path: './src/components/{{pascalCase ComponentName}}/data.yaml',
          templateFile: './template/data.yaml.hbs'
        },
        {
          type: 'add',
          path: './src/components/{{pascalCase ComponentName}}/package.json',
          templateFile:'./template/package.json.hbs'
        }
      ];

      if(data.type === 'functional') {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase ComponentName}}/{{pascalCase ComponentName}}.jsx',
          templateFile: './template/component-function.hbs'
        })
      } else {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase ComponentName}}/{{pascalCase ComponentName}}.jsx',
          templateFile: './template/component-class.hbs'
        })
      }
      return actions
    },
  })
}