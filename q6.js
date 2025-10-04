
(function () {
    // Helper: current timestamp in ISO format
    function getTimestamp() {
        return new Date().toISOString();
    }

    // Helper: describe the clicked/seen element
    function describeElement(el) {
        if (!el || !el.tagName) return "unknown";
        const tag = el.tagName.toLowerCase();
        if (tag === "img") return "image";
        if (tag === "a") return "link";
        if (tag === "button") return "button";
        if (tag === "select") return "drop_down";
        if (tag === "input") return "text_input";
        return tag;
    }

    // Generic logger
    function logEvent(type, el) {
        console.log({
            timestamp: getTimestamp(),
            type_of_event: type,             // "click" or "view"
            event_object: describeElement(el),
            tag: el?.tagName?.toLowerCase() || null,
            id: el?.id || null,
            classes: el?.className || null
        });
    }

    // 1) Log page view when page loads
    window.addEventListener("load", () => {
        logEvent("view", document.body);
    });

    // 2) Log every click on the document
    document.addEventListener("click", (e) => {
        logEvent("click", e.target);
    });
})();
