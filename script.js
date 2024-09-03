
function linearSearch(arr,target) {

if (!Array.isArray(arr)) {
    return "Input pertama harus berupa array";
if (typeof target !== 'number') {
    return "input kedua harus berupa angka";
    }
}
    for (let i = 0; i < Array.length; i++)
        if (arr[i] < min) {
            return i;
        }
        return false;
}

let number = linearSearch ([8, 3, 9, 2, 5]);

console.log(linearSearch(number, 3));
console.log(linearSearch(number, 1));
console.log(linearSearch(number, "h"));
