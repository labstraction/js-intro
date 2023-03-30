console.log('viva!!')

const lastElement = {
    value: 10,
    next: null
}
const thirdElement = {
    value: 15,
    next: lastElement
}
const secondElement = {
    value: 5,
    next: thirdElement
}
const firstElement = {
    value: 12,
    next: secondElement
}

let element = firstElement;
while (true) {
    console.log(element.value);
    if (element.next !== null) {
        element = element.next;
    } else {
        break;
    }
}

function fromLinkedListToArray(first) {
    let tempArray = [];
    let element = first;
    while (true) {
        tempArray.push(element.value);
        if (element.next !== null) {
            element = element.next;
        } else {
            break;
        }
    }
    return tempArray;
}

console.log(fromLinkedListToArray(firstElement));


const myArray = ['pippo', 'pluto', 'paperino']
function fromArrayToLinkedList(array) {

    let previosElement = null;
    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        const listElement = {
            value: element,
            next: previosElement
        }
        previosElement = listElement;
    }
    return previosElement;
}

console.log(fromArrayToLinkedList(myArray))

function prependListElement(first, newElement) {
    const listElement = {
        value: newElement,
        next: first,
    }
    return listElement;
}


console.log(prependListElement(firstElement, 100000));

function listElementAtIndex(first, index) {
    let element = first;
    let i = 0;
    while (true) {
        if (i === index) {
            return element.value;
        }else if (element.next) {
            element = element.next;
            i++;
        } else {
            return undefined;
        }
    }
}

console.log(listElementAtIndex(firstElement,0));
console.log(listElementAtIndex(firstElement,3));
console.log(listElementAtIndex(firstElement,10));