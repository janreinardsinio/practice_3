const labels = document.querySelectorAll(".node-label");

labels.forEach(function(label) {

    label.addEventListener("click", function(event) {

        event.stopPropagation();

        // Remove previous highlight
        labels.forEach(function(item) {
            item.classList.remove("selected");
        });

        // Highlight only clicked text
        this.classList.add("selected");

        // Get selected element
        const selectedNode = this.parentElement;

        // Get parent element
        const parent = selectedNode.parentElement.parentElement;

        // Get previous sibling
        const previous = selectedNode.previousElementSibling;

        // Get next sibling
        const next = selectedNode.nextElementSibling;

        // Count immediate child elements
        const children = selectedNode.children.length;

        // Display selected node
        document.getElementById("selected").textContent =
            this.textContent;

        // Display parent tag
        document.getElementById("parent").textContent =
            parent.tagName;

        // Display previous sibling
        document.getElementById("previous").textContent =
            previous
            ? previous.querySelector(":scope > .node-label").textContent
            : "None";

        // Display next sibling
        document.getElementById("next").textContent =
            next
            ? next.querySelector(":scope > .node-label").textContent
            : "None";

        // Display immediate children
        document.getElementById("children").textContent =
            children;

    });

});