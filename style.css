document.addEventListener("DOMContentLoaded", () => {
    // Default credentials setup
    const defaultUser = "BioSenses";
    const defaultPass = "828282";

    if (!localStorage.getItem("appUsername")) {
        localStorage.setItem("appUsername", defaultUser);
    }
    if (!localStorage.getItem("appPassword")) {
        localStorage.setItem("appPassword", defaultPass);
    }

    const loginOverlay = document.getElementById("login-overlay");
    const dashboardContent = document.getElementById("dashboard-content");
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username-input");
    const passwordInput = document.getElementById("password-input");
    const errorMsg = document.getElementById("error-msg");
    const logoutBtn = document.getElementById("logout-btn");

    // Change Password Elements
    const showChangePwdLink = document.getElementById("show-change-pwd");
    const backToLoginLink = document.getElementById("back-to-login");
    const changePwdForm = document.getElementById("change-pwd-form");
    const cpUsername = document.getElementById("cp-username");
    const cpOldPassword = document.getElementById("cp-old-password");
    const cpNewPassword = document.getElementById("cp-new-password");
    const cpMsg = document.getElementById("cp-msg");

    // Check session state
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        loginOverlay.style.display = "none";
        dashboardContent.style.display = "block";
    }

    // Handle Login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const storedUser = localStorage.getItem("appUsername");
        const storedPass = localStorage.getItem("appPassword");

        if (usernameInput.value === storedUser && passwordInput.value === storedPass) {
            sessionStorage.setItem("isLoggedIn", "true");
            loginOverlay.style.display = "none";
            dashboardContent.style.display = "block";
            errorMsg.style.display = "none";
            usernameInput.value = "";
            passwordInput.value = "";
        } else {
            errorMsg.style.display = "block";
            passwordInput.value = "";
        }
    });

    // Toggle to Change Password View
    showChangePwdLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        showChangePwdLink.parentElement.style.display = "none";
        errorMsg.style.display = "none";
        changePwdForm.style.display = "block";
    });

    // Toggle back to Login View
    backToLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        changePwdForm.style.display = "none";
        cpMsg.style.display = "none";
        loginForm.style.display = "block";
        showChangePwdLink.parentElement.style.display = "block";
    });

    // Handle Password Change
    changePwdForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const storedUser = localStorage.getItem("appUsername");
        const storedPass = localStorage.getItem("appPassword");

        if (cpUsername.value === storedUser && cpOldPassword.value === storedPass) {
            if (cpNewPassword.value.length < 4) {
                cpMsg.className = "feedback-msg error";
                cpMsg.textContent = "New password must be at least 4 characters long.";
                cpMsg.style.display = "block";
                return;
            }
            localStorage.setItem("appPassword", cpNewPassword.value);
            cpMsg.className = "feedback-msg success";
            cpMsg.textContent = "Credentials updated successfully. Redirecting...";
            cpMsg.style.display = "block";
            
            cpUsername.value = "";
            cpOldPassword.value = "";
            cpNewPassword.value = "";

            setTimeout(() => {
                changePwdForm.style.display = "none";
                cpMsg.style.display = "none";
                loginForm.style.display = "block";
                showChangePwdLink.parentElement.style.display = "block";
            }, 2000);
        } else {
            cpMsg.className = "feedback-msg error";
            cpMsg.textContent = "Incorrect current username or password.";
            cpMsg.style.display = "block";
        }
    });

    // Handle Logout
    logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("isLoggedIn");
        dashboardContent.style.display = "none";
        loginOverlay.style.display = "flex";
    });
});
