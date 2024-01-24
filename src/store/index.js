import { proxy } from "valtio";

const state = proxy({
    intro : true, //are we currently on the home page or are we not?
    color : '#EFBD48',
    isLogoTexture :true,
    isFullTexture : false,
    logoDecal : '/logo.png',
    fullDecal : './logo.png'
});

export default state