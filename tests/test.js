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