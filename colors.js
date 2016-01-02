(function(color) {
    var fontsizes = {
        small: "font-size:9pt",
        medium: "font-size:10pt",
        large: "font-size:11pt",
        extralarge: "font-size:12pt"
    };

     var colors = {
      green:"color:green",
      red:"color:red;",
      magenta:"color:magenta;",
      cyan:"color:cyan;"
     };

//Default colors and styles
    var coloring = function(){};

    coloring.prototype.sgreen = function(consolelog) {
        console.log("%c" + consolelog + "", colors.green + fontsizes.small);
    };

    coloring.prototype.mgreen = function(consolelog) {
        console.log("%c" + consolelog + "", colors.green + fontsizes.medium);
    };

    coloring.prototype.lgreen = function(consolelog) {
        console.log("%c" + consolelog + "", colors.green + fontsizes.large);
    };
    coloring.prototype.elgreen = function(consolelog) {
        console.log("%c" + consolelog + "", colors.green + fontsizes.extralarge);
    };

    coloring.prototype.scyan = function(consolelog) {
        console.log("%c" + consolelog + "", colors.cyan + fontsizes.small);
    };

    coloring.prototype.mcyan = function(consolelog) {
        console.log("%c" + consolelog + "", colors.cyan + fontsizes.medium);
    };

    coloring.prototype.lcyan = function(consolelog) {
        console.log("%c" + consolelog + "", colors.cyan + fontsizes.large);
    };

    coloring.prototype.elcyan = function(consolelog) {
        console.log("%c" + consolelog + "", colors.cyan + fontsizes.extralarge);
    };

   color.coloring = new coloring();



}( window.color = window.color || {}));


