
var number_of_rows = 200;
var number_of_columns = 200;
var grid_array = [];
let percent_chance_start = 1;
let cell_size = 40;

function setup() {  // Creates the page and grid
  createCanvas(800, 600);
  background(RGBA(0,0,0,1));
  stroke (200);
  frameRate (20);
  noFill(); rect(0,0, width -1, height -1);

  for (var j=0; j < number_of_rows; j += 1) {
    for (var i=0; i < number_of_columns; i += 1) {
      var index = i + (j * number_of_columns);

      grid_array[index] = 0;
      if (random() < percent_chance_start) {
        grid_array[index] = 1;
      }
    }
  }
}

function draw() {
  for (var j=0; j < number_of_rows; j += 1) {
    for (var i=0; i < number_of_columns; i += 1) {

      var index = i + (j * number_of_columns);

      var cell_value = grid_array[index];
      fill((1 - cell_value) * 255);
      rect(i * cell_size, j * cell_size, cell_size, cell_size);

    } 
  }

  var grid_array_2 = [];
	for (var j = 0; j < number_of_rows; j += 1) {
		for (var i = 0; i < number_of_columns; i += 1) {
			var index = i + (j * number_of_columns);
			grid_array_2[index] = 0;
  }
}