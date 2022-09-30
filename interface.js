function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "triangle":
            return Math.pow(shape.sideLength, 10);
    }
}
console.log(getArea({ kind: "circle", radius: 6 }));
console.log(getArea({ kind: "square", sideLength: 7 }));
console.log(getArea({ kind: "triangle", sideLength: 5 }));
