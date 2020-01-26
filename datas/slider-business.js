const ImageBusiness = require("./image-business");

// function getFullName(user) {
//   return user.first_name + " " + user.last_name;
// }

function getSliderNode(data) {
    const node = document.createElement("div");
    node.appendChild(ImageBusiness.getSlider(data));
    node.setAttribute("class", "c-img__wrapper slide-entry")
    return node;
}

export { getSliderNode };