// kiedy obrazek klikniety
function show_image(path)
{
    var plik = "<img src=" + path + ">";

    const body = document.querySelector("body");
    const background = document.createElement("div");
    const show_image = document.createElement("div");
    const remove_button = document.createElement("button");

    // dodaj id's
    show_image.setAttribute("id", "show-image");
    background.setAttribute("id", "show-image-background");
    remove_button.setAttribute("id", "remove-button");
    remove_button.setAttribute("onclick", "remove_image()");
    // dodaj content
    show_image.innerHTML = plik;
    remove_button.innerHTML = 'x';
    // dodaj do strony
    body.appendChild(show_image);
    body.appendChild(background);

    // dodaj przycisk
    body.appendChild(remove_button);
}
// kiedy X klikniety
function remove_image() 
{
    // uchwyc
    const body = document.querySelector("body");
    const background = document.getElementById("show-image");
    const show_image = document.getElementById("show-image-background");
    const remove_button = document.getElementById("remove-button");

    // usun
    body.removeChild(show_image);
    body.removeChild(background);
    body.removeChild(remove_button);
}