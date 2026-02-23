import {
signInWithEmailAndPassword,
signOut
} from
"https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { auth } from "./firebase.js";

window.login = async function() {

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

await signInWithEmailAndPassword(
auth,
email,
password
);

window.location = "dashboard.html";

}

window.logout = async function() {

await signOut(auth);

window.location = "login.html";

}
