// document.getElementById(SentenceFrom).addEventListener("submit",function (event) {
    // document.getElementById("sentenceForm").addEventListener("submit", function (event) {
    // event.preventDefault();
    document.getElementById("sentenceForm").addEventListener("submit" , function(event) {
        event.preventDefault();
    var userSentence = document.getElementById('sentence').value.trim();
    var words=userSentence.split(" ");
    var sentenceReverse=words.reverse();
    var sentenceJoin=sentenceReverse.join(" ");
    document.getElementById("reversedSentence").innerText=sentenceJoin;

});