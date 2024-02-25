const frequently_asked_questions = [
    {
        question_id: "question_id_0",
        question: "What devices are compatible with SIM?",
        answer: "The number of mobile devices that support eSIM is growing rapidly," +
            " so it's difficult to provide an exact number. However, as of 2021, a " +
            "large number of mobile devices from major manufacturers " +
            "such as Apple, Samsung, Google, and Microsoft support eSIM technology."

    },
    {
        question_id: "question_id_1",
        question: "When do I need to activate my SIM?",
        answer: "We recommend activating your eSIM when you travel, this way you can guarantee that your data bundle will not be started before you need it."
    },
    {
        question_id: "question_id_2",
        question: "Can I have multiple SIMs for travelling to different destinations?",
        answer: "You can top-up your existing eSIM with more bundles which will be queued up until you travel to the countries the bundle is valid for, allowing you travel between regions without switching your active eSIM."

    },
    {
        question_id: "question_id_3",
        question: "Can I top-up an existing SIM with more data?",
        answer: "You can top-up your existing eSIM with more bundles which will be queued up until you travel to the countries the bundle is valid for, allowing you travel between regions without switching your active eSIM."

    },
    {
        question_id: "question_id_4",
        question: "How do I monitor the data usage on an eSIM?",
        answer: "You can monitor your eSIMs status in your account. Simply sign up with the email address used to purchase and your eSIMs will be linked to your account."

    },
    {
        question_id: "question_id_5",
        question: "Will I be notified when my data is running low?",
        answer: "You can enable SMS and Email notifications for data usage per eSIM in your account's Notification Settings. This will inform you when you've used 50%, 80% and 100% of your current bundle's data."

    }, {
        question_id: "question_id_6",
        question: "How does my phone know to use the SIM over my plan's data?",
        answer: "You can select which SIM to enable/disable in your device's mobile data settings. Switching on Data Roaming on your eSIM but switching it off on your regular SIM will ensure it uses the eSIM when travelling.\n \nAlso ensure that your eSIM is set as the preferred SIM for Mobile data."

    }

]

//Iterates every question  to format and display
function display_questions() {

    questions_container = document.getElementById('frequently_asked_questions_grid_container')

    for (i = 0; i < frequently_asked_questions.length; i++) {

        //creates containers for the title and answer text to be placed in
        questions_title_container = document.createElement('article')
        questions_title_container.setAttribute('class', "questions_title_container")
        questions_answer_container = document.createElement('article')
        questions_answer_container.setAttribute('class', "questions_answer_container")


        //creating question and answer elements
        questions_title = document.createElement('p')
        questions_title.setAttribute('id', "question_id_" + i)
        questions_title.innerText = frequently_asked_questions[i].question
        questions_title.setAttribute('class', "questions_title")

        arrow_image = document.createElement('i')
        arrow_image.setAttribute("class", "fa-solid fa-chevron-down") //adds arrow to button
        arrow_image.style.fontSize =" 11px"
        
        var questions_answer = document.createElement('p')
        questions_answer.innerText = frequently_asked_questions[i].answer
        questions_answer.setAttribute('id', `question_id_${i}_answer`)
        questions_answer.setAttribute('class', "questions_answer")
        questions_answer.style.display="none"
        
        
        //appending answer and questions to their containers, and appending to main container 
        questions_title_container.appendChild(questions_title)
        questions_title.appendChild(arrow_image)
        questions_answer_container.appendChild(questions_answer)

        questions_container.appendChild(questions_title_container)
        questions_container.appendChild(questions_answer_container)

        questions_title_container.appendChild(questions_answer_container)

        //eventlistener function to display and hide answers
        questions_title_container.addEventListener("click", display_answer);
        questions_title_container.style.userSelect="none" //Prevents users from copying/highlighting text

    }
    //Adds the View More FAQs link
    view_more_link_container = document.createElement('article')
    view_more_link_container.setAttribute('id', "view_more_link_container")
    view_more_link = document.createElement('a')
    view_more_link.setAttribute('href', "#")
    view_more_link.setAttribute('id', "view_more_link")
    view_more_link.innerText = 'View More FAQs'


    questions_container.appendChild(view_more_link_container)
    view_more_link_container.appendChild(view_more_link)


}


//A function to display the answers when a question is clicked, else it hides the answer.
function display_answer(event) {
    var question_id = event.target.id
    console.log(question_id)

    answer_question_id = question_id+"_answer"
    console.log(answer_question_id)
    
    for (i = 0; i < frequently_asked_questions.length; i++) {
        
        if (frequently_asked_questions[i].question_id+"_answer" === answer_question_id) {
            questions = document.getElementById(`${answer_question_id}`)

            if (questions.style.display === "none"){
                questions.style.display="block" //Display questions
            }else{
            questions.style.display = "none" //Hide question
            }
        }
    }
}

display_questions()
