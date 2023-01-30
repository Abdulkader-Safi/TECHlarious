// 1: Create a function that act as the built in replaceAll function
function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}

// 2: Create a function that act as the built in concat function
function concat(...args) {
  return args.join("");
}
