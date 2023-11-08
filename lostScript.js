function searchTable() {
    const searchInput = document.getElementById("searchAnimal").value.toLowerCase();
    const table = document.querySelector("table");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const animalName = rows[i].getElementsByTagName("td")[3].textContent.toLowerCase();
        if (animalName.includes(searchInput)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
