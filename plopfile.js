module.exports = plop => {
  plop.setHelper("date", function() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const fullYear = today.getFullYear();
    const currentTime = today.toLocaleTimeString();
    return (`${date}/${month}/${fullYear} ${currentTime}`);
  });

  plop.setGenerator("component", {
    description: "This is a ReactJS Component Scaffolding file",
    prompts: [
      {
        type: "input",
        name: "ComponentName",
        message: "What is the name of your Component"
      },
      {
        type: "list",
        name: "type",
        choices: ["functional", "class"],
        message: "Which Component do you want to create ?"
      },
      {
        type: "list",
        name: "folder",
        choices: ["styles", "components"],
        message: "Which folder does this component be in ?"
      },
      {
        type: "input",
        name: "ComponentAuthor",
        message: "Who is the Author of this Component"
      }
    ],
    actions: data => {
      debugger;
      let folderPath = data.folder === "styles" ? "./src/components/styles/{{pascalCase ComponentName}}" : "./src/components/components/{{pascalCase ComponentName}}";

      let actions = [
        {
          type: "add",
          path: folderPath + "/{{pascalCase ComponentName}}.scss",
          templateFile: "./template/component.scss.hbs"
        },
        {
          type: "add",
          path: folderPath + "/AUTHOR.md",
          templateFile: "./template/AUTHOR.hbs"
        },
        {
          type: "add",
          path: folderPath + "/data.yaml",
          templateFile: "./template/data.yaml.hbs"
        },
        {
          type: "add",
          path: folderPath + "/package.json",
          templateFile: "./template/package.json.hbs"
        }
      ];

      if (data.type === "functional") {
        actions.push({
          type: "add",
          path: folderPath + "/{{pascalCase ComponentName}}.jsx",
          templateFile: "./template/component-function.hbs"
        });
      } else {
        actions.push({
          type: "add",
          path: folderPath + "/{{pascalCase ComponentName}}.jsx",
          templateFile: "./template/component-class.hbs"
        });
      }
      return actions;
    }
  });
};
