var TicTacGame = {
	turn: 0,
	player: '',
	userMoves : [],
	a1 : $('#a1').text(),
	a2 : $('#a2').text(), 
	a3 : $('#a3').text(),
	b1 : $('#b1').text(),
	b2 : $('#b2').text(),
	b3 : $('#b3').text(),
	c1 : $('#c1').text(),
	c2 : $('#c2').text(),
	c3 : $('#c3').text(),

	sideChecker : function(side) {
		var ai;
        if (side === this.player && side === 'X') {
            ai = 'O';
        } else if (this.player === '' && side === this.player) {
            this.player = 'O';
            ai = 'X';
        } else {
            ai = 'X';
        }
        console.log(ai);
        return ai;
	},

	aiMoves : function() {
		if (this.a1 == "" && ((this.a3 == "x" && this.a2 == "x") || (this.c3 == "x" && this.b2 == "x") || (this.c1 == "x" && this.b1 == "x"))) {
			this.a1 = this.aiSide;
			this.turn = 0;
		} else {
			if (this.a2 == "" && ((this.a1 == "x" && this.a3 == "x") || (this.c2 == "x" && this.b2 == "x"))) {
				this.a2  = this.aiSide;
				this.turn = 0;
			} else {
				if (this.a3 == "" && ((this.a1 == "x" && this.a2 == "x") || (this.c1 == "x" && this.b2 == "x") || (this.c3 == "x" && this.b3 == "x"))) {
					this.a3 = this.aiSide
					this.turn = 0;
				} else {
					if (this.c3 == "" && ((this.c1 == "x" && this.c2 == "x") || (this.a1 == "x" && this.b2 == "x") || (this.a3 == "x" && b3 == "x"))) {
						this.c3 = this.aiSide;
						this.turn = 0;
					} else {
						if (this.c1 == "" && ((this.c3 == "x" && this.c2 == "x") || (this.a3 == "x" && this.b2 == "x") || (this.a1 == "x" && this.b1 == "x"))) {
							this.c1 = this.aiSide;
							this.turn = 0;
						} else {
							if (this.c2 == "" && ((this.c3 == "x" && this.c1 == "x") || (this.a2 == "x" && this.b2 == "x"))) {
								this.c2 = this.aiSide;
								this.turn = 0;
							} else {
								if (this.b1 == "" && ((this.b3 == "x" && this.b2 == "x") || (this.a1 == "x" && this.c1 == "x"))) {
									this.b1 = this.aiSide;
									this.turn = 0;
								} else {
									if (this.b3 == "" && ((this.a3 == "x" && this.c3 == "x") || (this.b2 == "x" && this.b1 == "x"))) {
										this.b3 = this.aiSide;
										this.turn = 0;
									} else {
										if (this.b2 == "" && ((this.a3 == "x" && this.c1 == "x") || (this.c3 == "x" && this.a1 == "x") || (this.b3 == "x" && this.b1 == "x") || (this.c2 == "x" && this.a2 == "x"))) {
											this.b2 = this.aiSide;
											this.turn = 0;
										} else { // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
											if (this.b2 == "") {
												this.b2 = this.aiSide;
												this.turn = 0;

											} else {
												if (this.a1 == "") {
													this.a1 = this.aiSide;
													this.turn = 0;

												} else {
													if (this.c3 == "") {
														this.c3 = this.aiSide;
														this.turn = 0;

													} else {
														if (this.c2 == "") {
															this.c2 = this.aiSide;
															this.turn = 0;

														} else {
															if (this.b1 == "") {
																this.b1 = this.aiSide;
																this.turn = 0;

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

	winChecker: function() { // CHECKS IF X WON
		if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
			(b1 == b2 && b1 == b3 && (b1 == "x")) || //second row
			(c1 == c2 && c1 == c3 && (c1 == "x")) || //third row
			(a1 == b1 && a1 == c1 && (a1 == "x")) || //first column
			(a2 == b2 && a2 == c2 && (a2 == "x")) || //second column
			(a3 == b3 && a3 == c3 && (a3 == "x")) || //third column
			(a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
			(a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
		) {
			xWin = true;
			winAlert();

		} else { // CHECKS IF O WON
			if ((this.a1 == this.a2 && this.a1 == this.a3 && (this.a1 == "o")) || //first row
				(this.b1 == this.b2 && this.b1 == this.b3 && (this.b1 == "o")) || //second row
				(this.c1 == this.c2 && this.c1 == this.c3 && (this.c1 == "o")) || //third row
				(this.a1 == this.b1 && this.a1 == this.c1 && (this.a1 == "o")) || //first column
				(this.a2 == this.b2 && this.a2 == this.c2 && (this.a2 == "o")) || //second column
				(this.a3 == this.b3 && this.a3 == this.c3 && (this.a3 == "o")) || //third column
				(this.a1 == this.b2 && this.a1 == this.c3 && (this.a1 == "o")) || //diagonal 1
				(this.a3 == this.b2 && this.a3 == this.c1 && (this.a3 == "o")) //diagonal 2
			) {
				oWin = true;
				winAlert();

			} else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
				if (((this.a1 == "x") || (this.a1 == "o")) && ((this.b1 == "x") || (this.b1 == "o")) && ((this.c1 == "x") || (this.c1 == "o")) && ((this.a2 == "x") || (this.a2 == "o")) && ((this.b2 == "x") || (this.b2 == "o")) && ((this.c2 == "x") || (this.c2 == "o")) && ((this.a3 == "x") || (this.a3 == "o")) && ((this.b3 == "x") || (this.b3 == "o")) && ((this.c3 == "x") || (this.c3 == "o"))) {
					alert("It's a tie!");
				}
			}
		}
	};


	reset: function() {
		$('.boxes').removeClass('clicked');
        $('.boxes').html('');
        this.userMoves = [];
	},

	newGame : function() {
		var takeSide = prompt('X or O');
		this.player = takeSide.toUpperCase();
		this.aiSide = this.sideChecker(this.player);
		$('.btn1').click(this.reset);
	}
};

$(function() {
	TicTacGame.newGame();
});