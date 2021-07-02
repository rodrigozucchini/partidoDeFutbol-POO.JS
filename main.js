class Person {
    constructor({
        name,
        age,
        height,
        weight,
        dt = false,
        player = false,
        referee = false,
        testPCR,
    }) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.dt = dt;
        this.player = player;
        this.referee = referee;
        this.testPCR = testPCR;
    }
}

class Dt extends Person{
    constructor(props){
        super(props);
    }
    dt ({
    costume = false,
    redCard,
    yellowCard,
    }) {
        this.costume = costume;
        this.redCard = redCard;
        this.yellowCard = yellowCard;
    }
}

class Referee extends Person{
    constructor(props){
        super(props);
    }
    referee ({
    cardsOutRed = 0,
    cardsOutYellow = 0,
    }) {
        this.cardsOutRed = cardsOutRed;
        this.cardsOutYellow = cardsOutYellow;
    }
}

class Player extends Person{
    constructor(props){
        super(props);
    }
        player ({
        header,
        reaction,
        ballControl,
        redCard = 0,
        yellowCard = 0,
    })
    {
        this.header = header;
        this.reaction = reaction;
        this.ballControl = ballControl;
        this.redCard = redCard;
        this.yellowCard = yellowCard;
    }


    publicarGoals(goals, GoalsTotal) {
        const goalsTotal = new Goals({
          goalsTotal: goals,
          studentName: this.name,
        });
        goalsTotal.publicar();
      }
}

class Goals {
    constructor({
        goalsTotal = 0,
        studentName,
    }) {
        this.goalsTotal = goalsTotal;
        this.studentName = studentName;
    }

    publicar() {
        console.log(this.studentName + " hizo " + this.goalsTotal + " anotaciones.")
    }
}







const miguelborja = new Player ({
    name: "Miguel Angel Borja",
    age: 22,
    height: "185cm",
    weight: "85500gr",
    player: true,
    testPCR: true,
    header: "90%",
    reaction: "85%",
    ballControl: "80%",
    redCard: 0,
    yellowCard: 1,
  });

  const marceloGallardo = new Dt ({
    name: "Marcelo Gallardo",
    age: 22,
    height: "185cm",
    weight: "85500gr",
    player: true,
    testPCR: true,
    costume: true,
    redCard: 0,
    yellowCard: 1,
  });