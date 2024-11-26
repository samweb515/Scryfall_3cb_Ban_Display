/* 
 * Author: Samuel Webster
 * Date: November 2024
*/

function updateBanlist() {
    console.log("here");
    const names = Array.from(document.getElementsByClassName('C9DxTc'));
    names.forEach(name => {
        if (name != null) {
            // create array in popup
        }
    });
}

const intervalId = setInterval(() => {
    if (document.querySelector('.n8H08c.UVNKR')) {
        updateBanlist();
        clearInterval(intervalId);
    }
}, 100);