document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('helloWorld');
    checkPageButton.addEventListener('click', function() {
        alert("Hello world");

        // chrome.tabs.getSelected(null, function(tab) {
        //     alert("1");
        // });
    });
});