/**
 * Export
 */
var exports = module.exports = {}

/**
 * Calculate the area of a square
 * 
 * @param {*} side_a 
 */
exports.squareArea = function(side_a) {
	return side_a * side_a;
}

/**
 * Calculate the perimeter of a square
 * 
 * @param {*} side_a 
 */
exports.squarePerimeter = function(side_a) {
	return side_a * 4;
}

/**
 * Calculate the are of a rectangle
 * 
 * @param {*} length 
 * @param {*} width 
 */
exports.rectangleArea = function(length, width){
	return length * width;
}

/**
 * Calculate the perimeter of a rectangle
 * 
 * @param {*} length 
 * @param {*} width 
 */
exports.rectanglePerimeter = function(length, width){
	return (2 * length) + (2 * width);
}

/**
 * Calculate the are of a triangle
 * 
 * @param {*} base 
 * @param {*} altitutde 
 */
exports.triangleArea = function(base, altitutde){
	return (base * altitutde) / 2;
}

/**
 * Calculate the perimeter of a triangle
 * 
 * @param {*} side_1 
 * @param {*} side_2
 * @param {*} side_3
 */
exports.trianglePerimeter = function(side_1,side_2,side_3){
	return side_1 + side_2 + side_3;
}