const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  switch(strokes)
  {
    case 1:
      return names[0]
  // shu yerda ishlamay qolishi mumkin
    case strokes<=par-2:
      return names[1]
    case par-1:
      return names[2]
    case par:
      return names[3]
    case par+1:
      return names[4]
    case par+2:
      return names[5]
    default:
      return names[6]
  }
}

var res = golfScore(5, 2);
console.log(res)