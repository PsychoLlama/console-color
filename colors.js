(function(color) {
    var fontsizes = {
        small: "font-size:9pt",
        medium: "font-size:10pt",
        large: "font-size:11pt",
        extralarge: "font-size:12pt"
    };

     var colors = {
      red:"color:red;",
      green:"color:green;",
      magenta:"color:magenta;",
      cyan:"color:cyan;"
     };

    var defaultcolors = function(){};

    defaultcolors.prototype.sgreen = function(consolelog) {
        console.log("%c" + consolelog + "", colors.green + fontsizes.small);
    };

    defaultcolors.prototype.mgreen = function(consolelog) {
        console.log("%c" + consolelog + "", colors.green + fontsizes.medium);
    };

   color.RUNNING = new defaultcolors();


}( window.color = window.color || {}));


