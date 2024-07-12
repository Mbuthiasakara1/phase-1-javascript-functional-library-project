// myEach function
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}

// myMap function
function myMap(collection, callback) {
  let result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i));
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key));
      }
    }
  }

  return result;
}

// myReduce function
function myReduce(collection, callback, acc) {
  let initialAccSet = arguments.length > 2;

  if (Array.isArray(collection)) {
    if (!initialAccSet) {
      acc = collection[0];
      collection = collection.slice(1);
    }
    for (let val of collection) {
      acc = callback(acc, val, collection);
    }
  } else if (typeof collection === "object" && collection !== null) {
    let keys = Object.keys(collection);
    if (!initialAccSet) {
      acc = collection[keys[0]];
      keys = keys.slice(1); // Avoid modifying original keys array
    }
    for (let key of keys) {
      acc = callback(acc, collection[key], collection);
    }
  }

  return acc;
}

// myFilter function
function myFilter(collection, predicate) {
  let result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
  }

  return result;
}

// mySize function
function mySize(collection) {
  if (Array.isArray(collection) || typeof collection === "string") {
    return collection.length;
  } else if (typeof collection === "object" && collection !== null) {
    return Object.keys(collection).length;
  }
  return 0;
}

// myFirst function
function myFirst(array, n) {
  if (!n) return array[0];
  return array.slice(0, n);
}

// myLast function
function myLast(array, n) {
  if (!n) return array[array.length - 1];
  return array.slice(-n);
}

// myFind function
function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}

// myKeys function
function myKeys(object) {
  return Object.keys(object);
}

// myValues function
function myValues(object) {
  return Object.values(object);
}

// Example usage
const values = {
  one: 1,
  two: 2,
  three: 3,
};
const result = myValues(values);
console.log(result);
