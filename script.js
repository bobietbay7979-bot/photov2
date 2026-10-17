function upDate(previewPic) {
    console.log("The upDate event was triggered.");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    document.getElementById("image").textContent = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("The unDo event was triggered.");

    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").textContent =
        "Hover over or focus on an image below to display it here.";
}

function addTabFocus() {
    console.log("The addTabFocus onload event was triggered.");

    const images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
