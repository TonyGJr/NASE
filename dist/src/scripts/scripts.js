var projects = [
    {
        "name": "Claim Academy",
        "image" : "images/tony.jpg",
        "link": "http://claimacademystl.com"
    },
    {
        "name": "DexSphere"
    }
];
$(document).ready(function () {
    $.each(projects, function (index, project) {
        console.log(projects);
        $('#projects').append('<a herf="' + project.link + '" target="_blank"><img="'+ project.image +'"/>'+ project.name + '</a>');

    })
});
