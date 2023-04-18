const students = [
  {
    id: 1,
    name: "KanD",
    email: "asdasd@email.com",
    phone: 080123123,
    street: "HCM",
    gender: "Male",
  },
  {
    id: 2,
    name: "ST",
    email: "asdddddd@email.com",
    phone: 08012333,
    street: "HN",
    gender: "FeMale",
  },
];
let table = document.getElementById("table");
let form = document.getElementById("form");
let tr = document.getElementById("tr");


let checkk = null;
let gender = document.querySelectorAll('input[name="gender"]');
gender.forEach(function (input) {
  input.addEventListener("click", function (e) {
    checkk = e.target.value;
    e.target.setAttribute("checked", "checked");

    console.log(checkk);
  });
});

function renderWork() {
  table.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    table.innerHTML =
      table.innerHTML +
      `
<tr>
<td>${students[i].id}</td>
  <td>${students[i].name}</td>
  <td>${students[i].email}</td>
  <td>${students[i].phone}</td>
  <td>${students[i].street}</td>
  <td>${students[i].gender}</td>
  <td>
  <button data-id="${students[i].id}" style='padding:6px;border-radius:4px;border:none;background-color:green' class="btn btn-update">Edit</button>
      <button data-id="${students[i].id}" style='padding:6px;border-radius:4px;border:none;background-color:red' class="btn btn-delete">Delete</button>
      
  </td>
  </tr>
`;
  }
}
renderWork();
form.onclick = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    let fname = form.name.value;
    let email = form.email.value;
    let phone = form.phone.value;
    let street = form.street.value;
    let gender = checkk;

    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>1</td>
  <td>${fname}</td>
  <td>${email}</td>
  <td>${phone}</td>
  <td>${street}</td>
  <td>${gender}</td>
  <td>
  <button  style='padding:6px;border-radius:4px;border:none;background-color:green' class="btn btn-update">Edit</button>
  <button  style='padding:6px;border-radius:4px;border:none;background-color:red' class="btn btn-delete">Delete</button>

  </td>
  `;
    table.appendChild(trElement);
    let student = {
      id: 1,
      name: fname,
      email: email,
      phone: phone,
      street: street,
      gender: checkk,
    };
    students.push(student);
    renderWork();
  }
};
table.onclick = function (e) {
  if (e.target.classList.contains("btn-delete")) {
    e.target.parentElement.parentElement.remove();

  }
  if (e.target.classList.contains("btn-update")) {
    let studentId  = e.target.getAttribute("data-id") - 1;
    form.innerHTML = `
        <ul>
                    <li><label for="name">Họ và tên</label>
                        <input type="text" id="name" value=${students[studentId].name}>
                    </li>

                    <li> <label for="email">Email</label>
                        <input type="email" id="email"value=${students[studentId].email}>
                    </li>
                    <li> <label for="phone">Số điện thoại</label>
                        <input type="text" id="phone" value=${students[studentId].phone}>
                    </li>
                    <li> <label for="street">Quê quán</label>
                        <input type="text" id="street" value=${students[studentId].street}>
                    </li>
                    <li>
                        <label>Giới tính</label>
                        <div>
                            <input type="radio" name="gender" id="gender_Male" value="Male" />
                            <label for="gender_Male">Nam</label>
                            <input type="radio" name="gender" id="gender_Female" value="Female" />
                            <label for="gender_Female">Nữ</label>
                        </div>


                    </li>


                </ul>
                <button class="btn" id="btn-updateNew">Cập nhật</button>
        `;
       
    form.querySelector(".btn-updateNew").addEventListener("click", (e) => {
        students[studentId].name = form.name.value;
        students[studentId].email = form.email.value;
        students[studentId].phone = form.phone.value;
        students[studentId].street = form.street.value;
    });
    renderWork();
  }
};
let sapxep = document.getElementById('sapxep');

sapxep.onclick = (e) => {

};
