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

function toggleDiv(divId1, divId2, divId3) {
    var targetDiv1 = document.getElementById(divId1);
    var targetDiv2 = document.getElementById(divId2);
    var targetDiv3 = document.getElementById(divId3);

    if (targetDiv1.style.display === 'none' || targetDiv1.style.display === '') {
        targetDiv1.style.display = 'block';
        targetDiv2.style.display = 'none';
        targetDiv3.style.display = 'none';

    } else {
        targetDiv1.style.display = 'none';
        targetDiv2.style.display = 'block';
        targetDiv3.style.display = 'block';
    }
}


function toolTip(clicked) {

    var clickedImg = document.getElementById(clicked);
    clickedImg.style.display = (clickedImg.style.display === "block") ? "none" : "block";

    switch (clicked) {
        case "instaClick":
            fbClick.style.display = "none";
            linkClick.style.display = "none";
            birthClick.style.display = "none";
            break;
        case "fbClick":
            instaClick.style.display = "none";
            linkClick.style.display = "none";
            birthClick.style.display = "none";
            break;
        case "linkClick":
            instaClick.style.display = "none";
            fbClick.style.display = "none";
            birthClick.style.display = "none";
            break;
        case "birthClick":
            instaClick.style.display = "none";
            fbClick.style.display = "none";
            linkClick.style.display = "none";
            break;
            case "others":
            instaClick.style.display = "none";
            fbClick.style.display = "none";
            linkClick.style.display = "none";
            birthClick.style.display = "none";
            break;
    }


}
