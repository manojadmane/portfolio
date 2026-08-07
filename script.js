const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

}

window.onload = ()=>{

    if(localStorage.getItem("theme")=="dark"){

        document.body.classList.add("dark");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{

        from_name: document.getElementById("name").value,

        from_email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    }).then(() => {

        alert("✅ Message Sent Successfully!");

        feedbackForm.reset();

    }).catch(() => {

        alert("❌ Failed to send message!");

    });

});
