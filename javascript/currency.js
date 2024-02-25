function change_currency(event) {
    var currency_selected = event.target.value //gets the currency user has requested
    //used for changing inner text of the button displaying current option
    if (currency_selected === "eur") {
        var currency = "EUR € "
        localStorage.setItem('currency', '€')
    } else if (currency_selected === "usd") {
        var currency = "USD $ "
        localStorage.setItem('currency', '$')
    } else if (currency_selected === "gbp") {
        localStorage.setItem('currency', '£')
        var currency = "GBP £ "
    } else if (currency_selected === "aud") {
        localStorage.setItem('currency', '$')
        var currency = "AUD $ "
    }

    //Changes value of the currency drop down to be new currency 
    var currency_navigation_button = document.getElementsByClassName('currency_navigation_link_button')
    var currency_change_desktop = currency_navigation_button[1];
    var currency_change_mobile = currency_navigation_button[0];
    arrow_image = document.createElement('i')
    arrow_image.setAttribute("class", "fa fa-caret-down") //adds arrow to button
    arrow_image.style.fontSize = " 11px"

    //Desktop currency changes
    currency_change_desktop.innerText = currency
    currency_change_desktop.appendChild(arrow_image)

    // Mobile currency changes
    currency_change_mobile.innerText = currency
    currency_change_mobile.appendChild(arrow_image)


    // Updates currency and pricing for each bundle.
    for (i = 0; i < bundle_options.length; i++) {
        var price_text = document.getElementsByClassName('bundle_price')
        var price_text_to_change = price_text[i];
        var price = bundle_options[i].bundle_price
        if (currency_selected === "eur") {
            var euros_per_pound = price * 0.17
            price = price + euros_per_pound
            var new_price = price.toFixed(2)

            price_text_to_change.innerText = (`€${new_price}`)
        } else if (currency_selected === "usd") {
            var usd_per_pound = price * 0.27
            price = price + usd_per_pound
            new_price = price.toFixed(2)
            price_text_to_change.innerText = (`$${new_price}`)
        } else if (currency_selected === "gbp") {
            price = price
            new_price = price.toFixed(2)
            price_text_to_change.innerText = (`£${new_price}`)
        } else if (currency_selected === "aud") {
            var aud_per_pound = price * 0.93
            price = price + aud_per_pound
            new_price = price.toFixed(2)
            price_text_to_change.innerText = (`$${new_price}`)
        }
    }
    //Selects the first bundle as a default
    select_first_bundle()
}

