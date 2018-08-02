/*
* Author: Michael Song
* Last Edited: 8/1/2018
* Description: JS code that allows you to minimize posts on reddit.com
* TODO: Get it to update as reddit infinite scroll gives more posts. 
*/
var parent = $('div[id^="t3_"]');
var buttons = [];
var bools = [];
var i;
for (i = 0; i < parent.length; i++) {;
    try { throw i } catch (ii) {
        console.log(ii);
        bools[ii] = true;
        buttons[ii] = document.createElement("button");
        buttons[ii].setAttribute("type", "button");
        buttons[ii].setAttribute("name", "minimize");
        buttons[ii].innerHTML = "-";

        buttons[ii].addEventListener('click', function() {
            console.log(ii);
            if (bools[ii] == true) {
                $(parent[ii]).children().hide();
                console.log("0 to 1 success");
                console.log("1");
            } else if (bools[ii] == false) {
                $(parent[ii]).children().show();
                console.log("1 to 0 success");
                console.log("0");

            }
            bools[ii] = !bools[ii];
        });

        var grandparentDiv = parent[ii].parentNode;
        grandparentDiv.insertBefore(buttons[ii], parent[ii]);
    }
}