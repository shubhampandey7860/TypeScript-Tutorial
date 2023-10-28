/* 
An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric. Lets start with numeric.

*/

enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

let myDirection: Direction = Direction.Right;
console.log(myDirection); 



enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);


enum CardinalDirections{
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);


export{};
  
