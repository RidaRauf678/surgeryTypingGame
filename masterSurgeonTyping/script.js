//create a constant to hold the maximum number of surgeries
const MAX_NUMBER_OF_SURGERIES = 6;
//create a constant to hold the minimum number of surgeries
const MIN_NUMBER_OF_SURGERIES = 0;
//create a constant to hold the number of paragraphs
const NUMBER_OF_PARAGRAPHS = 20;

//array to store paragraphs
let paragraphs = new Array(NUMBER_OF_PARAGRAPHS);
//array to store surgery names
let surgeryName = new Array(MAX_NUMBER_OF_SURGERIES);
//array to store surgery images
let surgeryImage = new Array(MAX_NUMBER_OF_SURGERIES);
//array to store surgery times
let surgeryTime = new Array(MAX_NUMBER_OF_SURGERIES);
//array to store surgery's minimum difficulty
let surgeryDiffMin = new Array(MAX_NUMBER_OF_SURGERIES);
//array to store surgery's maximum difficulty
let surgeryDiffMax = new Array(MAX_NUMBER_OF_SURGERIES);

//get the image element from HTML
let imageElement = document.getElementById('image');
//get the name element from HTML
let nameElement = document.getElementById('name');
//get the paragraph element from HTML
let paragraphElement = document.getElementById('remaining');
//get the typed element from HTML
let typedElement = document.getElementById('typed');
//get the score element from HTML
let scoreElement = document.getElementById('score');
//get the winning/losing message element from HTML
let messageElement = document.getElementById('message');

//store the index of the surgery that the function chooses
let surgeryIndex;
//store the index of the paragraph that the function chooses
let paragraphIndex;

//store the paragraph that will be typed
let paragraph;

//store what the user has typed already
let typed;

//store the number of completed surgeries the user has done
//0 at the start
let done = 0;

//declare a variable to hold the countdown time
let countdown = 60; 
//variable that holds the interval and clears it eventually
let timer;

//call the setupGame function when the file is loaded
setupGame();

