const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let trex1
    let trex2
    let allosaurus1
    let allosaurus2
    let velociraptor
    let park

    beforeEach(function () {
        trex1 = new Dinosaur("Tyrannosaurus Rex", "carnivore", 200)
        trex2 = new Dinosaur("Tyrannosaurus Rex", "carnivore", 180)
        allosaurus1 = new Dinosaur("Allosaurus", "carnivore", 150)
        allosaurus2 = new Dinosaur("Allosaurus", "carnivore", 200)
        velociraptor = new Dinosaur("Velociraptor", "carnivore", 250)
        park = new Park("The Meat Grinder", 69.00, [])
    })

    it('should have a name', function () {
        const actual = park.name
        assert.strictEqual(actual, "The Meat Grinder")
    });

    it('should have a ticket price', function () {
        const actual = park.ticketPrice
        assert.strictEqual(actual, 69.00)
    });

    it('should have a collection of dinosaurs', function () {
        const actual = park.dinosaurs
        assert.deepStrictEqual(actual, [])
    });

    it('should be able to add a dinosaur to its collection', function () {
        park.addDinosaur(trex1)
        const actual = park.dinosaurs
        assert.deepStrictEqual(actual, [trex1])
    });

    it('should be able to remove a dinosaur from its collection', function () {
        park.addDinosaur(trex1)
        park.addDinosaur(allosaurus1)
        park.removeDinosaur(trex1)
        const actual = park.dinosaurs
        assert.deepStrictEqual(actual, [allosaurus1])
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
        park.addDinosaur(allosaurus2)
        park.addDinosaur(velociraptor)
        const actual = park.getBestDino()
        assert.strictEqual(actual, velociraptor)
    });

    it('should be able to find all dinosaurs of a particular species', function () {
        park.addDinosaur(trex1)
        park.addDinosaur(trex2)
        park.addDinosaur(allosaurus1)
        park.addDinosaur(allosaurus2)
        park.addDinosaur(velociraptor)
        const actual = park.getDinosOfSpecies("Allosaurus")
        assert.deepStrictEqual(actual, [allosaurus1, allosaurus2])
    });

    it('should be able to remove all dinosaurs of a particular species', function () {
        park.addDinosaur(trex1)
        park.addDinosaur(trex2)
        park.addDinosaur(allosaurus1)
        park.addDinosaur(allosaurus2)
        park.addDinosaur(velociraptor)
        park.removeDinosOfSpecies("Allosaurus")
        const actual = park.dinosaurs
        assert.deepStrictEqual(actual, [trex1, trex2, velociraptor])
    });

    it('should be able to calculate the total number of visitors per day', function () {
        park.addDinosaur(trex1)
        park.addDinosaur(trex2)
        park.addDinosaur(allosaurus1)
        park.addDinosaur(allosaurus2)
        park.addDinosaur(velociraptor)
        const actual = park.getTotalDailyVisitors()
        assert.strictEqual(actual, 980)
    });

    it('should be able to calculate the total number of visitors per year', function () {
        park.addDinosaur(trex1)
        park.addDinosaur(trex2)
        park.addDinosaur(allosaurus1)
        park.addDinosaur(allosaurus2)
        park.addDinosaur(velociraptor)
        const actual = park.getAnnualVisitors()
        assert.strictEqual(actual, 357700)
    });

    it('should be able to calculate total revenue for one year', function () {
        park.addDinosaur(trex1)
        park.addDinosaur(trex2)
        park.addDinosaur(allosaurus1)
        park.addDinosaur(allosaurus2)
        park.addDinosaur(velociraptor)
        const actual = park.getAnnualRevenue()
        assert.strictEqual(actual, 24681300)
    });

});
