const questions = document.querySelectorAll(".questions a");

questions.forEach((question) => {
    question.addEventListener("click", (event) => {
        event.preventDefault();

        document.querySelectorAll(".answer").forEach((ans) => {
            ans.classList.remove("active");

        });
        const answer = question.nextElementSibling;

            answer.classList.toggle("active");
    });
});