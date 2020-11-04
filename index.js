let myPics = document.getElementById("mainPics");
let changePics = ["image/photo1.jpg", "image/photo2.jpg", "image/photo3.jpg", "image/photo4.jpg", "image/photo5.jpg", "image/photo6.jpg", "image/photo7.jpg", "image/photo8.jpg", "image/photo9.jpg", "image/photo10.jpg"];
let picsIndex =1;
function bgchange() {
    myPics.setAttribute("src", changePics[picsIndex]);
    picsIndex++;
    if(picsIndex > 9) {picsIndex = 0}
}