# Console-Color
Console Color is a library that allows you to take style your front end console logs in the browser. Works with chrome and FireFox.
to get started folow the instructions below:

To get started coloring your console logs the first thing you need to do is first call the colors.js in your html file.
then you need to declare the file static file path directory if you are runing a node server.

Once you have the script included start by calling the function below:

color.coloring.scolorlog();

This function takes three paramters the first paramter is the console log

color.coloring.scolorlog("conoslelog here");

The next paramter is optinal depending on if you want to have a background color or not.
If you dont want a background color and you just want to have a normal colord console log follow the example below.

color.coloring.scolorlog("coloring the log",color.colors.red);

Now if you want the log to have a background color instead follow the example below.

color.coloring.lblue("console log has a background color",color.styles.redbackground);

Now there are four diffrent sizes that your console logs can be starting from small to extra large.
Follow examples below to test the console log sizes.

Size:SMALL
color.coloring.scolorlog("coloring the log",color.colors.red);

Size:MEDIUM
color.coloring.mcolorlog("coloring the log",color.colors.red);


