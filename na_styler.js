"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Gabriel Hernandez
   Date: 4/2/19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.onload = setStyles;

function setStyles() {
      //create a link element that cycles through images
      var styleNum = randInt(5);
      var fancySheet = document.createElement("link");
      fancySheet.setAttribute("rel", "stylesheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(fancySheet);

      //create the figure box element
      var figBox = document.createElement("figure");
      figBox.setAttribute("name", "figBox");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      // preview images for the figure box
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("name", "sheetImg");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            // browser will load a different style sheet when one of the thumbnails is clicked
            sheetImg.onclick = function(e) {
                  fancySheet.setAttribute("href", e.target.alt);
            }

            figBox.appendChild(sheetImg);
      }

      //create stlye rules for the figurebox
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
            }", 0);

            document.styleSheets[document.styleSheets.length - 1].insertRule(
                  "figure#styleThumbs img { \
                        outline: 1px solid black; \
                        cursor: pointer; \
                        opacity: 0.75; \
                  }", 1);

                  document.styleSheets[document.styleSheets.length - 1].insertRule(
                        "figure#styleThumbs img:hover { \
                              outline:1px solid red; \
                              opacity: 1.0; \
                        }", 2);
           
}





function randInt(size) {
   return Math.floor(size*Math.random());
}