const fs = require("fs");
const path = require("path")

const templatesDirectory = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];

// filters for role and maps to associated render function
    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderMain(html.join(""));
};

// sets up templates for manager.html with manager object
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDirectory, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "ID", manager.getID());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

// sets up templates for engineer.html with engineer object
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDirectory, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "ID", engineer.getID());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

// sets up templates for intern.html with intern object
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDirectory, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "ID", intern.getID());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

// sets up templates for main.html with html array
const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDirectory, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

// replaces placeholders
const replacePlaceholders = (template, placeholder, value) => {
    const placeholderWord = new RegExp("{{ " + placeholder + " }}", "gm" );
    return template.replace(placeholderWord, value);
}

module.exports = render;
