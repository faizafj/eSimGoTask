
## How to set up and use the website.

### Set Up:
To set up this website, you need to open the index.html file using your browser.
1. One method of doing this is opening the source code folder, and find the index.html file. 
2. Right click on the index.html file.
3. Find the option on open with 
4. Select your browser
5. You may also double click on the index.html file and it might open it in the browser for you, however in the case that this does not work follow the above steps.


### Using this website:
This website closely follows the designs of the UI wireframe provided. 

#### Selecting a bundle:
 - To select a bundle, scroll down to the bundle options section.
 - Press the bundle you would like.
 - The footer below should update the pricing, duration and size.
 - There is a buy now button on the footer too. This should allow you to proceed with purchashing if clicked. (Not implemented)

#### Reading Frequently Asked Questions:
- To view and read the frequently asked questions, scoll down to the Frequently Asked Questions section. 
 - Press on any question title you would like to read.
 - This should then expand with an answer below.
 - To close it, simply click on the question title again. 
 - You may open as many questions as required at once.

#### Changing the language (Desktop):
- To change the language simply scroll to the top navigation bar.
- On the left, you will see a button which says 'English'.
- Click or hover on this to view the language options.
- A drop down will appear with the language options available.
- Click on any langage you like.
- The text on the button will change to the language selected.
- The website language would also change but this has not been implemented.

#### Changing the currency (Desktop):
- To change the currency simply scroll to the top navigation bar.
- On the left, you may see a button which says 'GBP £'.
- Click or hover on this to view the currency options.
- A drop down will appear with the currency options available.
- Click on any currency you like.
- The text on the button will change to the currency selected.
- The website currency will also change and will update all bundle option prices.
(Upon refreshing the website the pricing defaults back to GBP £)


#### Viewing menu options (Mobile):
- To view mobile options click on the three lines on the left (next to the eSIM logo)
- From there a blue navigation menu should appear with all options displayed.
- To change the language select the  button which says 'English' and follow the 'Changing the language (Desktop)' steps.
- To change the currency select the  button which says 'GBP £' and follow the 'Changing the currency (Desktop)' steps.
- To close the menu bar, press the 'X' situated on the top right.
- This should now return you back to the webpage. 



## Design Choices
The following design choices were made to the system in order to enhance code maintainability and readability and with the users experience in mind.

 
### Using JavaScript to display website data. 
I used JavaScript and DOM objects in order to display elements of the website including eSIM data bundles and the Frequently Asked Questions. This was chosen over displaying and writing the data within the HTML file.

The primary reason for doing this was it allowed the data to be more maintainable. If you're wanting to add new eSIM bundle, it would be a lot easier to do as it only requires for a new object to be created within the bundle_options list and the functions and styling can handle formatting. 

Another enhancement that using JavaScript allows, is the functions such as display_bundle_options can interact and create elements a lot more dynamically. Each DOM created element, has a unique id created within the DOM to allow us to distinguish which elements have been selected. Using this method ommits the need to hand-code each element id, ensuring that they are both unique and referring to the correct elements, which were required for the display_esim_selected function. 


 ## HTML Styling choices:
 For many of the elements a grid or flex display was used to control the way the elements behaved whilst being resized. This also allowed me to constrain the positioning of elements and ensure they were aligned correctly. (E.g in the center vertically and horizontally)
 


## Future plans:
Due to time constraints, some features which I had wanted to implement were not added to the website and some minor issues could not be fixed. 

Features to add:
- Creating a two column layout within the frequently asked questions section. Most of eSIM Go's website use two columns to display the questions. This prevents the question on the side of one that is selected from also explanding underneath. 


Issues to fix:
- Currency changing on refresh: An issue with changing the currency is upon refreshing the webpage, the currency reverts back to GBP. To fix this I would like to use local storage and use an event listner to check for when the website is refreshed. When this happens the currency should be updated to the one the user selected. 

