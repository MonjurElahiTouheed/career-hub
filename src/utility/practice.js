const array = [
    {id: 1, name: 'first obj'},
    {id: 2, name: 'second obj'}, 
    {id: 3, name: 'third obj'},
    {id: 4, name: 'fourth obj'},
    {id: 5, name: 'fifth obj'}
];

const array2 = [3, 4, 6];

const filteredArrays = array.filter(obj => array2.includes(obj.id));
console.log(filteredArrays);

const applyJob = []
for (let obj of array2){
    const arrObj = array.find(arr => arr.id === obj);
    if(arrObj) {
        applyJob.push(arrObj);
    }
}

console.log(applyJob)

console.log(array2.includes(array[2].id))