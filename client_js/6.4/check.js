document.addEventListener(
  "DOMContentLoaded",
  function() {
    document.getElementById("btn").addEventListener(
      "click",
      () => {
        let result = [];
        let foods = document.getElementsByName("food");
        for (let i = 0, len = foods.length; i < len; i++) {
          const food = foods.item(i);
          if (food.checked) {
            result.push(food.value);
          }
        }
        window.alert(result.toString());
      },
      false
    );
  },
  false
);
