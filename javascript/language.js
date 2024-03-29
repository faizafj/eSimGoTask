function change_language(event) {
    var language = event.target.value //gets the currency user has requested

    //used for changing inner text of the button displaying current option
    if (language === "English") {
        language = "English"
    } else if (language === "French") {
        language = "Français"
    } else if (language === "Spanish") {
        language = "Español"
    } else if (language === "German") {
        language = "Deutsch "
    }
    var language_navigation_button = document.getElementsByClassName('language_navigation_link_button')
    var mobile_language_change = language_navigation_button[0];
    var desktop_language_change = language_navigation_button[1];
    arrow_image = document.createElement('i')
    arrow_image.setAttribute("class", "fa fa-caret-down") //adds arrow to button
    arrow_image.style.fontSize = " 11px"

    // Desktop mobile changes
    desktop_language_change.innerText = language
    desktop_language_change.appendChild(arrow_image)

    // Mobile language changes
    mobile_language_change.innerText = language
    mobile_language_change.appendChild(arrow_image)
}