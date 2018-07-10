//RoundScore data model
export default class RoundScore {

    constructor(course, player, id) {
        this.course = course, //Course object
            this.player = player, //Player object
            this.id = id,
            this.scoreArray = []
    }

    setScoreForHole(holeNo, score) {
        this.scoreArray[holeNo - 1] = score;
    }
}