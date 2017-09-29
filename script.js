
//  ------------------------------------------------------  //
//  Create an object named arrayObject to wrap all arrays.  //
//  The individual arrays are referenced by functions       //
//  initialize() and getItems().                            //
//  ------------------------------------------------------  //

var arrayObject = {
    grayArray: [],
    redArray: [],
    greenArray: [],
    blackArray: [],
    yellowArray: [],
    magentaArray: [],
    cyanArray: [],
};

var shared = {
    queue: document.getElementById('queuefield'),
};

//  ------------------------------------------------------  //
//  initialize() sets the sources for all 70 image files,   //
//  and sets up a new Image object for each image file.     //
//  ------------------------------------------------------  //

function initialize() {
        for (var i = 0; i < 10; i++) {
            arrayObject.grayArray[i] = new Image();
            arrayObject.grayArray[i].src = 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray0' + i + '.jpg';
            
            arrayObject.redArray[i] = new Image();
            arrayObject.redArray[i].src = 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red0' + i + '.jpg';
            
            arrayObject.greenArray[i] = new Image();
            arrayObject.greenArray[i].src = 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green0' + i + '.jpg';
            
            arrayObject.blackArray[i] = new Image();
            arrayObject.blackArray[i].src = 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black0' + i + '.jpg';
            
            arrayObject.yellowArray[i] = new Image();
            arrayObject.yellowArray[i].src = 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow0' + i + '.jpg';
            
            arrayObject.magentaArray[i] = new Image();
            arrayObject.magentaArray[i].src = 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta0' + i + '.jpg';
            
            arrayObject.cyanArray[i] = new Image();
            arrayObject.cyanArray[i].src = 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan0' + i + '.jpg';
        }
    
    var imgSources = {
    
    'gray00': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray00.jpg',
    'gray01': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray01.jpg',
    'gray02': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray02.jpg',
    'gray03': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray03.jpg',
    'gray04': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray04.jpg',
    'gray05': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray05.jpg',
    'gray06': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray06.jpg',
    'gray07': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray07.jpg',
    'gray08': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray08.jpg',
    'gray09': 'https://preview.c9users.io/mishakrul/cmykrul/img/gray/gray09.jpg',
    
    'red00': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red00.jpg',
    'red01': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red01.jpg',
    'red02': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red02.jpg',
    'red03': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red03.jpg',
    'red04': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red04.jpg',
    'red05': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red05.jpg',
    'red06': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red06.jpg',
    'red07': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red07.jpg',
    'red08': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red08.jpg',
    'red09': 'https://preview.c9users.io/mishakrul/cmykrul/img/red/red09.jpg',
    
    'green00': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green00.jpg',
    'green01': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green01.jpg',
    'green02': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green02.jpg',
    'green03': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green03.jpg',
    'green04': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green04.jpg',
    'green05': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green05.jpg',
    'green06': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green06.jpg',
    'green07': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green07.jpg',
    'green08': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green08.jpg',
    'green09': 'https://preview.c9users.io/mishakrul/cmykrul/img/green/green09.jpg',
    
    'black00': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black00.jpg',
    'black01': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black01.jpg',
    'black02': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black02.jpg',
    'black03': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black03.jpg',
    'black04': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black04.jpg',
    'black05': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black05.jpg',
    'black06': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black06.jpg',
    'black07': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black07.jpg',
    'black08': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black08.jpg',
    'black09': 'https://preview.c9users.io/mishakrul/cmykrul/img/black/black09.jpg',
    
    'yellow00': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow00.jpg',
    'yellow01': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow01.jpg',
    'yellow02': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow02.jpg',
    'yellow03': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow03.jpg',
    'yellow04': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow04.jpg',
    'yellow05': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow05.jpg',
    'yellow06': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow06.jpg',
    'yellow07': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow07.jpg',
    'yellow08': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow08.jpg',
    'yellow09': 'https://preview.c9users.io/mishakrul/cmykrul/img/yellow/yellow09.jpg',
    
    'magenta00': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta00.jpg',
    'magenta01': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta01.jpg',
    'magenta02': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta02.jpg',
    'magenta03': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta03.jpg',
    'magenta04': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta04.jpg',
    'magenta05': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta05.jpg',
    'magenta06': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta06.jpg',
    'magenta07': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta07.jpg',
    'magenta08': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta08.jpg',
    'magenta09': 'https://preview.c9users.io/mishakrul/cmykrul/img/magenta/magenta09.jpg',
    
    'cyan00': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan00.jpg',
    'cyan01': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan01.jpg',
    'cyan02': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan02.jpg',
    'cyan03': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan03.jpg',
    'cyan04': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan04.jpg',
    'cyan05': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan05.png',
    'cyan06': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan06.jpg',
    'cyan07': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan07.jpg',
    'cyan08': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan08.jpg',
    'cyan09': 'https://preview.c9users.io/mishakrul/cmykrul/img/cyan/cyan09.jpg',
    };
}

