const items = document.getElementsByTagName("a");
for (let i = 0; i < items.length; i++) {
  console.log(items.item(i).href);
}
