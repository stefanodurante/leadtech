import * as SliderBusiness from "./datas/slider-business.js"
import * as DataBusiness from "./datas/data-business.js";

const sliders = DataBusiness.getDatas();

const nodes = [];


for (let data of sliders) {
    const node = SliderBusiness.getSliderNode(data);
    nodes.push(node);
}

for (let node of nodes) {
    document.getElementById("img").append(node);
}