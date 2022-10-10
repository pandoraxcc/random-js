
function timer(ms) {

    // Unlike Java or Python, Javascript does not have a built-in sleep function... 
    // WAIT! WHAT? 0_0

    return new Promise(resolve => setTimeout(resolve, ms));
  }

$(document).ready(function() {

    let counter = 3
    var title = `<p class="text-warning text-preparation pb-3"><b>Prepare your hand!</b></p>`;

    $(".button-random").on("click", async function() {

        $(".generator").addClass("pb-3");
        $(".generator").empty();
        $(".generator").append(title);

        await timer(2000);

        $(".text-preparation").slideDown(700, function() {$(this).remove();});

        for (let i=1; i < counter + 1; i++) {

            var counter_element = `<p class="countdown">${i}</p>`;
            $(".generator").append(counter_element);
            await timer(1000);

        }

        $(".countdown").remove();
        bots_hand = Math.floor(Math.random() * 3) + 1;
        console.log(bots_hand);

        switch (bots_hand) {

            case 1:
                $(".generator").append(`<p class="pb-2"> <b> SCISSORS! </b> </p> <i class="fa fa-hand-scissors-o fa-3x"></i>`);
                break;

            case 2:
                $(".generator").append(`<p class="pb-2"> <b> PAPER! </b> </p> <i class="fa fa-hand-paper-o fa-3x"></i>`);
                break;

            case 3:
                $(".generator").append(`<p class="pb-2"> <b> ROCK! </b> </p> <i class="fa fa-hand-rock-o fa-3x"></i>`);
                break;

        }
    });
 });