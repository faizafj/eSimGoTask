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
// function get_currency() {
//     currency = document.getElementById('currency_options')
//     selected_currency = currency.value
//     return selected_currency
// }

// function change_currency(event) {
//     currency = event.target.value
//     console.log(currency)
//     for (i = 0; i < bundle_options.length; i++) {
//         bundle_price = document.querySelector("bundle_price")
//         console.log(bundle_price.id)
//         if (bundle_price.id === "bundle_id_" + i){
//             if (currency === 'gbp') {
//                 bundle_price.innerText = `£${bundle_options[i].bundle_price}`
//                 bundles_details.appendChild(bundle_price)
//             }
//             else if (currency === 'eur') {
//                 bundle_price.innerText = `€${bundle_options[i].bundle_price + bundle_price * 0.17}`
//                 bundles_details.appendChild(bundle_price)
//             }
//         }
       
//     }
// }

//Iterates every eSIM object to format and display
function display_bundle_options() {

    bundles_container = document.getElementById('bundles_container')

    for (i = 0; i < bundle_options.length; i++) {

        //if eSIM bundle is recommended format and display banner
        if (bundle_options[i].recommended === true) {

            bundle_recommendation = document.createElement('button')
            bundle_recommendation.setAttribute("class", "bundle_recommendation")
            bundle_recommendation.innerText = "Recommended"
            bundle_recommendation.addEventListener("click", display_esim_selected, false)

            bundles_details = document.createElement('button')
            bundles_details.setAttribute("class", "recommended_bundles_details")
            bundles_details.setAttribute('id', "bundle_id_" + i)
            bundles_details.addEventListener("click", display_esim_selected, false)

            bundles_container.appendChild(bundle_recommendation)
            bundles_container.appendChild(bundle_recommendation)
            bundle_recommendation.appendChild(bundles_details)
        }
        else { // else display as normal
            bundles_details = document.createElement('button')
            bundles_details.setAttribute("class", "bundles_details")
            bundles_container.appendChild(bundles_details)
            bundles_details.setAttribute('id', "bundle_id_" + i)
            bundles_details.addEventListener("click", display_esim_selected, false)
        }

        bundle_size = document.createElement('h1')
        bundle_size.innerText = bundle_options[i].bundle_size
        bundle_size.setAttribute("class", "bundle_size")
        bundle_size.setAttribute('id', "bundle_id_" + i)
        bundles_details.appendChild(bundle_size)

        // bundle_size_image = document.createElement('i')
        // bundle_size_image.setAttribute("class", "material-symbols-outlined")
        // bundle_size_image.innerText="Database"
        // bundles_details.appendChild(bundle_size_image)

        // bundle_size = document.createElement('h1')
        // bundle_size.innerText = bundle_options[i].bundle_size
        // bundle_size.setAttribute("class", "bundle_size")
        // bundle_size.setAttribute('id', "bundle_id_" + i)
        // bundle_size_image.appendChild(bundle_size)



        bundle_price = document.createElement('h1')
        bundle_price.setAttribute("class", "bundle_price")
        bundle_price.setAttribute('id', "bundle_id_" + i)
        bundle_price.innerText = bundle_options[i].bundle_price
        bundles_details.appendChild(bundle_price)


        bundle_duration = document.createElement('p')
        bundle_duration.setAttribute("class", "bundle_duration")
        bundle_duration.setAttribute('id', "bundle_id_" + i)
        bundle_duration.innerText = bundle_options[i].duration
        bundles_details.appendChild(bundle_duration)

    }
}


//Takes the e-sim id from the button id, inorder to display bundle details
function display_esim_selected(event) {
    esim_id = event.target.id
    for (i = 0; i < bundle_options.length; i++) {
        if (bundle_options[i].bundle_id === esim_id) {
            current_selection_sim_details = document.getElementById('current_selection_sim_details')
            current_selection_sim_details.innerText = `${bundle_options[i].bundle_size}  ${bundle_options[i].duration}`
            current_selection_sim_details = document.getElementById('buy_now_button')
            current_selection_sim_details.innerText = `${bundle_options[i].bundle_price} - Buy Now`
            current_button = document.getElementById(esim_id)
            current_button.style.backgroundColor = "#F0F9FC"
        }
        else {
            other_button = document.getElementById(esim_id)
            other_button = document.getElementById("bundle_id_" + i)
            other_button.style.backgroundColor = "white"
        }
    }
}

display_bundle_options()