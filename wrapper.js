(function() {
    const currentScript = document.currentScript;
    const REACT_URL = currentScript.dataset.reactUrl || "http://localhost:3000";

    let iframeReady = false;
    let queue = [];

    window.addEventListener("message", (event) => {
        if (!iframeReady) {
            queue.push(event.data);
            return;
        }
        document.getElementById("react").contentWindow.postMessage(event.data, "*");
    });

    function onIframeLoad() {
        iframeReady = true;
        const iframe = document.getElementById("react").contentWindow;
        queue.forEach(data => iframe.postMessage(data, "*"));
        queue = [];
    }

    function createIframe() {
        console.log(`[wrapper] Loading UI from: ${REACT_URL}`);
        const iframe = document.createElement("iframe");
        iframe.id = "react";
        iframe.src = REACT_URL;
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100vw";
        iframe.style.height = "100vh";
        iframe.style.border = "0";

        iframe.onload = onIframeLoad;

        document.body.appendChild(iframe);
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
        createIframe();
    } else {
        document.addEventListener("DOMContentLoaded", createIframe);
    }
})();
