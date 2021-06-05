class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("car racing game");
        title.position(450,0);
        var input=createInput('name');
        input.position(400,200);
        var button=createButton('play');
        button.position(400,300);
        button.mousePressedOver(function(){
            input.hide();
            button.hide();
            var name=input.value(); // name="Abha"
            playerCount=playerCount+1; // playerCount=2
            player.update(name);
            player.updateCount(playerCount);
            var greeting=createElement('h3');
            greeting.html("Welcome"+name);
            greeting.position(400,250);
        })
    }
}