//  ------------------------------------------------------  //
//  The keypress function below causes checkInput() to fire //
//  when the 'enter' key is pressed.                        //
//  ------------------------------------------------------  //

$(document).keypress(function(event){	// getItems if 'enter' key is pressed
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){                // '13' is key code for enter button
        event.preventDefault();         // Prevent page from being refreshed when enter key is pressed.
        checkInput();              
    } else {
        // do nothing
    }
});

//  ------------------------------------------------------  //
//  clear() destroys all canvases from 'getitemsfield' and  //
//  removes any data inside the 'items' input field.        //
//  ------------------------------------------------------  //

function clear() {
    var getitemsfield = document.getElementById('getitemsfield');
    var canvasIsPresent = getitemsfield.hasChildNodes();
    document.getElementById('clearbutton').addEventListener('click', clear);            // Clear radio buttons and input fields on click.
    if (canvasIsPresent) {
            while (getitemsfield.firstChild) getitemsfield.removeChild(getitemsfield.firstChild);  // Destroy all canvas elements.
        }
}

//  ------------------------------------------------------  //
//  checkInput() is called by getitemsbutton to pull input  //
//  data from the 'items' field.  It checks to see if the   //
//  data is between values 1 and 10.                        //
//  ------------------------------------------------------  //


function checkInput() {
    var userInput = document.queueform.items.value;
    if (userInput >= 1 && userInput <= 10) {        // If userInput value is between 1 and 10, 
        checkRadioButtons(userInput);               // pass the input value into checkRadioButtons().
    } else {
        // do nothing
}

//  ------------------------------------------------------- //
//  checkRadioButtons() will iterate over all radio buttons //
//  and create a new variable called radioValue to hold the //
//  the value of the checked radio button                   //
//  ------------------------------------------------------- //

function checkRadioButtons(userInput) {
    document.getElementById('message1').innerHTML = "Please select a color.";
    var radioGroup = document.queueform.selection; 
    for (var i = 0; i < radioGroup.length; i++) {  // Loop through each radio button in the 'selection' group.
        if (radioGroup[i].checked) {               // Is the radio button checked?
            var radioValue = radioGroup[i].value;  // If radio button is checked, store its value in radioValue.
            getItems(userInput);
        }
}

//  ------------------------------------------------------  //
//  getItems() creates new HTML canvas elements based on    //
//  userInput's value, and draws images on the canvases     //
//  based on which radio button was checked.                //
//  ------------------------------------------------------  //

function getItems(userInput) {
    clear();                                                    // clear() refreshes the workspace before running getItems()
    var instructions = document.getElementById('howto-box');
    if (!sessionStorage.getItem('instructions')) {              // if 'Get Items' button is pressed and no 'instructions'
        instructions.style.display = 'none';                    // key exists in session storage, hide the instructions
        sessionStorage.setItem('instructions', 'hidden');       // box and store an 'instructions' key in session storage.
    } else {
        // do nothing
    }
            for (var y = 0; y < userInput; y++) {               
                var createCanvas = document.createElement('canvas');
                var cA = [];
                var ctxA = [];
                    createCanvas.id = 'canvas' + ('0' + y);         // Generate canvases dynamically and give them unique IDs
                    createCanvas.className = 'canvas';              // based on the value of userInput.
                    createCanvas.width = 70;
                    createCanvas.height = 70;
                    getitemsfield.appendChild(createCanvas);               // Append newly created canvas elements to 'getitemsfield'.
                    cA[y] = document.getElementById('canvas' + '0' + y);   // Store all drawn canvases in an array.
                    ctxA[y] = cA[y].getContext('2d');                      // Store all canvas contexts in an array.
                if (radioValue == 'gray') {                                // Checks the contents of each radio button's value.
                    ctxA[y].drawImage(arrayObject.grayArray[y],0,0);       // If radio's value is {color}, draw context data from 
                } else if (radioValue == 'red') {                          // the array that contains {color}.
                    ctxA[y].drawImage(arrayObject.redArray[y],0,0);
                } else if (radioValue == 'green') {
                    ctxA[y].drawImage(arrayObject.greenArray[y],0,0);
                } else if (radioValue == 'black') {
                    ctxA[y].drawImage(arrayObject.blackArray[y],0,0);
                } else if (radioValue == 'yellow') {
                    ctxA[y].drawImage(arrayObject.yellowArray[y],0,0);
                } else if (radioValue == 'magenta') {
                    ctxA[y].drawImage(arrayObject.magentaArray[y],0,0);
                } else if (radioValue == 'cyan') {
                    ctxA[y].drawImage(arrayObject.cyanArray[y],0,0);
                }
            } document.getElementById('message1').innerHTML = userInput     
                                + ' item(s) will be sent to the queue.';    
        }
    }
}

