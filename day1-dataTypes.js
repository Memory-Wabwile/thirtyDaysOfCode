// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
  // Declare second integer, double, and String variables.
var first ;
 var second ;
 var third;
    // Read and save an integer, double, and String to your variables.
var first = parseInt(readLine());
var second = parseFloat(readLine());
var third = readLine();

    // Print the sum of both integer variables on a new line.
    console.log(i + first );

    // Print the sum of the double variables on a new line.
    console.log((d + second).toFixed(1));

    // Concatenate and print the String variables on a new line
    console.log (s + third)
    // The 's' variable above should be printed first.
    

}