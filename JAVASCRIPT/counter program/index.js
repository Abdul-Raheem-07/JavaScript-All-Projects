// COUNTER PROGRAM

const decreasebtn = document.getElementById("btndecrease");
const resetbtn = document.getElementById("btnreset");
const increasebtn = document.getElementById("btnincrease");
const countlabel = document.getElementById("countlabel");

let count = 0;

increasebtn.onclick = function () {
    count++;
    updateUI();
};

decreasebtn.onclick = function () {
    if (count > 0) {
        count--;
        updateUI();
    }
};

resetbtn.onclick = function () {
    count = 0;
    updateUI();
};

function updateUI() {
    countlabel.textContent = count;

    // Disable decrease button if count is 0
    if (count <= 0) {
        decreasebtn.disabled = true;
    } else {
        decreasebtn.disabled = false;
    }
}
