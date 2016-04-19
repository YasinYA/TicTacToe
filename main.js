var player = 'x'; // player turn  = 0
var ai = 'o'; // ai turn  = 1
var turn = 0; // differes btw 0 and 1 to switch the 

// value within each cell
var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;


var playerWin = false; // true if X wins 
var aiWin = false; // true if O wins 


var tictactoeGame = {
    //this function is determining the AI moves and 
    //it will intellegently choose the best choice
    aiMoves : function() {
        if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) {
            $('#a1').text("o");
            turn = 0;
        } else {
            if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x") )) {
                $('#a1').text("o");
                turn = 0;
            } else {
                if (a2 == "" && ((a1 == "x" && a3 == "x") || (c2 == "x" && b2 == "x"))) {
                    $('#a2').text("o");
                    turn = 0;
                } else {
                    if(a3 == "" && (a2 == "x" && c3 == "x") ) {
                        $("#a3").text("o");
                        turn = 0;
                    } else {
                        if (a3 == "" && ((a1 == "x" && a2 == "x") || (c1 == "x" && b2 == "x") || (c3 == "x" && b3 == "x"))) {
                            $('#a3').text("o");
                            turn = 0;
                        } else {
                            if (c3 == "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
                                $('#c3').text("o");
                                turn = 0;
                            } else {
                                if (c1 == "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
                                    $('#c1').text("o");
                                    turn = 0;
                                } else  {
                                    if (c2 == "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
                                        $('#c2').text("o");
                                        turn = 0;
                                    } else {
                                        if (b1 == "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x") || (a2 == "x" && c1 == "x" && a1 != "x" && c2 != "x" && a1 != "" && c2 != ""))) {
                                            $('#b1').text("o");
                                            turn = 0;
                                        } else {
                                            if (b3 == "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
                                                $('#b3').text("o");
                                                turn = 0;
                                            } else {
                                                if (b2 == "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
                                                    $('#b2').text("o");
                                                    turn = 0;
                                                } else {
                                                    if (b2 == "") {
                                                        $('#b2').text("o");
                                                        turn = 0;
                                                    } else  {
                                                        if (a1 == "") {
                                                            $('#a1').text("o");
                                                            turn = 0;
                                                        }else {
                                                            if (c3 == "") {
                                                                $('#c3').text("o");
                                                                turn = 0;
                                                            }else {
                                                                if (c2 == "") {
                                                                    $('#c2').text("o");
                                                                    turn = 0;
                                                                } else {
                                                                    if (b1 == "") {
                                                                        $('#b1').text("o");
                                                                        turn = 0;
                                                                    }
                                                                }

                                                            }

                                                        }

                                                    }

                                                }

                                            }

                                        }

                                    }

                                }

                            }

                        }

                    }

                }

            }

        }
    },

    //this function will track the value of the boxes 
    boxChecker : function() {
        a1 = $('#a1').html();
        a2 = $('#a2').html();
        a3 = $('#a3').html();
        b1 = $('#b1').html();
        b2 = $('#b2').html();
        b3 = $('#b3').html();
        c1 = $('#c1').html();
        c2 = $('#c2').html();
        c3 = $('#c3').html();
    },

    winChecker : function() { 
        // check if the player won
        if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
            (b1 == b2 && b1 == b3 && (b1 == "x")) || //second row
            (c1 == c2 && c1 == c3 && (c1 == "x")) || //third row
            (a1 == b1 && a1 == c1 && (a1 == "x")) || //first column
            (a2 == b2 && a2 == c2 && (a2 == "x")) || //second column
            (a3 == b3 && a3 == c3 && (a3 == "x")) || //third column
            (a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
            (a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
        ) {
            playerWin = true;
            this.winAlert();

        } else { 
            // check if the AI won
            if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
                (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
                (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
                (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
                (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
                (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
                (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
                (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
            ) {
                aiWin = true;
                this.winAlert();

            } else { 
                //check if the game is draw or tie
                if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                    alert("It's a tie!");
                    this.reset();
                }
            }
        }
    },

    //this function will alert who won
    winAlert : function() {
        if (playerWin == true) {
            alert("You won!");
            this.reset(); 
        } else {
            if (aiWin == true) {
                alert("Sorry, you lose!");
                this.reset();
            }
        }
    },

    //this the heart of the game it is the init of the game and it is called when the page is loaded
    newGame : function() {
        $('td').one('click', function(event) {
            if (turn == 0 && $(this).text() !== "o") {
                $(this).text(player);
                tictactoeGame.boxChecker();
                tictactoeGame.winChecker();
                turn == 1;
                tictactoeGame.aiMoves();
                tictactoeGame.boxChecker();
                tictactoeGame.winChecker();
            }
        });
    },

    // this function is the reset function it resets the value of the boxes and restarts the game
    reset : function() {
        a1 = $('#a1').text("");
        b1 = $('#b1').text("");
        c1 = $('#c1').text("");
        a2 = $('#a2').text("");
        b2 = $('#b2').text("");
        c2 = $('#c2').text("");
        a3 = $('#a3').text("");
        b3 = $('#b3').text("");
        c3 = $('#c3').text("");
        playerWin = false;
        aiWin = false;
        //the reason that i call the object name inside it self
        //instead of "this keyword" is 
        //this method is gonna call by  jquery event callback 
        //and the keyword this will be referred by the element that the 
        //event is registered for
        tictactoeGame.newGame();
        location.reload();
    }

};

//this is jQuery function that gets 
//called when the page is loaded and 
//it inits the game by call the newGame method
$(document).ready(function () {
    tictactoeGame.newGame();
    $('.btn1').click(tictactoeGame.reset);
});