const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(index, 1)
}

Park.prototype.getBestDino = function () {
    let bestDino = this.dinosaurs[0]

    for (const dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > bestDino.guestsAttractedPerDay) {
            bestDino = dino
        }
    }

    return bestDino
}

Park.prototype.getDinosOfSpecies = function (species) {
    const dinosOfSpecies = []

    for (const dino of this.dinosaurs) {
        if (dino.species === species) {
            dinosOfSpecies.push(dino)
        }
    }

    return dinosOfSpecies
}

Park.prototype.removeDinosOfSpecies = function (species) {
    for (const dino of this.getDinosOfSpecies(species)) {
        this.removeDinosaur(dino)
    }
}

Park.prototype.getTotalDailyVisitors = function () {
    let totalDailyVisitors = 0

    for (const dino of this.dinosaurs) {
        totalDailyVisitors += dino.guestsAttractedPerDay
    }

    return totalDailyVisitors
}

Park.prototype.getAnnualVisitors = function () {
    return this.getTotalDailyVisitors() * 365
}

Park.prototype.getAnnualRevenue = function () {
    return this.getAnnualVisitors() * this.ticketPrice
}
  
module.exports = Park;
  