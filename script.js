$(document).ready(function () {
    var arrayAllElements = ["<img src=\"images/skocko.jpg\" class=\"choose\">", "<img src=\"images/star.jpg\" class=\"choose\">",
                            "<img src=\"images/heart.jpg\" class=\"choose\">", "<img src=\"images/spade.jpg\" class=\"choose\">",
                            "<img src=\"images/club.jpg\" class=\"choose\">", "<img src=\"images/diamond.jpg\" class=\"choose\">"];
    var sol1 = Math.floor(Math.random() * 6);
    var sol2 = Math.floor(Math.random() * 6);
    var sol3 = Math.floor(Math.random() * 6);
    var sol4 = Math.floor(Math.random() * 6);
    var arraySolution = [arrayAllElements[sol1], arrayAllElements[sol2], arrayAllElements[sol3], arrayAllElements[sol4]];

    var arraySquare1 = [];
    var arraySquare2 = [];
    var arraySquare3 = [];
    var arraySquare4 = [];
    var arraySquare5 = [];
    var arraySquare6 = [];
    var turn = 1;
    var brojac = 1;
    var circleBrojac = 0;
    var brojacArray1 = 0;
    var brojacArray2 = 0;
    var brojacArray3 = 0;
    var brojacArray4 = 0;
    var brojacArray5 = 0;
    var brojacArray6 = 0;

    $('#check').prop('disabled', true);


    $(".choose").click(function (){
        checkBtn();
        var x = this.cloneNode(true);
        if(arraySquare1.length == 4){
            $('#check').prop('disabled', true);
            checkBtn();
            if(arraySquare2.length == 4){
                $('#check').prop('disabled', true);
                checkBtn();
                if(arraySquare3.length == 4){
                    $('#check').prop('disabled', true);
                    checkBtn();
                    if(arraySquare4.length == 4){
                        $('#check').prop('disabled', true);
                        checkBtn();
                        if(arraySquare5.length == 4){
                            $('#check').prop('disabled', true);
                            checkBtn();
                            if(arraySquare6.length == 4){
                                $('#check').prop('disabled', true);
                                checkBtn();
                            } else {
                                arraySquare6[brojacArray6] = x;
                                brojacArray6 ++;
                            }
                        } else {
                            arraySquare5[brojacArray5] = x;
                            brojacArray5 ++;
                        }
                    } else {
                        arraySquare4[brojacArray4] = x;
                        brojacArray4 ++;
                    }
                } else {
                    arraySquare3[brojacArray3] = x;
                    brojacArray3 ++;
                }
            } else {
                arraySquare2[brojacArray2] = x;
                brojacArray2 ++;
            }
        } else {
            arraySquare1[brojacArray1] = x;
            brojacArray1 ++;
        }
        $("#"+brojac).html(x);
        brojac ++;
    });

    function checkBtn() {
        if(arraySquare1.length == 3 || arraySquare2.length == 3 || arraySquare3.length == 3 || arraySquare4.length == 3 || arraySquare5.length == 3 || arraySquare6.length == 3){
            $('#check').prop('disabled', false);
        }
    }
    
    $('#check').click(function () {
        var red = 0;
        var yellow = 0;
        var arraySolution2 = arraySolution.slice();
        var arrayTest = [];
        if(turn == 1){
            arrayTest = arraySquare1;
            circleBrojac = 101;
        } else if(turn == 2){
            arrayTest = arraySquare2;
            circleBrojac = 111;
        } else if(turn == 3){
            arrayTest = arraySquare3;
            circleBrojac = 121;
        } else if(turn == 4){
            arrayTest = arraySquare4;
            circleBrojac = 131;
        } else if(turn == 5){
            arrayTest = arraySquare5
            circleBrojac = 141;
        } else if(turn == 6){
            arrayTest = arraySquare6;
            circleBrojac = 151;
        }
        var prvi = arrayTest[0].outerHTML;
        var drugi = arrayTest[1].outerHTML;
        var treci = arrayTest[2].outerHTML;
        var cetvrti = arrayTest[3].outerHTML;

        for(x in arraySolution2){
            if(arrayTest[x].outerHTML == arraySolution2[x]){
                arrayTest[x] = null;
                arraySolution2[x] = "mika";
                red ++;
            }
        }

        if(prvi == arraySolution2[1]){
            yellow ++;
            arraySolution2[1] = "mika";
        } else if(prvi == arraySolution2[2]){
            yellow ++;
            arraySolution2[2] = "mika";
        } else if(prvi == arraySolution2[3]){
            yellow ++;
            arraySolution2[3] = "mika";
        }

        if(drugi == arraySolution2[0]){
            yellow ++;
            arraySolution2[0] = "mika";
        } else if(drugi == arraySolution2[2]){
            yellow ++;
            arraySolution2[2] = "mika";
        } else if(drugi == arraySolution2[3]){
            yellow ++;
            arraySolution2[3] = "mika";
        }

        if(treci == arraySolution2[0]){
            yellow ++;
            arraySolution2[0] = "mika";
        } else if(treci == arraySolution2[1]){
            yellow ++;
            arraySolution2[1] = "mika";
        } else if(treci == arraySolution2[3]){
            yellow ++;
            arraySolution2[3] = "mika";
        }

        if(cetvrti == arraySolution2[1]){
            yellow ++;
            arraySolution2[1] = "mika";
        } else if(cetvrti == arraySolution2[2]){
            yellow ++;
            arraySolution2[2] = "mika";
        } else if(cetvrti == arraySolution2[3]){
            yellow ++;
            arraySolution2[3] = "mika";
        }

        $("#circle1").css("background-color", "yellow");

        for(var x = 1; x <= red; x++){
            $("#" + circleBrojac).css("background-color", "red");
            circleBrojac ++;
        }
        for(var x = 1; x <= yellow; x++){
            $("#" + circleBrojac).css("background-color", "yellow");
            circleBrojac ++;
        }

        console.log(red + " " + yellow);
        console.log(arraySolution);
        turn ++;
    })

});