//  ----------------------------------------------------------  //
//  storeRewardID() stores a dynamically generated rewardID     // 
//  key in session storage                                      //
//  ----------------------------------------------------------  //

function storeRewardID(rewardNumber) { 
    var rewardID = sessionStorage.getItem('rewards') ? sessionStorage.getItem('rewards') : 0;  // If session storage contains a 'rewards' item, get the                                               
        rewardID = parseInt(rewardID);                                                         //  rewards item and store it as rewardID.  Otherwise, rewardID is 0.
        sessionStorage.setItem('rewards', rewardID + 1);   
    if (!document.getElementById('getitemsfield').hasChildNodes()) {  // do not store a key if the getitemsfield does not have canvas nodes
        //
    }
}

//  ------------------------------------------------------  //
//  storeCanvasData() takes context data from the canvas    //
//  elements created by getItems() and saves them as a      //
//  base64 string inside of local storage.                  //
//  ------------------------------------------------------  //

function storeCanvasData() {
    var userInput = document.queueform.items.value;
    var rewardNumber = sessionStorage.getItem('rewards'); 
    var rewardID = rewardNumber ? rewardNumber : 1;
    storeRewardID(rewardNumber);
    var storageKeys = localStorage.length;              // storageKeys = the number of keys that are in local storage
    var cA = [];
    var ctxA = [];
    var base64DataA = [];
    for (var n = 0; n < userInput; n++) {                       // Iterate over userInput's value to store the canvases and
        cA[n] = document.getElementById('canvas' + '0' + n);    // their contexts inside of a new array.
        ctxA[n] = cA[n].getContext('2d');
        base64DataA[n] = cA[n].toDataURL('image/jpeg');             // Generate a new string of base 64 data from each canvas
        localStorage.setItem(storageKeys + n, (base64DataA[n]));    // Set a local storage key that contains the base 64 string
    } 
}

//   ------------------------------------------------------  //
//  createCanvases() is called on page load by <body> in     //
//  queue.html. It generates new canvases on the queue page  //
//  based on the number of keys inside of local storage.     //
//   ------------------------------------------------------  //

