function showOnly2DProjects() {
    const projects2dDiv = document.getElementById("projects-2d");
    const projects3dDiv = document.getElementById("projects-3d");
    const projects2dToggleLabel = document.getElementById("toggle-label-2d");
    const projects3dToggleLabel = document.getElementById("toggle-label-3d");

    projects2dDiv.style.display = "block";
    projects2dToggleLabel.style.color = "var(--clr-dark)";
    projects2dToggleLabel.style.backgroundColor = "var(--clr-2d)";

    projects3dDiv.style.display = "none";
    projects3dToggleLabel.style.color = "var(--clr-grayed-out)";
    projects3dToggleLabel.style.backgroundColor = "var(--clr-dark)";
}

function showOnly3DProjects() {
    const projects2dDiv = document.getElementById("projects-2d");
    const projects3dDiv = document.getElementById("projects-3d");
    const projects2dToggleLabel = document.getElementById("toggle-label-2d");
    const projects3dToggleLabel = document.getElementById("toggle-label-3d");

    projects3dDiv.style.display = "block";
    projects3dToggleLabel.style.color = "var(--clr-dark)";
    projects3dToggleLabel.style.backgroundColor = "var(--clr-3d)";

    projects2dDiv.style.display = "none";
    projects2dToggleLabel.style.color = "var(--clr-grayed-out)";
    projects2dToggleLabel.style.backgroundColor = "var(--clr-dark)";
}

function toggleProjects2D3D() {
    const projectsToggle = document.getElementById("projects-toggle")
    
    if (projectsToggle.checked === true)
    {
        showOnly3DProjects();
    }
    else
    {
        showOnly2DProjects();
    }
}