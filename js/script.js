function toggleSidebar() {
      document.querySelector('.sidebar').classList.toggle('active');
    }

document.addEventListener("DOMContentLoaded", function() {
    const cookiePrompt = document.getElementById("cookiePrompt");
    const acceptCookies = document.getElementById("acceptCookies");
    //const learnMore = document.getElementById("learnMore");
    

    
    const hasAcceptedCookies = localStorage.getItem("acceptedCookies");

    if (!hasAcceptedCookies) {
        cookiePrompt.classList.add("show");
    }

    
    acceptCookies.addEventListener("click", function() {
        localStorage.setItem("acceptedCookies", true);
        cookiePrompt.classList.remove("show");
    });
});
