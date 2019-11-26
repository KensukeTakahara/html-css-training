document.addEventListener(
  "DOMContentLoaded",
  function() {
    const getRadioValue = name => {
      let result = "";
      let foods = document.getElementsByName(name);
      for (let i = 0, len = foods.length; i < len; i++) {
        const food = foods.item(i);
        if (food.checked) {
          result = food.value;
          return result;
        }
      }
    };
    document
      .getElementById("btn")
      .addEventListener(
        "click",
        () => window.alert(getRadioValue("food")),
        false
      );
  },
  false
);
