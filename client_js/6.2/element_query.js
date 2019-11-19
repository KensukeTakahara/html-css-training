const list = document.querySelectorAll("#list .external");
for (let i = 0; i < list.length; i++) {
  console.log(list.item(i).href);
}
