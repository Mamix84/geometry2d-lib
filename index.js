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