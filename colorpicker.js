//declare variables

var numofSquares = 6;
var colors = generateRandomColors(numofSquares);
var correctColor = pickColor();
var colorDisplay = document.getElementById("rgbvalue");
var squares = document.getElementsByClassName("square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");


easyBtn.addEventListener("click", function() {
    //change button background
    easyBtn.classList.add("difficulty");
    hardBtn.classList.remove("difficulty");
    numofSquares = 3;
    //generate new rgb
    colors = generateRandomColors(numofSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    //hide 3 colors
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    //change button background
    hardBtn.classList.add("difficulty");
    easyBtn.classList.remove("difficulty");
    numofSquares = 6;
    //generate new rgb
    colors = generateRandomColors(numofSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    //show 6 colors
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
    }

});

resetButton.addEventListener("click", function() {
    //generate 6 new colors
    colors = generateRandomColors(numofSquares);
    //pick one color from the array
    correctColor = pickColor();
    //display new rgb in H1
    colorDisplay.textContent = correctColor;
    //change squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];



    }
    //reset winner display
    messageDisplay.textContent = "";
    //reset button text
    resetButton.textContent = "New Colors";
    //change header color back to default
    h1.style.backgroundColor = "rgb(48, 48, 48)";
});

//make all colors same when correct
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = correctColor;
    }
}

//generate random color to guess
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        //push color into array
        arr.push(randomColor())
    }
    return arr;

}

//generate random RGB values
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

//display color to guess
colorDisplay.textContent = correctColor;

//assign colors
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
        //find user chosen color
    squares[i].addEventListener("click", function() {
        var pickedColor = this.style.backgroundColor;

        //check if user is correct
        if (pickedColor === correctColor) {
            messageDisplay.textContent = "Correct!";
            changeColors()
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again";

        } else {
            this.style.background = "rgb(48, 48, 48)";
            messageDisplay.textContent = "Try Again";
        }
    });
}