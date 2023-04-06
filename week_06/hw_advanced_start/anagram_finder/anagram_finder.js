const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
        if (word === this.word){
            return false
        }
        return word.toLowerCase().split('').sort().join('') 
            === this.word.toLowerCase().split('').sort().join('')
    })
}

module.exports = AnagramFinder;
