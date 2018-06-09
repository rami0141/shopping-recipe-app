// Blue print for objects we create - this is a typescript file
// Defining how a recipe should look like in this class
export class Recipe {
 // declaring a variable type - property name ":" and then type ";"
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
