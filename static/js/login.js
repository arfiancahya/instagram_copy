function onSingIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Full Name: " + profile.getName());
    console.log("Email: " + profile.getEmail());

    const x = document.getElementsByClassName("logged");
    console.log(x);
    for(let i = 0; i <= x.length; i++) {
        x[i].classList.remove("logged");
    }
}

function onSignOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User Signed Out.');
        hideDashboard();
    });
}

function hideDashboard() {
    const x = document.querySelector(".logged");
    for(let i = 0; i <= x.length; i++) {
        x[i].classList.add("logged");
    }
}

function gotoDashboard() {
    window.location.replace("http://localhost:9000/index.html");
}