function change_currency(event) {
    var currency_selected = event.target.value //gets the currency user has requested

    //used for changing inner text of the button displaying current option
    if (currency_selected === "eur") {
        currency = "EUR € "
        localStorage.setItem('currency', '€')
    } else if (currency_selected === "usd") {
        currency = "USD $ "
        localStorage.setItem('currency', '$')
    } else if (currency_selected === "gbp") {
        localStorage.setItem('currency', '£')
        currency = "GBP £ "
    } else if (currency_selected === "aud") {
        localStorage.setItem('currency', '$')
        currency = "AUD $ "
    }
    var currency_navigation_button = document.getElementsByClassName('currency_navigation_link_button')
    var currency_change = currency_navigation_button[0];
    arrow_image = document.createElement('i')
    arrow_image.setAttribute("class", "fa fa-caret-down") //adds arrow to button
    arrow_image.style.fontSize = " 11px"
    currency_change.innerText = currency
    currency_change.appendChild(arrow_image)



    for (i = 0; i < bundle_options.length; i++) {
        var price_text = document.getElementsByClassName('bundle_price')
        var price_text_to_change = price_text[i];
        price = bundle_options[i].bundle_price
        console.log(price)
        if (currency_selected === "eur") {
            price = price + 1
            new_price = price.toFixed(2)
            price_text_to_change.innerText = (`€${new_price}`)
        } else if (currency_selected === "usd") {
            price = price + 3
            new_price = price.toFixed(2)
            price_text_to_change.innerText = (`$${new_price}`)
        } else if (currency_selected === "gbp") {
            price = price
            new_price = price.toFixed(2)
            price_text_to_change.innerText = (`£${new_price}`)
        } else if (currency_selected === "aud") {
            price = price + 1
            new_price = price.toFixed(2)
            price_text_to_change.innerText = (`$${new_price}`)
        }
    }
}
