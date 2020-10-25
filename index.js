
function solution(A, X) {
    var N = A.length;
    if (N === 0) {
        return -1;
    }
    var l = 0;
    var r = N - 1;
    while (l < r) {
        // var m = Math.floor((l + r) / 2); -- Original line of code, changed to Math.ceil
        var m = Math.ceil((l + r) / 2);
        if (A[m] > X) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    if (A[l] == X) {
        return l;
    }
    return -1;
}

console.log(solution([1, 5, 6, 8, 15], 6))