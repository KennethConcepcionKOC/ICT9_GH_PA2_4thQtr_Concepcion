// Participation Activity 2
function compute_rank() {
    let math_score = Number(document.getElementById("math_score").value);

     if (math_score > 100) {
        window.alert('Invalid input');
    }
     else if (math_score > 94) {
        window.alert('Gold');
    } else if (math_score > 89) {
        window.alert('Silver');  
    } else if (math_score > 84) {
        window.alert('Bronze');
    } else if (math_score > 79) {
        window.alert('Merit');
    }
    else {
        window.alert("Invalid input");
    }
}
