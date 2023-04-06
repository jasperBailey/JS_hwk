const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.split('').every(letter => this.word.indexOf(letter.toLowerCase())===this.word.lastIndexOf(letter.toLowerCase()))
}

module.exports = IsogramFinder;
