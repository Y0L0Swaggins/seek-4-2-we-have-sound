function checkCreds() {
    //place to store first names
    var firstName = document.getElementById("fName").value;
    //place to store last names
    var lastName = document.getElementById("lName").value;
    //place to store badge numbers
    var badgeNumb = document.getElementById("badgeID").value;
    // Creating a seperation between first and last name after login
    var fullName = firstName + " " + lastName;

    if (fullName.length > 20 || fullName.length == 1) {
        //if true
        document.getElementById("loginStatus").innerHTML = "Invalid Full name!";
        // setting the rule that name must be less than 20 characters and greater than one
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";
        // at the if statment if requirements are met then the elseif sets the rule for badge number 
        // must be less than 999 and greater than 1
    }else {
        alert("Access Granted! Welcome" + fullName);
        location.replace("index(1).html");
        // finally if all is well the alert is brought up. following a user click you get redirected to the UATSpace page.
    }
}