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
        choices: ["Presentational", "Container"],
        message: "What type of Component do you want to create ?"
      },
      {
        type: "input",
        name: "ComponentAuthor",
        message: "Who is the Author of this Component"
      }
    ],
    actions: data => {
      let folderPath = data.type === "Presentational" ? "./src/components/presentational/{{pascalCase ComponentName}}" : "./src/components/container/{{pascalCase ComponentName}}";

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

      if (data.type === "Presentational") {
        actions.push({
          type: "add",
          path: folderPath + "/index.jsx",
          templateFile: "./template/presentational-component.hbs"
        });
        actions.push({
          type: "add",
          path: folderPath +"/{{pascalCase ComponentName}}.spec.jsx",
          templateFile: "./template/presentational-component.spec.hbs"
        });
      } else {
        actions.push({
          type: "add",
          path: folderPath + "/index.jsx",
          templateFile: "./template/container-component.hbs"
        });
        actions.push({
          type: "add",
          path: folderPath +"/{{pascalCase ComponentName}}.spec.jsx",
          templateFile: "./template/container-component.spec.hbs"
        });
      }
      return actions;
    }
  });
};
