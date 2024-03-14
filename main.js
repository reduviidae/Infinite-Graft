inPlayItemList = document.getElementsByClassName('item instance');
arr = [];

for (let element of inPlayItemList) {
  arr.push(element.textContent.replace(/\W/, ''))
}

console.log(arr);
console.log("hey this shit is working as expected")
const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
    let [resource, config ] = args;
  
    // request interceptor here
    const response = await originalFetch(resource, config);
    // response interceptor here
    console.log(response);
};

document.addEventListener("fetch", function(event) {
    console.log("resource", event);
}, true);


// Evan discovered that there is a hidden Water tile that populates on a fresh screen.
// This application should click on the broom to clear the screen first.
// Then, it will look for existing 'item instance' class tiles from last session and will collect them.
// The collection process will get called every time a drag operation is done.