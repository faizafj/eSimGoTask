const bundle_options = [
    {
        bundle_id: "bundle_id_0",
        bundle_size: "1GB",
        bundle_price: "£6.00",
        recommended: false,
        duration: "7 Day Bundle"

    }, {
        bundle_id: "bundle_id_1",
        bundle_size: "3GB",
        bundle_price: "£13.00",
        recommended: true,
        duration: "30 Day Bundle"

    }, {
        bundle_id: "bundle_id_2",
        bundle_size: "5GB",
        bundle_price: "£19.00",
        recommended: false,
        duration: "30 Day Bundle"

    }, {
        bundle_id: "bundle_id_3",
        bundle_size: "10GB",
        bundle_price: "£31.00",
        recommended: false,
        duration: "30 Day Bundle"

    }, {
        bundle_id: "bundle_id_4",
        bundle_size: "20GB",
        bundle_price: "£49.00",
        recommended: false,
        duration: "30 Day Bundle"
    }
]


function change_currency(event) {
    var currency = event.target.value //gets the currency user has requested

    //used for changing inner text of the button displaying current option
    if (currency === "eur"){
        currency = "EUR € "
    } else if (currency === "usd"){
        currency = "USD $ "
    }else if (currency === "gbp"){
        currency = "GBP £ "
    }else if (currency === "aud"){
        currency = "AUD $ "
    }
    var currency_navigation_button = document.getElementsByClassName('currency_navigation_link_button')
    var currency_change = currency_navigation_button[0];
    arrow_image = document.createElement('i')
    arrow_image.setAttribute("class", "fa fa-caret-down") //adds arrow to button
    arrow_image.style.fontSize =" 11px"
    currency_change.innerText = currency
    currency_change.appendChild(arrow_image)

}

//Iterates every eSIM object to format and display
function display_bundle_options() {

    var bundles_container = document.getElementById('bundles_container')

    for (i = 0; i < bundle_options.length; i++) {

        //if eSIM bundle is recommended format and display banner
        if (bundle_options[i].recommended === true) {

            var bundle_recommendation = document.createElement('button')
            bundle_recommendation.setAttribute("class", "bundle_recommendation")
            bundle_recommendation.innerText = "Recommended"
            bundle_recommendation.addEventListener("click", display_esim_selected, false)

            var bundles_details = document.createElement('button')
            bundles_details.setAttribute("class", "recommended_bundles_details")
            bundles_details.setAttribute('id', "bundle_id_" + i)
            bundles_details.addEventListener("click", display_esim_selected, false)

            bundles_container.appendChild(bundle_recommendation)
            bundles_container.appendChild(bundle_recommendation)
            bundle_recommendation.appendChild(bundles_details)
        }
        else { // else display as normal
            var bundles_details = document.createElement('button')
            bundles_details.setAttribute("class", "bundles_details")
            bundles_container.appendChild(bundles_details)
            bundles_details.setAttribute('id', "bundle_id_" + i)
            bundles_details.addEventListener("click", display_esim_selected, false)
        }


        var bundle_size_container = document.createElement('article')
        bundles_details.appendChild(bundle_size_container)
        bundle_size_container.setAttribute("id", "bundle_size_container")
        var bundle_size_image = document.createElement('i')
        bundle_size_image.setAttribute("class", "fas fa-database")
        bundles_details.appendChild(bundle_size_image)

        var bundle_size = document.createElement('h1')
        bundle_size.innerText = bundle_options[i].bundle_size
        bundle_size.setAttribute("class", "bundle_size")
        bundle_size.setAttribute('id', "bundle_id_" + i)
        bundle_size_container.appendChild(bundle_size_image)
        bundle_size_container.appendChild(bundle_size)




        var bundle_price = document.createElement('h1')
        bundle_price.setAttribute("class", "bundle_price")
        bundle_price.setAttribute('id', "bundle_id_" + i)
        bundle_price.innerText = bundle_options[i].bundle_price
        bundles_details.appendChild(bundle_price)


        var bundle_duration = document.createElement('p')
        bundle_duration.setAttribute("class", "bundle_duration")
        bundle_duration.setAttribute('id', "bundle_id_" + i)
        bundle_duration.innerText = bundle_options[i].duration
        bundles_details.appendChild(bundle_duration)

    }
}


//Takes the e-sim id from the button id, inorder to display bundle details
function display_esim_selected(event) {
    var esim_id = event.target.id
    for (i = 0; i < bundle_options.length; i++) {
        if (bundle_options[i].bundle_id === esim_id) {
            var current_selection_sim_details = document.getElementById('current_selection_sim_details')
            current_selection_sim_details.innerText = `${bundle_options[i].bundle_size}  ${bundle_options[i].duration}`
            var current_selection_sim_details = document.getElementById('buy_now_button')
            current_selection_sim_details.innerText = `${bundle_options[i].bundle_price} - Buy Now`
            var current_button = document.getElementById(esim_id)
            current_button.style.backgroundColor = "#F0F9FC"
            current_button.style.border = "solid 1px #008BD1"
        }
        else {
            other_button = document.getElementById("bundle_id_" + i)
            other_button.style.backgroundColor = "white"
            other_button.style.border = "solid 0.5px #008BD1"
        }
    }
}

display_bundle_options()