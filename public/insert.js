const name = document.getElementById("name");
const desc = document.getElementById("desc");

const add = document.getElementById("add");
add.addEventListener("click", e => {
  const nameValue = name.value;
  const descValue = desc.value;
  const data = {
    nameValue,
    descValue
  };
  fetch("/add", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data)
  }).then(res=> res.json()).then(res=>{
    console.log(res);
      
  });
});
