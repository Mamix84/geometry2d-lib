var test = require("tape")
var geometry = require("../")

test("geometry.squareArea", function(assert) {
    var a = 5

    assert.equals(geometry.squareArea(a), 25)
    assert.end()
})

test("geometry.squarePerimeter", function(assert) {
    var a = 5

    assert.equals(geometry.squarePerimeter(a), 20)
    assert.end()
})

test("geometry.rectangleArea", function(assert) {
    var a = 5
    var b = 10

    assert.equals(geometry.rectangleArea(a,b), 50)
    assert.end()
})

test("geometry.rectanglePerimeter", function(assert) {
    var a = 5
    var b = 10

    assert.equals(geometry.rectanglePerimeter(a,b), 30)
    assert.end()
})

test("geometry.triangleArea", function(assert) {
    var a = 5
    var b = 10

    assert.equals(geometry.triangleArea(a,b), 25)
    assert.end()
})

test("geometry.trianglePerimeter", function(assert) {
    var a = 5
    var b = 10
    var c = 15

    assert.equals(geometry.trianglePerimeter(a,b,c), 30)
    assert.end()
})