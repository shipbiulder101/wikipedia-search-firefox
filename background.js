//create menu items
browser.menus.create({
    id: "search-wikipedia",
    title: "Search Wikipedia for selected text",
    contexts: ["Selection"]
});

//handler for clicks
browser.menus.onClicked.addListener(info, tab) => {
    switch(info.menuItemId){
        case "search-wikipedia":
            console.log("Search initiated");
            var sel = Window.getSelection;
            var searchTerm = sel.toString();
            var creating = browser.tabs.create({
                url: "https://en.wikipedia.org/w/index.php?search=" + searchTerm,
                active: true
            })
    }
}