function createCanvases(storageKeys) {
    var newImg = [];
    var newCanvasCtx = [];
    var rewardID = sessionStorage.getItem('rewards');
    var newDivElement = document.createElement('div');
        newDivElement.id = 'canvasdiv';
        newDivElement.className = 'canvascontainer';
        document.getElementById('queuefield').appendChild(newDivElement);
    for (let e = 0; e < localStorage.length; e++) {                        // Iterate over the number of local storage keys.
        let newCanvasElement = document.getElementById('canvasdiv' + e);   // Create new canvases with unique IDs.
            newCanvasElement = document.createElement('canvas');
            newCanvasElement.id = 'queueCanvas' + e;
            newCanvasElement.width = 70;
            newCanvasElement.height = 70;
        document.getElementById('queuefield').appendChild(newCanvasElement);    // Append each new canvas element to the 'queuefield'
        newCanvasCtx[e] = newCanvasElement.getContext('2d');
        newImg[e] = new Image();                                                // Create a new image object for each local storage key.
        newImg[e].onload = function() {
            newCanvasCtx[e].drawImage(newImg[e], 0, 0);                             // Draw new contexts into the canvases when the newImg
        };                                                                          //   objects have loaded.
        newImg[e].setAttribute('src', localStorage.getItem(localStorage.key(e)));   // Set each new image's source to a local storage key.
    } 
}

//  ------------------------------------------------------  //
//  clearStorage() clears the local storage keys and values //
//  ------------------------------------------------------  //

function clearStorage() {
    localStorage.clear();    
    while (shared.queue.firstChild) shared.queue.removeChild(shared.queue.firstChild);{   // while the queue has canvases, destroy all canvases
        }
}

//  ------------------------------------------------------  //
//  markPrinted() destroys all canvases on the page and     //
//  tells the user how many jobs have been printed.         //
//  ------------------------------------------------------  //

function markPrinted(storageKeys) {
    var printedMsg = document.getElementById('message2');
    var storageKeys = localStorage.length;
    var rewardMsg = 'You have printed ' + (storageKeys) + ' item(s)! ' + '<br>';
    var rewards = sessionStorage.getItem('rewards');
    var queueIsPresent = shared.queue.hasChildNodes();
    document.getElementById('printedbutton').addEventListener('click', markPrinted);    // call markPrinted() when 'printedbutton' is clicked
        if (rewards == null || storageKeys == 0) {
            printedMsg.innerHTML = 'There are 0 jobs in the print queue. Slacker!';
        } else if (rewards == 1) {
            printedMsg.innerHTML = rewardMsg + 'You deserve a cookie! ' + '<img src="https://preview.c9users.io/mishakrul/cmykrul/reward-imgs/cookie.jpg">';
            clearStorage();
        } else if (rewards == 2) {
            printedMsg.innerHTML = rewardMsg + 'You deserve a cupcake! ' + '<img src="https://preview.c9users.io/mishakrul/cmykrul/reward-imgs/cupcake.jpg">';
            clearStorage();
        } else if (rewards == 3) {
            printedMsg.innerHTML = rewardMsg + 'You deserve some pie! ' + '<img src="https://preview.c9users.io/mishakrul/cmykrul/reward-imgs/pie.jpg">';
            clearStorage();
        } else if (rewards == 4) {
            printedMsg.innerHTML = rewardMsg + 'You deserve a taco! ' + '<img src="https://preview.c9users.io/mishakrul/cmykrul/reward-imgs/taco.jpg">';
            clearStorage();
        } else if (rewards >= 5) {
            printedMsg.innerHTML = rewardMsg + 'You deserve some ice cream! ' + '<img src="https://preview.c9users.io/mishakrul/cmykrul/reward-imgs/icecream.jpg">';
            clearStorage();
        }
}

function setInstructions() {                            // set 'instructions' key in session storage
    sessionStorage.setItem('instructions', 'hidden');
}

$('#printedbutton').click(function(fadeRewardIn) {      // This is a trick to mask #message2 div jittering
    $("#message2").fadeIn(800);
});

$(document).ready(function fadeInstructions() {         // Fade instructions in on document load.
    if (sessionStorage.getItem('instructions')) {       // If a key called 'instructions' is in session
        // do nothing                                   //   storage, do not display user instructions.
    } else {
        $(".fadeonload").hide(0).delay(200).fadeIn(900); {
        // animation complete
        }
    }
});

$("#X").click(function hideInstructions(){  // hide instructions when the 'X' is clicked
    $('#howto-box').hide();
    setInstructions();                      // set 'instructions' key in session storage
});

