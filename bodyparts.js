function generate(){

var bodyparts = [
    "head",
    "eyes",
    "ears",
    "nose",
    "hands",
    "knees",
  ];

  var adjectives=[
      "cruel",
      "anxious",
      "lazy",
      "melancholic",
      "infatuated",
      "ecstatic",
      "desperate",
      "mischievous",
      "greedy",
      "malicious",
      "disillusioned",
      "vacant",
      "stubborn"
  ]


  var randomParts = bodyparts[Math.floor(Math.random()*bodyparts.length)];
  var randomAdjectives = adjectives[Math.floor(Math.random()*adjectives.length)];

  document.getElementById("demo").innerHTML = randomAdjectives+" "+randomParts;
  situation=document.getElementById("demo").innerHTML;
  printSituation=document.getElementById("result").innerHTML;
  printSituation=situation;
}