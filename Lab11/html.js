let table = document.getElementById("table");

function getUsers() {
  fetch("https://dummyjson.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.users);
      for (let i = 0; i < data.users.length; i++) {
        let str = `
        <tr>
        <td>${data.users[i].firstName}</td>
        <td>${data.users[i].email}</td>
        <td>
        <img src='${data.users[i].image}'
        width='50px'
        </td>
      </tr>
        `;
        table.insertAdjacentHTML("beforeend", str);
      }
    })
    .catch((error) => console.log(error));
}
