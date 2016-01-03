(function(color) {
        var fontsizes = {
        small: "font-size:9pt",
        medium: "font-size:10pt",
        large: "font-size:11pt",
        extralarge: "font-size:12pt"
    };

         color.colors = {
         red:"color:red;",
         green:"color:green;",
         gold:"color:gold;",
         blue:"color:blue;",
         magenta:"color:magenta;",
         cyan:"color:cyan;",
         gray:"color:gray;"

     };

      color.styles = {
      redbackground:"background:red;",
      greenbackground:"background:green;",
      goldbackground:"background:gold;",
      bluebackground:"background:blue;",
      magentabackground:"background:magenta;",
      cyanbackground:"background:cyan;",
      graybackground:"background:gray;"
    };


//Default colors and styles
    var coloring = function(){};

    coloring.prototype.sblue = function(consolelog,background,color) {
        console.log("%c" + consolelog + "", background + color + fontsizes.small);
    };

    coloring.prototype.mblue = function(consolelog,color) {
        console.log("%c" + consolelog + "", background + color + fontsizes.medium);
    };

    coloring.prototype.lblue = function(consolelog,color) {
        console.log("%c" + consolelog + "", color + fontsizes.large);
    };

    coloring.prototype.eblue = function(consolelog,color) {
        console.log("%c" + consolelog + "", color + fontsizes.extralarge);
    };

   color.coloring = new coloring();

}( window.color = window.color || {}));