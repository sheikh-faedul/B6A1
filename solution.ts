
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
    getDetails(): string {
        return `Name: ${[this.name]} Age: ${[this.age]}`
    }
}
//   ---------------------------

// problem4

interface IbookItems {
    title: string;
    rating: number;
}

function filterByRating(items: IbookItems[]): IbookItems[] {
    const filterItem = items.filter(item => item.rating >= 4);
    return filterItem
}

//  -----------------

// problem 5

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    const activeUser = users.filter(user => user.isActive);
    return activeUser;
}
//   --------------------
// problem 6

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book) {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
    );
}

// --------------------------
// problem 7

function getUniqueValues<T>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];
    function exists(value: T, array: T[]): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i], result)) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i], result)) {
            result.push(arr2[i]);
        }
    }

    return result;
}

// ----------------
// problem 8

 interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
   const finalPrices = products.map((product) => {
     const basePrice = product.price * product.quantity;
    const discountPercent = product.discount ?? 0;

    if (discountPercent > 0 && discountPercent <= 100) {
       const discountMultiplier = 1 - (discountPercent / 100);
      return basePrice * discountMultiplier;
    }
    return basePrice;
  });

   const total = finalPrices.reduce((sum, currentPrice) => {
    return sum + currentPrice;
  }, 0); 

  return total;
}



