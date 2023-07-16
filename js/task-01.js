const element = document.querySelector("#categories");
console.log(`Number of categories: ${element.children.length}`);
[...element.children].forEach(element => {
    console.log("Category ",element.querySelector("h2").textContent)
    console.log("Elements ",element.querySelectorAll("li").length)
});
