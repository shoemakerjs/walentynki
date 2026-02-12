const envelopeScreen = document.querySelector(".envelope-screen");
const questionScreen = document.querySelector(".question-screen");
const errorScreen = document.querySelector(".error-screen");

const envelope = document.querySelector(".envelope");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const retryBtn = document.querySelector(".retry");
const successScreen = document.querySelector(".success-screen");

const siren = document.getElementById("siren");
const love = document.getElementById("love");


// ---------- OTWARCIE KOPERTY ----------
envelope.addEventListener("click", () => {

  envelopeScreen.classList.remove("active");
  confetti();
  setTimeout(() => {
    questionScreen.classList.add("active");
    initGlider();
  }, 600);

});


// ---------- TAK -----------
function yesclicked() {

  if(questionScreen.classList.contains("active")){
    questionScreen.classList.remove("active");
  }
  confetti();
  
  setTimeout(() => {
      successScreen.classList.add("active");
      love.play();
  }, 600);
}

yesBtn.addEventListener("click", yesclicked);


// ---------- NIE ----------
noBtn.addEventListener("click", () => {

    questionScreen.classList.remove("active");

    setTimeout(() => {
        errorScreen.classList.add("active");
        siren.play();
    }, 600);

});


// ---------- RETRY ----------
retryBtn.addEventListener("click", () => {

    errorScreen.classList.remove("active");
    siren.pause();
    siren.currentTime = 0;

    setTimeout(() => {
        questionScreen.classList.add("active");

        // zamiana przycisków
        document.querySelector(".buttons").innerHTML =
        `
            <button class="yes">Tak!</button>
            <button class="yes">Tak!</button>
        `;
        document.getElementsByClassName("yes")[0].addEventListener("click", yesclicked);
        document.getElementsByClassName("yes")[1].addEventListener("click", yesclicked);


    }, 600);

});




  // button CONFETTI


    function confetti(){
        const jsConfetti = new JSConfetti()

        // basic confetti
        jsConfetti.addConfetti({
            emojis: ['💖'],
            emojiSize: 50,
            confettiNumber: 50,
        })
    }


// glider

let glider;

function initGlider() {

  glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true
  });

  autoplay = setInterval(() => {
    glider.scrollItem('next');
  }, 4000);

}

document.getElementsByClassName("yes")[0].addEventListener("click", test);
document.getElementsByClassName("envelope")[0].addEventListener("click", test);
