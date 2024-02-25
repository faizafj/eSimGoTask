




## Design Choices
The following design choices were made to the system in order to enhance code maintainability and readability and with the users experience in mind.

 
### Using JavaScript to display website data. 
I used JavaScript and DOM objects in order to display elements of the website including eSIM data bundles and the Frequently Asked Questions. This was chosen over displaying and writing the data within the HTML file.

The primary reason for doing this was it allowed the data to be more maintainable. If you're wanting to add new eSIM bundle, it would be a lot easier to do as it only requires for a new object to be created within the bundle_options list and the functions and styling can handle formatting. 

Another enhancement that using JavaScript allows, is the functions such as display_bundle_options can interact and create elements a lot more dynamically. Each DOM created element, has a unique id created within the DOM to allow us to distinguish which elements have been selected. Using this method ommits the need to hand-code each element id, ensuring that they are both unique and referring to the correct elements, which were required for the display_esim_selected function. 



## HTML Styling choices:
 

## Future plans:
Due to time constraints, some features which I had wanted to implement were not added to the website. Those features were:


