let nilai = [8, 3, 9, 2, 5];

function linearSearch(arr,target) {
    for (let i = 0; i < Array.length; i++)
        if (arr[i] === target) {
            return i;
        }
        return false;
}

console.log(linearSearch(number, 3));
console.log(linearSearch(number, 1))
