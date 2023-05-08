import data from "./data/projects.json" assert { type: "json" };
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