//sets up the arrays, decides on a surgery and paragraph, sets interval and countdown
function setupGame(){
    //paragraph array to hold the different texts the user can type in
    //paragraphs' index 0-2 - for the X-Ray
    paragraphs[0] = 'Solid things like your bones will show up white while squishy materials like your muscles will look gray. ';
    paragraphs[1] = 'Sometimes doctors need to look at your bones, teeth, lungs, or stomach to find what hurts and why it hurts so they can help you feel better. ';
    paragraphs[2] = 'When a doctor needs to see something inside of your body, they might use an X-ray exam to take pictures of the inside of you from the outside of you. ';
    
    //paragraphs' index 3-5 - for the liver transplant
    paragraphs[3] = 'Transplants are done when a child\'s liver does not work well and he or she won\'t survive without a new one. Doctors only recommend a liver transplant after they have tried all other treatments to save the liver. ';
    paragraphs[4] = 'Most organ donors are adults and children who have agreed (or their guardians have agreed) to donate their organs after they die. If a child doesn\'t need an entire new liver, a living person, can donate part of a liver. ';
    paragraphs[5] = 'This is called a "living-related donor transplant." A person who donates part of his or her liver can have a normal-sized liver again within just a few months of donating the tissue because livers grow new cells on their own. ';

    //paragraphs' index 6-8 - for the kidney transplant
    paragraphs[6] = 'Half of children who have received transplants still have a functioning kidney graft 14 years after transplantation. Unfortunately, this means that the other half have returned to dialysis and require a second transplant during childhood or adolescence. ';
    paragraphs[7] = 'Because people can survive with just one kidney, a living person can give a healthy kidney to someone with kidney failure. This is called being a donor. A kidney also can come from a donor who has recently died, but the wait for this kind of donated kidney can take a year or more. ';
    paragraphs[8] = 'Kidneys are vital organs that filter blood to remove waste, extra fluid, and salt from the body. Someone with kidney failure must go on dialysis or get a kidney transplant. A kidney transplant is an operation where doctors put a new kidney in the body of someone whose own kidneys no longer work. ';

    //paragraphs' index 9-12 - for the lung transplant
    paragraphs[9] = 'Other serious complications can arise from the drugs used to prevent rejection. These are called "immunosuppressants." They work by lowering your immune response, making it less likely that your body will attack the new "foreign" lung. ';
    paragraphs[10] = 'After the surgery you may be taken to a recovery room. You will then be taken to the intensive care unit (ICU). This is a ward in a hospital where you will be watched closely. You will be in the ICU for several days. You will be in the hospital 7 to 14 days or longer. ';
    paragraphs[11] = 'Keep your packed hospital bag handy - including an extra 24-hour supply of your medications - and arrange transportation to the transplant center in advance. You may be expected to arrive at the hospital within just a few hours. Once you arrive at the hospital, you will undergo tests to make sure the lung is a good match and that you are healthy enough to have the surgery. ';
    paragraphs[12] = 'Exercise is an extremely important part of rehabilitation after your lung transplant and will begin within days of your surgery. Your health care team will likely work with you to design an exercise program that\'s right for you. Your doctor may recommend pulmonary rehabilitation - a program of exercise and education that may help improve your breathing and daily functioning - after your transplant. ';
    
    //paragraphs' index 13-15 - for the cornea transplant
    paragraphs[13] = 'Each year, millions of people around the world have their lives transformed through cornea donation and transplantation. In 2019, 85,601 corneas were provided for transplant with a more than 95 percent success rate, providing $6 billion in lifetime economic benefit for the recipients. In 2019, there were 68,759 U.S. donors of ocular tissue. ';
    paragraphs[14] = '"That doesn\'t mean that it\'s impossible, but it does demonstrate that the cornea doesn\'t support growth of the coronavirus," Miner said, which suggests the "cornea is less likely to be a route of entry for the virus." While it\'s possible the coronavirus can infect other eye tissues, such as the tear ducts or lining of the eyelids, Washington University ophthalmologist and co-author Dr. Rajendra Apte said it\'s encouraging that the cornea appears to be somewhat resistant to the virus. ';
    paragraphs[15] = ' In only 17.9% of cases was the family aware of the potential donor\'s last will. In 77.7% of these cases, the patient wished to donate. Procurement rate was 71.5%. This acceptance was mostly facilitated by the awareness and motivation of the hospital staff, the experience of the physician, and the 13.3-h period of time allowed after the donor\'s death. The commitment on the part of the ophthalmologist to carry out optimal anatomical restoration was a very important point for 32% of families who accepted donation. ';
    
    //paragraphs' index 16-19 - for the heart transplant
    paragraphs[16] = 'Since the performance of the first human heart transplant in 1967, heart transplantation has changed from an experimental operation to an established treatment for advanced heart disease. Like other organ transplantations, the number of heart transplantations in the U.S. is on the rise. In 2019, 3,552 were performed, up from 3,408 in 2018. An estimated 2,000 donor hearts become available in the United States each year. Yet, approximately 3,000 people are on a heart transplant waiting list at any given time, according to the University of Michigan. ';
    paragraphs[17] = 'Transplants are done when a child\'s heart does not work well and he or she won\'t survive without a new one. Doctors sometimes call this heart failure, or end-stage pediatric heart disease. They usually first try to treat heart failure with medicine, surgery, or other procedures. If those don\'t work, a child might need a heart transplant. Transplanted hearts come from organ donors who have agreed (or their guardians have agreed) to donate their organs when they die. They choose to donate the organs because they want to help someone else who is sick. ';
    paragraphs[18] = 'One of the most common problems after transplant surgery is rejection. Rejection happens because the body doesn\'t recognize the new heart and doesn\'t know that it is helpful. So the immune system tries to attack it. Medicines (called immunosuppressants, or anti-rejection medicines) help to control this reaction. In a sense, they trick the body into accepting the new heart. Taking them can make your child more likely to get infections, especially in the days right after surgery. So keep your child away from sick people, and have everyone at home wash their hands well and often. ';
    paragraphs[19] = 'Patients who may need a transplant usually have one of two problems. One is irreversible damage to the heart because of coronary artery disease that has resulted in severe heart attacks or myocardial infarctions. The other problem is a heart muscle disease called cardiomyopathy, in which the heart is unable to contract normally because of damage to the muscle cells. Occasionally, other forms of heart disease require transplantation, such as congenital heart defects, which are structural problems present at birth. Heart transplantation carries its own set of risks, including complications during or after the transplant, or death. ';


    //PARALLEL ARRAYS:
    //surgeryName, surgeryImage, surgeryTime, surgeryDiffMin, surgeryDiffMax

    //INDEX 0: X-RAY
    //store the x-ray's name
    surgeryName[0] = 'X Ray';
    //store the x-ray's image
    surgeryImage[0] = 'xRay.png';
    //store the x-ray's time
    surgeryTime[0] = 30;
    //store the x-ray's minimum difficulty
    surgeryDiffMin[0] = 0;
    //store the x-ray's maximum difficulty
    surgeryDiffMax[0] = 2;

    //INDEX 1: LIVER TRANSPLANT
    //store the surgery name
    surgeryName[1] = 'Liver Transplant';
    //store the image of the liver
    surgeryImage[1] = 'liver.jpeg';
    //store the time it takes for the liver transplant
    surgeryTime[1] = 60;
    //store the minimum difficulty for the liver transplant
    surgeryDiffMin[1] = 3;
    //store the maximum difficulty for the liver transplant
    surgeryDiffMax[1] = 5;

    //INDEX 2: KIDNEY TRANSPLANT
    //store the surgery's name 
    surgeryName[2] = 'Kidney Transplant';
    //store the image of the kidney
    surgeryImage[2] = 'kidney.jpeg';
    //store the time it takes for the transplant
    surgeryTime[2] = 70;
    //store the minimum difficulty for the transplant
    surgeryDiffMin[2] = 6;
    //store the maximum difficulty for the transplant
    surgeryDiffMax[2] = 8;

    //INDEX 3: LUNG TRANSPLANT
    //store the surgery's name
    surgeryName[3] = 'Lung Transplant';
    //store the image of the lung
    surgeryImage[3] = 'lung.jpeg';
    //store the time it takes for the procedure
    surgeryTime[3] = 80;
    //store the minimum difficulty for the transplant
    surgeryDiffMin[3] = 9;
    //store the maximum difficulty for the transplant
    surgeryDiffMax[3] = 12;

    //INDEX 4: CORNEA TRANSPLANT
    //store the surgery's name
    surgeryName[4] = 'Cornea Transplant';
    //store the image of the eye
    surgeryImage[4] = 'eye.png';
    //store the time it takes for this transplant
    surgeryTime[4] = 90;
    //store the minimum difficulty for the transplant
    surgeryDiffMin[4] = 13;
    //store the maximum difficulty for the transplant
    surgeryDiffMax[4] = 15;

    //INDEX 5: HEART TRANSPLANT
    //store the surgery's name
    surgeryName[5] = 'Heart Transplant';
    //store the image of a heart
    surgeryImage[5] = 'heart.jpg';
    //store the time it takes for the heart transplant
    surgeryTime[5] = 100;
    //store the minimum and maximum difficulty for the transplant in respective arrays
    surgeryDiffMin[5] = 16;
    surgeryDiffMax[5] = 19;

    //call the random number function
    //to generate the surgery and paragraph for the user
    //parameters: max and min # of surgeries to be used for calculations
    randomNumber(MAX_NUMBER_OF_SURGERIES, MIN_NUMBER_OF_SURGERIES);

    //call the function to show the surgery's info
    //parameter: surgeryIndex, so it knows what image and name to display
    showSurgeryInfo(surgeryIndex);

    //set an interval to call nextWord every 20 ms
    setInterval(nextWord, 20);

    //set an interval to call the countdown timer every second
    //this will change the number on screen and set a new surgery
    timer = setInterval(countdownTimer, 1000);

    //set the countdown to the chosen index's surgery time
    countdown = surgeryTime[surgeryIndex];

    //store whatever the user has typed in already, at the beginning it's empty
    typed = '';

    //clear the textbox
    document.getElementById('input').value = '';
}

