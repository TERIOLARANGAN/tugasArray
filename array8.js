let twitter = [];
function uploadTweet() {
let tweet = document.getElementById("tulisanUser").value;
twitter.push(tweet)

document.getElementById("hasilTulisanUser").innerHTML = twitter;
}