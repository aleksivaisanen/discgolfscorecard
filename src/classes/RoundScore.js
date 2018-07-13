//RoundScore data model
export default class RoundScore {

    constructor(course, player, id, parArray) {
        this.course = course, //Course object
            this.player = player, //Player object
            this.id = id,
            this.scoreArray = parArray, //takes the parArray of the score
            this.finished = false //turns to true when round is done

    }

}