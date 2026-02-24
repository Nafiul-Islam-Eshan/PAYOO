document.querySelector("#btn-login").addEventListener("click",function(event){
    // Get the Moblie number
    const contactNumber = document.getElementById('input-number').value;
    console.log("Moblie Number: " ,contactNumber); 

    // Get the passwords
    const password = document.getElementById("input-password").value;
    console.log("Password: ", password);

    // Match the number and password
    if (contactNumber == "01905515736" && password == "1234") {
        alert("Login successful ✅");
        window.location.assign("./home.html");
    }else{
        alert("Login failed ❌");
    }
});