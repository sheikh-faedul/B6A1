
// problem-1

type ValueType = string | number | boolean;

function formatValue(value: ValueType): ValueType {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }

    return !value;
}
// ---------

// problem-2

type typeValue = string | any[];

function getLength(value: typeValue): number {
    if (typeof value === "string") {
        return value.length
    }
    else if (Array.isArray(value)) {
        return value.length
    }
    return 0;
}
//  -------------------

// problem 3

class Person {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails():string{
        return `Name: ${[this.name]} Age: ${[this.age]}`
    }
}
//   ---------------------------

// problem4

interface IbookItems{
    title:string;
    rating:number;
}

function  filterByRating(items:IbookItems[]):IbookItems[]{
    const filterItem= items.filter(item =>item.rating >=4);
     return filterItem
}

 