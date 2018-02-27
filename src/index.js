module.exports = function longestConsecutiveLength(array) {
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    array.sort(compareNumeric);

    var obj = {};
    var result = 0;

    for (var i = 0; i < array.length; i++) {
        var num = array[i];

        obj[num] = 1;


        if (obj[num - 1] && obj[num] < obj[num - 1] + 1) {
            obj[num] = obj[num - 1] + 1;
        }
        result = obj[num] > result ? obj[num] : result;
    }
    return result;
}