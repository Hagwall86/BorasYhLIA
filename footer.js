'use strict'

export default function footer() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<p> Kontakt <br> 0705543370 <br> Yh@boras.se <p>";
    document.body.append(footer);

    const link = document.createElement("a");
    const faceBook = document.createElement("a");

    link.href = "https://www.linkedin.com/company/yhboras/";
    link.innerHTML = "Linkedin";

    faceBook.href = "https://www.facebook.com/BorasYH";
    faceBook.innerHTML = " <br> Facebook";

    document.body.append(link, faceBook);

}

