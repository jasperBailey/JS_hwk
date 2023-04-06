const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
    return this.alphabet.every(letter => this.phrase.toLowerCase().includes(letter))
}

module.exports = PangramFinder;
