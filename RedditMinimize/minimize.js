/*
 * Author: Michael Song
 * Last Edited: 8/1/2018
 * Description: JS code that allows you to minimize posts on reddit.com
 *  
 */

var refresh = function() {
    //gets all divs with the id of a post
    var parent = $('div[id^="t3_"]');
    var buttons = [];
    var bools = [];
    var i;
    //all the odd indexed divs are the share buttons, so we skip over those by incrementing by 2
    for (i = 0; i < parent.length; i = i + 2) {

        //use try catch because it wasn't working without it (seriously idk)
        try { throw i } catch (ii) {
            var grandparentDiv = parent[ii].parentNode;

            //to prevent function from adding a new button each time
            if(grandparentDiv.firstChild.type == "button") {
                continue;
            }
            bools[ii] = true;
            buttons[ii] = document.createElement("button");
            buttons[ii].setAttribute("type", "button");
            buttons[ii].innerHTML = "-";

            buttons[ii].addEventListener('click', function() {
                console.log(ii);
                if (bools[ii] == true) {
                    $(parent[ii]).children().hide();

                    /* Debugging
                    console.log("0 to 1 success");
                    console.log("1");
                    */
                } else if (bools[ii] == false) {
                    $(parent[ii]).children().show();

                    /* Debugging
                    console.log("1 to 0 success");
                    console.log("0");
                    */
                }
                bools[ii] = !bools[ii];
            });
            grandparentDiv.insertBefore(buttons[ii], parent[ii]);

        }
    }
}

//A way to ensure that all posts have the button as the user keeps scrolling
window.addEventListener('scroll', function(){refresh();});
refresh();