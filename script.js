document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginOverlay = document.getElementById('login-overlay');
    const dashboardContent = document.getElementById('dashboard-content');
    const errorMsg = document.getElementById('error-msg');
    const logoutBtn = document.getElementById('logout-btn');

    const showChangePwdLink = document.getElementById('show-change-pwd');
    const backToLoginLink = document.getElementById('back-to-login');
    const changePwdForm = document.getElementById('change-pwd-form');
    const cpMsg = document.getElementById('cp-msg');

    // Default Credentials
    const DEFAULT_USER = "BioSenses";
    const DEFAULT_PASS = "828282";

    // Check if already logged in during this session
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        loginOverlay.style.display = 'none';
        dashboardContent.style.display = 'block';
    }

    // Handle Sign In
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username-input').value.trim();
        const passwordInput = document.getElementById('password-input').value;

        // Retrieve stored credentials or fallback to default
        const currentStoredUser = localStorage.getItem('biosenses_user') || DEFAULT_USER;
        const currentStoredPass = localStorage.getItem('biosenses_pass') || DEFAULT_PASS;

        if (usernameInput === currentStoredUser && passwordInput === currentStoredPass) {
            sessionStorage.setItem('isLoggedIn', 'true');
            errorMsg.style.display = 'none';
            loginOverlay.style.display = 'none';
            dashboardContent.style.display = 'block';
        } else {
            errorMsg.style.display = 'block';
            document.getElementById('password-input').value = '';
        }
    });

    // Handle Sign Out
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('isLoggedIn');
        dashboardContent.style.display = 'none';
        loginOverlay.style.display = 'flex';
        loginForm.reset();
    });

    // Toggle Change Password Form
    showChangePwdLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        showChangePwdLink.style.display = 'none';
        errorMsg.style.display = 'none';
        changePwdForm.style.display = 'block';
    });

    backToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        changePwdForm.style.display = 'none';
        loginForm.style.display = 'block';
        showChangePwdLink.style.display = 'block';
        cpMsg.style.display = 'none';
        changePwdForm.reset();
    });

    // Handle Password/Credential Update
    changePwdForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cpUser = document.getElementById('cp-username').value.trim();
        const cpOldPass = document.getElementById('cp-old-password').value;
        const cpNewPass = document.getElementById('cp-new-password').value;

        const currentStoredUser = localStorage.getItem('biosenses_user') || DEFAULT_USER;
        const currentStoredPass = localStorage.getItem('biosenses_pass') || DEFAULT_PASS;

        if (cpUser === currentStoredUser && cpOldPass === currentStoredPass) {
            if (cpNewPass.length < 4) {
                cpMsg.textContent = "New password must be at least 4 characters.";
                cpMsg.className = "feedback-msg error";
                cpMsg.style.display = 'block';
                return;
            }
            localStorage.setItem('biosenses_pass', cpNewPass);
            cpMsg.textContent = "Credentials updated successfully! Returning to login...";
            cpMsg.className = "feedback-msg success";
            cpMsg.style.display = 'block';

            setTimeout(() => {
                changePwdForm.style.display = 'none';
                loginForm.style.display = 'block';
                showChangePwdLink.style.display = 'block';
                cpMsg.style.display = 'none';
                changePwdForm.reset();
            }, 1500);
        } else {
            cpMsg.textContent = "Incorrect current username or password.";
            cpMsg.className = "feedback-msg error";
            cpMsg.style.display = 'block';
        }
    });
});
