
//Controls the diffrent font sizes
var fontsizes = {
    small:"font-size:9pt",
    medium:"font-size:10pt",
    larg:"font-size:11pt",
    extralarge:"font-size:12pt"
};



var def = function (consolelog){
    console.log("%c" + consolelog + "","color:green; font-weight:bold;" + fontsizes.larg);
};


def.prototype.yellow = function (consolelog){
    console.log("%c" + consolelog + "","color:yellow;" + fontsizes.extralarge);
};

obj = new def();