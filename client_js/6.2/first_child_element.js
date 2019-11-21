let childElement = document.getElementById("food").firstElementChild;
while (childElement) {
  console.log(childElement.value);
  childElement = childElement.nextElementSibling;
}
