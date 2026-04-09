let data = [];

function tambahData() {
  let judul = document.getElementById("judul").value;
  let klik = parseInt(document.getElementById("klik").value);
  let income = parseInt(document.getElementById("income").value);

  let obj = {judul, klik, income};
  data.push(obj);

  updateTable();
  updateSummary();
}

function updateTable() {
  let table = document.getElementById("table");

  table.innerHTML = `
  <tr>
    <th>Judul</th>
    <th>Klik</th>
    <th>Income</th>
  </tr>`;

  data.forEach(d => {
    table.innerHTML += `
    <tr>
      <td>${d.judul}</td>
      <td>${d.klik}</td>
      <td>Rp ${d.income}</td>
    </tr>`;
  });
}

function updateSummary() {
  let totalVideo = data.length;
  let totalKlik = data.reduce((a,b)=>a+b.klik,0);
  let totalIncome = data.reduce((a,b)=>a+b.income,0);

  document.getElementById("totalVideo").innerText = totalVideo;
  document.getElementById("totalKlik").innerText = totalKlik;
  document.getElementById("totalIncome").innerText = "Rp " + totalIncome;
}
