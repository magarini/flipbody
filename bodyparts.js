function generate(){

var bodyparts = [
    "legs",
    "hips",
    "belly",
    "chin",
    "arms",
    "fingers",
    "knees",
    "mouth",
    "pelvis",
    "back",
    "head",
    "face",
    "feet",
    "spine",
    "tongue",
    "wrists",
    "neck",
    "shoulders",
    "chest",
    "cage",
    "ankles",
    "thighs",
    "toes",
    "eyes",
    "elbows",
    "breasts",
    "skull"
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
      "stubborn",
      "sassy",
      "goofy",
      "exhausted",
      "forgetful",
      "furious",
      "zealous",
      "whimsical",
      "hesitant",
      "clumsy",
      "wild",
      "suspicious",
      "vulgar",
      "intoxicated",
      "elated"
  
  ]


  var randomParts = bodyparts[Math.floor(Math.random()*bodyparts.length)];
  var randomAdjectives = adjectives[Math.floor(Math.random()*adjectives.length)];

  document.getElementById("demo").innerHTML = randomAdjectives+" "+randomParts;
  situation=document.getElementById("demo").innerHTML;
  printSituation=document.getElementById("result").innerHTML;
  printSituation=situation;
}