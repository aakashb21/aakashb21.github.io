var openProjectId = null;

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var projectBox = content.parentElement;

    if (openProjectId !== null && openProjectId !== contentId) {
        var openContent = document.getElementById(openProjectId);
        var openProjectBox = openContent.parentElement;
        openProjectBox.classList.remove('open');
    }

    if (projectBox.classList.contains('open')) {
        projectBox.classList.remove('open');
        openProjectId = null;
    } else {
        projectBox.classList.add('open');
        openProjectId = contentId;
    }
}

fetch('profile-content.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('profile-content').innerHTML = html;
    });

fetch('project-content.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('project-content').innerHTML = html;
    });

fetch('about-me-content.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('about-me-content').innerHTML = html;
    });


fetch('career-content.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('career-content').innerHTML = html;
    });

fetch('career-goals-content.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('career-goals-content').innerHTML = html;
    });