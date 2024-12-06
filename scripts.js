console.log("script running")

function search() {
    // grabs the value from the search input
    searchedItem = document.getElementById("searchInput").value;
    // checks if the value is empty
    if (searchedItem == "") {
        return
    }
    // clears the value
    document.getElementById("searchInput").value = "";
    // puts the searched item in url to take to new page
    document.location.href = `search.html#${searchedItem}`
    loadSearch()
}

function loadSearch() {
    // takes the searched item from url to a variable
    searchedItem = document.location.href.slice(document.location.href.indexOf("#") + 1)
    searchedItem = searchedItem.replaceAll("%20", " ")
    // sets the h1 as the searched item
    document.getElementById("searchName").innerHTML = searchedItem
}