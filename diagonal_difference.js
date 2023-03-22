const input = [[0,15,2,1],[8,9,8,5],[3,3,16,7],[12,5,22,5]];

function diagonalDifference(matrix){
    let left2right = 0;
    let right2left = 0;
    for(let i=0; i<matrix.length; i++){
        left2right += matrix[i][i];
        right2left += matrix[i][matrix.length-i-1];
    }
    return Math.abs(left2right - right2left);
}

console.log(diagonalDifference(input))