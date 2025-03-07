
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
};


document.querySelector(".close-btn").onclick = function() {
    document.getElementById("popup").style.display = "none";
};


window.onclick = function(event) {
    if (event.target == document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
};


document.getElementById("subscription-form").onsubmit = function(event) {
    event.preventDefault(); 

  
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

   
    console.log("Correo electrónico:", email);
    console.log("Número de teléfono:", phone);

    
    document.getElementById("popup").style.display = "none";

    
    alert("¡Post Malone Te lo Agradece!");
};