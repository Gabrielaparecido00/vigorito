import {
collection,
addDoc,
getDocs
} from
"https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { db, auth } from "./firebase.js";

window.createVehicle = async function() {

const plate =
document.getElementById("plate").value;

const model =
document.getElementById("model").value;

const brand =
document.getElementById("brand").value;

const km =
document.getElementById("km").value;

await addDoc(
collection(db, "vehicles"),
{
plate,
model,
brand,
km,
status: "AVAILABLE"
}
);

loadVehicles();

}

async function loadVehicles() {

const querySnapshot =
await getDocs(collection(db, "vehicles"));

let html = "";

querySnapshot.forEach(doc => {

const v = doc.data();

html += `
<tr>
<td>${v.plate}</td>
<td>${v.model}</td>
<td>${v.brand}</td>
<td>${v.status}</td>
</tr>
`;

});

document.getElementById("vehiclesTable").innerHTML = html;

}

loadVehicles();
