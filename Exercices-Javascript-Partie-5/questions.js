var languagesArrayCreation = function () {
  var languages = ['Html', 'CSS', 'Java', 'PHP'];
  return languages ;
}

var numbersArrayCreation = function () {
    var numbers = [ 0, 1, 2, 3, 4, 5 ];
    return numbers;
}

var ElementReplacement = function (languages) {
  //var languages = ['Html', 'CSS', 'Java', 'PHP'];
  languages.splice(2, 1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  //var languages = ['Html', 'CSS', 'Javascript', 'PHP'];
  languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  //var numbers = [ 0, 1, 2, 3, 4, 5 ];
  numbers.unshift(-2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  //var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
  // languages.splice(0, 1);
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  //var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
  // languages.splice(4, 1);
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  return socialMediaInString.split(',');
}

var arrayToString = function (languages) {
  return languages.toString();
}

var arraySort = function (socialMedia) {
  //var socialMedia = [ 'Facebook', 'Google +', 'LinkedIn', 'Twitter', 'Viadeo' ];
  return socialMedia.sort();
}

var arrayInvert = function (languages){
  //var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
  return languages.reverse();
}
