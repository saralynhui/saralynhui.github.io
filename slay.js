function validateForm(event) {
    var nameInput = document.getElementById('name').value.trim();
    var emailInput = document.getElementById('email').value.trim();

    if (nameInput === '' || emailInput === '') {
        alert('Please fill in all required fields.');
        event.preventDefault();
        return;
    }

    alert('Form submitted successfully!');
}

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImg.src = pic;
    fullImgBox.style.display = "flex";
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}
