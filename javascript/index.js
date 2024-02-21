const bundle_options = [
    {
        bundle_id: "1",
        bundle_size: "1GB",
        bundle_price: "$6.00",
        recommended: false,
        duration: "7 Day Bundle"

    }, {
        bundle_id: "2",
        bundle_size: "3GB",
        bundle_price: "$13.00",
        recommended: true,
        duration: "30 Day Bundle"

    }, {
        bundle_id: "5",
        bundle_size: "5GB",
        bundle_price: "$19.00",
        recommended: false,
        duration: "30 Day Bundle"

    }, {
        bundle_id: "4",
        bundle_size: "10GB",
        bundle_price: "$31.00",
        recommended: false,
        duration: "30 Day Bundle"

    }, {
        bundle_id: "5",
        bundle_size: "20GB",
        bundle_price: "$49.00",
        recommended: false,
        duration: "30 Day Bundle"
    }
]

//Iterates every eSIM object to format and display
function display_bundle_options() {

    bundles_container = document.getElementById('bundles_container')
    bundles_container.style.display = "grid"
    bundles_container.style.textAlign = "center"
    bundles_container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"
    bundles_container.style.color = "#008BD1"


    for (i = 0; i < bundle_options.length; i++) {

        //if eSIM bundle is recommended format and display banner
        if (bundle_options[i].recommended === true) {

            bundle_recommendation = document.createElement('p')
            bundle_recommendation.setAttribute("id", "bundle_recommendation")
            bundle_recommendation.innerText = "Recommended"
            bundles_details = document.createElement('article')
            bundles_details.setAttribute("id", "recommended_bundles_details")

            bundles_container.appendChild(bundles_details)
            bundles_container.appendChild(bundle_recommendation)
            bundle_recommendation.appendChild(bundles_details)
        }
        else {
            bundles_details = document.createElement('article')
            bundles_details.setAttribute("id", "bundles_details")
            bundles_container.appendChild(bundles_details)
        }

        bundle_size = document.createElement('h1')
        bundle_size.innerText = bundle_options[i].bundle_size
        bundle_size.setAttribute("id", "bundle_size")
        bundles_details.appendChild(bundle_size)

        bundle_price = document.createElement('h1')
        bundle_price.setAttribute("id", "bundle_price")
        bundle_price.innerText = bundle_options[i].bundle_price
        bundles_details.appendChild(bundle_price)


        bundle_duration = document.createElement('p')
        bundle_duration.setAttribute("id", "bundle_duration")
        bundle_duration.innerText = bundle_options[i].duration
        bundles_details.appendChild(bundle_duration)

    }
}
function get_currency(){
    currency = document.getElementById('currency_options')
    selected_currency = currency.value
    localStorage.setItem("currency",selected_currency)
    console.log(selected_currency)
}




display_bundle_options()