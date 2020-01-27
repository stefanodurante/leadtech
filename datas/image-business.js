function getSlider(data) {
    const img = document.createElement("img");
    img.setAttribute("class", "c-img");
    img.src = data.image;

    return img;
}

export { getSlider };