API_URL = "http://localhost:3000/api/users";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("registeruser").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password, email }),
    });
    const data = await res.json();
    if (res.ok) {
      alert(" Registration successful now you can login");
      window.location.href = "login.html";
    } else {
      alert(data.message || "registration faild");
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("loginuser").value;
    const password = document.getElementById("loginpassword").value;
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "index.html";
    } else {
      alert(data.message || "login faild");
    }
  });
}
