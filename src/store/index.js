import { proxy } from "valtio";

const state = proxy({
    intro : true, //are we currentlyon the home page or are we not?
    color : '#EFBD48',
    isLogoTexture :true,
    isFullTexture : false,
    logoDecal : '/threejs.png',
    fullDecal : './threejs.png'
});

export default state