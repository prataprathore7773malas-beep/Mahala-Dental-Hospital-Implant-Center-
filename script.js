// =====================================
// MAHALA DENTAL HOSPITAL
// PREMIUM SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
      FAQ ACCORDION
    ==================================*/

    const faqQuestions =
    document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const answer =
            question.nextElementSibling;

            const icon =
            question.querySelector("i");

            document
            .querySelectorAll(".faq-answer")
            .forEach(item => {

                if(item !== answer){

                    item.style.maxHeight = null;

                }

            });

            document
            .querySelectorAll(".faq-question i")
            .forEach(i => {

                i.classList.remove("fa-minus");
                i.classList.add("fa-plus");

            });

            if(answer.style.maxHeight){

                answer.style.maxHeight = null;

                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");

            }else{

                answer.style.maxHeight =
                answer.scrollHeight + "px";

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        });

    });

    /*==================================
      APPOINTMENT FORM
    ==================================*/

    const form =
    document.getElementById("appointmentForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const name =
            document.getElementById("name").value;

            const phone =
            document.getElementById("phone").value;

            const service =
            document.getElementById("service").value;

            const date =
            document.getElementById("date") ?
            document.getElementById("date").value :
            "";

            const message =
            document.getElementById("message").value;

            const text =

`Hello Mahala Dental Hospital & Implant Center,

Appointment Request

Name : ${name}

Mobile : ${phone}

Treatment : ${service}

Preferred Date : ${date}

Problem :

${message}`;

            // Replace this with actual WhatsApp number
            const whatsapp =
            "91XXXXXXXXXX";

            window.open(

            `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`,

            "_blank"

            );

        });

    }

});


/*==================================
SMOOTH SCROLL
==================================*/

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==================================
HEADER SHADOW
==================================*/

window.addEventListener("scroll",()=>{

const hero=
document.querySelector(".hero");

if(!hero) return;

if(window.scrollY>50){

hero.style.transition=".3s";

}

});


/*==================================
SCROLL REVEAL
==================================*/

const revealElements=
document.querySelectorAll(

".why-card,.service-card,.review-card,.info-card,.trust-box,.contact-card"

);

function reveal(){

revealElements.forEach(el=>{

const windowHeight=
window.innerHeight;

const revealTop=
el.getBoundingClientRect().top;

if(revealTop<windowHeight-120){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/*==================================
COUNTER ANIMATION
==================================*/

const counters=
document.querySelectorAll(".trust-box h2");

counters.forEach(counter=>{

const text=
counter.innerText;

const number=
parseInt(text);

if(!isNaN(number)){

let count=0;

const update=()=>{

count+=Math.ceil(number/40);

if(count<number){

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=text;

}

};

update();

}

});


/*==================================
BUTTON HOVER EFFECT
==================================*/

document
.querySelectorAll(".btn-primary,.btn-secondary")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});


/*==================================
PAGE LOADED
==================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

console.log(
"Mahala Dental Hospital Website Loaded Successfully"
);
