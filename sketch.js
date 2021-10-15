
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

  for (var j = 0; j < number_of_rows; j += 1) {
    for (var i = 0; i < number_of_columns; i += 1) {
      var neighbours = 0;
      for (y = -1; y <= 1; y += 1) {
        for (x = -1; x <= 1; x += 1) {
          var wrapped_i = (i + x + number_of_rows) % number_of_rows;
					var wrapped_j = (j + y + number_of_columns) % number_of_columns;

          if (!(x == 0 && y == 0)) {
            var index = (wrapped_i) + (wrapped_j * number_of_columns);
            neighbours = grid_array[index];
          }
        }
      }

      // Applying CGoL rules:
      var index = i + (j * number_of_columns);
      // Rule 1. Any live cell with fewer than two live neighbors dies, as if caused by under population.
      if (grid_array[index] == 1 && neighbours < 2) {
				grid_array_2[index] = 0;
      }
      // Rule 2. Any live cell with two or three live neighbors lives on to the next generation.
			if (grid_array[index] == 1 && (neighbours == 2 || neighbours == 3)) {
				grid_array_2[index] = 1;
			}
			// Rule 3. Any live cell with more than three live neighbors dies, as if by overpopulation.
			if (grid_array[index] == 1 && neighbours > 3) {
				grid_array_2[index] = 0;
			}
			// Rule 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
			if (grid_array[index] == 0 && neighbours == 3) {
				grid_array_2[index] = 1;
			}

    } 

  }

  grid_array = grid_array_2

  drawFrame();
}

function drawFrame() {
  fill(255, 0, 0);
  textSize(cell_size);
  textAlign(LEFT);
  text(frameCount, cell_size/2, cell_size);
}
