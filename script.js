var questions = document.getElementsByClassName("question");

for (question of questions) {
    question.addEventListener("click", function() {
        this.classList.toggle("active");
        this.firstElementChild.classList.toggle("arrow-up");

        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block"; 
        }
    });
}