// Obtén la tabla de la matriz
const matrixTable = document.querySelector('.matrix');
const matrix = [];

// Función para crear una fila de botones
function createRow(row) {
    const tr = document.createElement('tr');
    const rowArray = [];
    for (let j = 0; j < 5; j++) {
        const td = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = (row * 5) + j + 1; // Número del botón

        // Agrega un evento de clic para cada botón
        button.addEventListener('click', () => {
            console.log("Hiciste clic en un botón"); // Prueba de clic
            toggleSelection(row, j);
        });

        td.appendChild(button);
        tr.appendChild(td);
        rowArray.push(button);
    }
    matrixTable.appendChild(tr);
    return rowArray;
}

// Llena la matriz de botones
for (let i = 0; i < 10; i++) {
    matrix[i] = createRow(i);
}

// Matriz para llevar un registro de si las filas y columnas están habilitadas
const rowsEnabled = new Array(10).fill(true);
const colsEnabled = new Array(5).fill(true);

// Función para habilitar/deshabilitar fila y columna
function toggleSelection(row, col) {
    // Verificar si la fila y columna no están deshabilitadas
    if (rowsEnabled[row] && colsEnabled[col]) {
        // Cambiar el estado de la fila y columna
        rowsEnabled[row] = false;
        colsEnabled[col] = false;

        // Cambiar el estilo del botón para indicar que está deshabilitado
        matrix[row][col].classList.add('disabled'); // Agrega una clase CSS 'disabled'
    }
}

// Implementa la lógica para seleccionar hasta 5 puntos aleatorios
function selectRandomPoints() {
    let selectedPoints = 0;

    while (selectedPoints < 5) {
        // Generar un número aleatorio entre 1 y 50 (sin contar los espacios deshabilitados)
        const randomIndex = Math.floor(Math.random() * 50);

        // Convertir el índice en coordenadas de fila y columna
        const row = Math.floor(randomIndex / 5);
        const col = randomIndex % 5;

        // Verificar si la fila y columna no están deshabilitadas
        if (rowsEnabled[row] && colsEnabled[col]) {
            // Llamar a la función para habilitar/deshabilitar
            toggleSelection(row, col);
            selectedPoints++;
        }
    }
}


