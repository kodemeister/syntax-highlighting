class Shape {
  name = ""

  constructor(name) {
    this.name = name;
  }
}

class Rectangle extends Shape {
  width = 0
  height = 0

  constructor(name, width, height) {
    super(name);
    this.width = width > 0 ? width : 0;
    this.height = height > 0 ? height : 0;
  }

  area() {
    return this.width * this.height;
  }
}

const createShape = (type, ...args) => {
  switch (type) {
    case "Rectangle":
      return new Rectangle(...args);
    default:
      throw new Error("Invalid shape type");
  }
}

const obj = {
  id: parseInt(10),
  regexp: /^foo[a-zA-z_-]+\s*\(\d+\)$/i,
  shape: createShape("Rectangle", "foo", 3, 4)
}

console.log(`Shape name: ${obj.shape.name}\n`);
console.log(`Shape area: ${obj.shape.area()}\n`);
