$(".inputButton").click(function() {
    let dailyCheetos = $(".cheetoNum").val();
    let dayNumVar = $(".dayNum").val();
    let feeling = $(".feelingInput").val();
    let totalCheetos = dailyCheetos * dayNumVar;
    
    if(totalCheetos > 20000) {
        if(feeling === "yes") {
            $(".output").text("Jeez! Your gonna end up eating " + totalCheetos + " cheetos! You might wanna slow down. At least you feel good about it I guess... Just be careful, drink lots of water...");
        } else {
            $(".output").text("Woah there Buckaroo! Keep this up and youll be eating " + totalCheetos + " cheetos! At least you seem to know that thats not healthy. I would recommend you cut back a little...");
        }
    } if(totalCheetos > 2000) {
        if(feeling === "yes") {
            $(".output").text("Nice! " + totalCheetos + " cheetos? Thats impressive. An you got confidence too. I mean if you vibe with it then keep it up man, just dont get carried away...");
        } else {
            $(".output").text("Hey! " + totalCheetos + " cheetos is a perfectly reasonable amount to eat within " + dayNumVar + " days. You shouldnt feel bad about it. Now go eat those cheetos with confidence and know that im cheering you on. Go get em champ...");
        }
    } else {
        if(feeling === "yes") {
            $(".output").text("You shouldn't be proud of yourself. You're only gonna eat " + totalCheetos +" cheetos. You gotta go to the store, get some cheetos and go to town on em. Now go get em champ, and report back here with your new goal.");
        } else {
            $(".output").text("only " + totalCheetos + " cheetos? At least you know you have to work on it... I'll tell you what, go to the store and get some cheetos, and report back to this sight with your new goal. It should be at least a total of 2000 cheetos eaten in your time frame. Go get em champ");
        }
    }
});
