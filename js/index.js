function showOnly2DProjects() {
    const projects2dDiv = document.getElementById("projects-2d");
    const projects3dDiv = document.getElementById("projects-3d");

    projects2dDiv.style.display = "block"
    projects3dDiv.style.display = "none";
}

function showOnly3DProjects() {
    const projects2dDiv = document.getElementById("projects-2d");
    const projects3dDiv = document.getElementById("projects-3d");

    projects3dDiv.style.display = "block"
    projects2dDiv.style.display = "none";
}