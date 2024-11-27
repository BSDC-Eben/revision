console.log("script running")

function search() {
    // grabs the value from the search input
    searchedItem = document.getElementById("searchInput").value;
    // checks if the value is empty
    if (searchedItem == "") {
        return
    }
    console.log(searchedItem)
    // clears the value
    document.getElementById("searchInput").value = "";
}