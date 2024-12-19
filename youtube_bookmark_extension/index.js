async function sayHello() {
    let [tab] = await chrome.tabs.query({active:true})
    chrome.scripting.executeScript({
        target: {tabId: tab.id },
        func: () => {
            alert('Hello from the extended universe!');
        }
    });
}

document.getElementById("myButton").addEventListener("click",sayHello);