//function that calculates a random number between a max and a min, 
//assigns it to a surgery index and calculates a paragraph using the difficulties
//assign the random index to a paragraph
function randomNumber(max, min){
    //calculate a random index using the max and min passed in
    index = Math.floor(Math.random()*max) + min;
    //store the random index as the surgery index 
    surgeryIndex = index;

    //calculate the paragraph index using the surgerys' max and min difficulty
    paragraphIndex = Math.floor(Math.random()*(surgeryDiffMax[surgeryIndex]- surgeryDiffMin[surgeryIndex] + 1)) + surgeryDiffMin[surgeryIndex];

    //assign the random paragraphIndex of the paragraphs array inside the paragraph variable
    //used as a copy of the string
    paragraph = paragraphs[paragraphIndex];
}

//function to show the surgery name and image
//pass in what index to display
function showSurgeryInfo(index){
    //get the name element from HTML and set it as the surgery name
    nameElement.innerText = 'Procedure: ' + surgeryName[index];
    //get the image element from the HTML and set it as the surgery image
    imageElement.src = surgeryImage[index];
}



//function that takes off the first word in a paragraph
function nextWord(){
    //get the input from the textbox
    let inputElement = document.getElementById('input');
    input = inputElement.value.trim()
    //set the paragraph element in HTML to the updated paragraph string
    paragraphElement.innerText = paragraph;

    //take the first word out of the updated paragraph and store it in removed
    removed = paragraph.substring(0, paragraph.indexOf(' '));

    //check if what the user entered is equal to the removed string (first word of the paragrph)
    if (input == removed){
        //increase typed with the removed word to display the typed paragraph
        //add a space for between the words
        typed = typed + removed + ' ';
        //update the paragraph
        //now equal to the substring of the next word and the rest of the paragraph
        paragraph = paragraph.substring(paragraph.indexOf(' ') + 1, paragraph.length);
        //clear the textbox
        inputElement.value = '';
    }
    //change the typed elements' text
    typedElement.innerText = typed;
}


//function to countdown every second
function countdownTimer()
{
    //have to print the countdown in the paragraph
    //get the time element from HTML
    let timeLabel = document.getElementById('time');
    //set the inner text of that element to the countdown
    timeLabel.innerText = countdown + ' seconds left!';
    //counts each second, subtracts by 1 every time its called
    countdown = countdown - 1;
    //show the score, updated every second
    scoreElement.innerText = 'Score: ' + done;


    //stop negative times
    if (countdown <= 0)
    {
        //cleat the timer interval
        clearInterval(timer);
        //set up the game again (choose a surgery, paragraph, start timer again)
        setupGame();
    }
    
    //check if the typed paragraph is equal to the original, or if paragrapg is empty
    else if (typed == paragraphs[paragraphIndex] || paragraph == ''){
        //increase the number of finished surgeries by 1
        done = done + 1;
        //clear the timer interval
        clearInterval(timer);
        //set up the game again (choose a surgery, paragraph, start timer again)
        setupGame();
        //set the message element to you win
        messageElement.innerText = 'You win!';
    }
}