function change() {
    let x = document.getElementById('menu');
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
    document.getElementById('id1').style.flexDirection = "column";
    x.style.flexDirection = "column";
}