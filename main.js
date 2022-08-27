import {db, setDoc, doc, getDoc} from './config.js';

const docRef = doc(db, "colorChange", "5TZ54Ay0lIz3tJ8RN4Ki")

const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
//   console.log(docSnap.data().map(data => data.color))
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

var snapShot = docSnap.data();
document.body.style.backgroundColor = snapShot.Color;

document.body.addEventListener("click", function() {
    var color = document.body.style.backgroundColor;

    const data = {
        Color: color
    }

    setDoc(docRef, data)
    // .then(docRef => {
    //     console.log("Document has updated succesfully");
    // })
    // .catch(error => {
    //     console.log(error);
    // })
})
