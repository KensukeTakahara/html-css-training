document.addEventListener(
  "DOMContentLoaded",
  function() {
    document.getElementById("btn").addEventListener(
      "click",
      () => {
        let name = document.getElementById("name");
        console.log(name.value);
      },
      false
    );
  },
  false
);
