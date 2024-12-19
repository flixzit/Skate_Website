document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookieConsent")) {
        const cookieBanner = document.createElement("div");
        cookieBanner.id = "cookieBanner";
        cookieBanner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.8 text-align: center;
            padding: 10px;
            z-index: 1000;
        `;
        cookieBanner.innerHTML = `
            <p style="margin: 0; padding: 5px;">
                We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.
                <button id="acceptCookies" style="
                    margin-left: 10px;
                    padding: 5px 10px;
                    background-color: #ffa500;
                    border: none;
                    color: white;
                    cursor: pointer;
                ">Accept</button>
            </p>
        `;

        document.body.appendChild(cookieBanner);

        document.getElementById("acceptCookies").addEventListener("click", function () {
            localStorage.setItem("cookieConsent", "true");
            cookieBanner.remove();
        });
    }
});