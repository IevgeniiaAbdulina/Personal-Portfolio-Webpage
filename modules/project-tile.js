// PROJECT TILE ELEMENT

const createProjectTile = (project) => {
    const projectTile = document.createElement('div');
    projectTile.classList = 'project-tile project';

    const tilePanel = document.createElement('div');
    tilePanel.className = 'tile-panel';

    const panelInner = document.createElement('div');
    panelInner.className = 'panel-inner';

    const panelFront = document.createElement('div');
    panelFront.className = 'panel-front';

    const projectImageLink = document.createElement('a');
    projectImageLink.href = project.pageView;
    projectImageLink.target = "_blank";
    projectImageLink.innerHTML = '<p class="visit">Visit page<span class="material-symbols-rounded">open_in_new</span></p>';

    const projectImage = document.createElement('img');
    projectImage.className = 'project-image';
    projectImage.setAttribute('src', project.imageLink);
    projectImage.setAttribute('alt', 'project image');

    const projectCodeLink = document.createElement('a');
    projectCodeLink.href = project.codeLink;
    projectCodeLink.target = "_blank";
    projectCodeLink.classList = 'project-link hover-item';
    projectCodeLink.innerHTML = `<p class="project-title">${project.title} [${project.languages}]</p>
        <span class="material-symbols-rounded">
            open_in_new
        </span>
        <span class="tooltip-text" id="bottom">View Code</span>`;

    projectImageLink.appendChild(projectImage);
    panelFront.append(
        projectImageLink,
        projectCodeLink
    );
    panelInner.appendChild(panelFront);
    tilePanel.appendChild(panelInner);
    projectTile.appendChild(tilePanel);

    return projectTile;
}

export { createProjectTile };