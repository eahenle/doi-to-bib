doi_to_bib = function(word) {
    chrome.tabs.create(
        {
            url: "https://doi2bib.org/bib/" + word.selectionText
        }
    )
}

chrome.contextMenus.removeAll(
    function() {
        chrome.contextMenus.create(
            {
                id: "1",
                title: "doi2bib",
                contexts:["selection"]
            }
        )
    }
)

chrome.contextMenus.onClicked.addListener(doi_to_bib)
