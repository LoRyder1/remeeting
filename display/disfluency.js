/**
 * Please refactor this js code to display segments without disfluencies. You are free to refactor any/all of the
 * functions, expressions, etc.
 */
var segments = ['this is ah a really hard um', 'thing to uh do here', 'uh-huh', 'there is no um thing to do', 'um uh', 'uh but were is there something'];

document.getElementById('addSegment').addEventListener("click", addSegment);

render(segments);

function render (segments) {
  segments.forEach(function(segment){
    document.getElementById('transcript').appendChild(document.createTextNode(segment));
  });
}

function addSegment (event) {
  document.getElementById('transcript').appendChild(document.createTextNode(document.getElementById('newSegmentText').value));
  segments.push(document.getElementById('newSegmentText').value);
}

/**
 * Assertions - To help you get started, below are some basic assertions that you can make pass if you so choose.
 * Once again, these aren't binding, delete them, change them, add to them as you see fit.
 * we're looking at what gets displayed for this question.
 *
 * Disfluencies for the purpose of this quiz are : um uh ah uh-huh ah-hah
 */

function stripDisfluencies () {}

function test (inputString, expectedOutputString) {
  return stripDisfluencies(inputString) === expectedOutputString;
}

console.log(test('this', 'this'));
console.log(test('this uh', 'this'));
console.log(test('uh this', 'this'));
console.log(test('this uh is uh there', 'this is there'));