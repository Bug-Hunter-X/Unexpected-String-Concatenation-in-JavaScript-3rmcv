function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Error: Inputs must be numbers.');
    return NaN; // Or handle it another way, like returning a default value
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Error: Inputs must be numbers. NaN