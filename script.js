window.onload = () => {

    addNewsButton();
    addReliveButton();
    addSubmitButton(); 

    let divs = document.querySelectorAll(".animate");

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                setTimeout (1,entry.target.classList.remove("hidden"));
                entry.target.classList.add('fancy')};
          
            });
        });
   

    divs.forEach(div => {
        observer.observe(div);
    });
};

addNewsButton = () => {

    let newsButton = document.getElementsByClassName("newsLetterButton");
    for (let btn = 0; btn < newsButton.length; btn++) {
        newsButton[btn].addEventListener("click", () => { signup() })
    }
}

addReliveButton = () => {

    document.getElementById("conferenceButton").addEventListener("click", () => { reliveButton() })
}

addSubmitButton = () => {

    document.getElementById("submitButton").addEventListener("click", () => { submitInfo() })
}

signup = () => {

    alert("sign up works.");
}

reliveButton = () => {

    alert("relive button works.")
}

submitInfo = () => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let title = document.getElementById("title").value;
    let email = document.getElementById("email").value;
    let company = document.getElementById("company").value;
    let interest = document.getElementById("interest").value;
    let found = document.getElementById("found").value;
    let updates = document.getElementById("updates").checked;
    alert(`${name}, ${title}, ${email}, ${company}, ${interest}, ${found}, ${updates}`);

}

