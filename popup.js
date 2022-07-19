window.addEventListener(
  "load",
  function () {
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
      url = tabs[0].url;
      document.getElementById("result").innerHTML = url;
    });
  },
  false
);
