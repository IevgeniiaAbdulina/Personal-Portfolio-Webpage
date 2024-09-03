// import data from "./data/projects.json" assert { type: "json" }; // ERROR!!!

// This is due to support for "import assertions" being removed from Node in favour of "import attributes", which are essentially the same thing except you have to use the keyword with instead of assert:
// https://stackoverflow.com/questions/78876691/syntaxerror-unexpected-identifier-assert-on-json-import-in-node-v22

import data from "./data/projects.json" with { type: "json" };
import { createProjectTile } from "./modules/project-tile.js";

document.body.onload = () => {
    const fragment = new DocumentFragment();
    // create a Project tiles
    const container = document.getElementById("projects-container");

    data.map((project) => {
        return fragment.append(createProjectTile(project));
    });

    container.append(fragment);
}