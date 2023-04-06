import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, setDoc, addDoc, updateDoc, deleteDoc, getDocs, doc, collection } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
const signUp = document.getElementById("signUp");
var loginForm = document.getElementById("loginForm");
// var loginEmailField = document.getElementById("loginEmail").value;
// var loginPasswordField = document.getElementById("loginPassword").value;
// var messageDiv = document.getElementById("message");
var warehousedataForm = document.querySelector("#warehousedataForm");
localStorage.removeItem('loggedIn');
const logOut = document.querySelector('.logout')

console.log("hello");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMsJalWUl6wUV_FD4C44TRF8rjBgK5Nic",
    authDomain: "pravidhi-f594d.firebaseapp.com",
    databaseURL: "https://pravidhi-f594d-default-rtdb.firebaseio.com",
    projectId: "pravidhi-f594d",
    storageBucket: "pravidhi-f594d.appspot.com",
    messagingSenderId: "381566880784",
    appId: "1:381566880784:web:3fc0de71affe76c2088e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const wareHouseColRef = collection(db, 'warehouse')


signUp.addEventListener('click', (e) => {
    var crops = [];
    var Name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value
    var email = document.getElementById('email').value;
    var soilType = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    // var cropsWheat = document.getElementById('crops-wheat').value;
    // var cropsCorn = document.getElementById('crops-corn').value;
    // var cropsRice = document.getElementById('crops-rice').value;
    var certificate = document.getElementById('certificate').value;
    var governmentId = document.getElementById('government-id').value;


    console.log(Name, address, city, state, email, soilType, password, governmentId);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("HELLO: " + userCredential.user.uid);
            const user = userCredential.user;
            const uid = user.uid;
            const userDocRef = doc(wareHouseColRef, uid);
            const warehouseDetailsRef = collection(userDocRef, "warehouse-details");


            setDoc(userDocRef, {
                Name: Name,
                address: address,
                city: city,
                state: state,
                email: email,
                soilType: soilType,
                password: password,
                certificate: certificate,
                governmentId: governmentId
            })

            alert('user created!');
            // getDocs();
        })
        .catch((error) => {
            // getDocs();
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
});


loginForm.addEventListener('click', (e) => {
    event.preventDefault();
    console.log(loginForm);
    const loginEmail = loginForm.elements["loginEmail"].value;
    const loginPassword = loginForm.elements["loginPassword"].value;

    console.log(loginEmail, loginPassword);
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            localStorage.setItem('loggedIn', true);
            console.log("HELLO: " + userCredential.user.uid);
            var user = userCredential.user;
            const uid = userCredential.user.uid;
            console.log(uid,  "bsdk");
            localStorage.setItem('uid', uid);
            const userRef = doc(wareHouseColRef, uid);

            console.log(uid)
            getDocs(wareHouseColRef).then((snapshot) => {

                console.log("hello from firestore");
                let wareHouseDocs = [];
                snapshot.docs.forEach((docs) => {
                    const detailsRef = collection(userRef, "warehouse-details")
                    getDocs(detailsRef).then((elements) => {
                        elements.docs.forEach((doc) => {
                            console.log(doc.data().warehouseName);
                            // console.log(doc.data().warehouseName, "Hello motherFucker", doc.data().cropDetails);

                            wareHouseDocs.push(doc.data())
                        });
                    })
                });
                console.log(wareHouseDocs);
            }).catch((err) => {
                console.log(err.message);
            })




            warehousedataForm.addEventListener('submit', (e) => {
                event.preventDefault();
                const warehouseName = warehousedataForm.elements["warehousename"].value;
                const warehouseTotalQuantity = warehousedataForm.elements["warehouseTotalQuantity"].value;
                const crops = warehousedataForm.elements['crop[]'];
                const cropQtys = warehousedataForm.elements['cropQty[]'];
                const userDocRef = doc(wareHouseColRef, uid);
                const warehouseDetailsRef = collection(userDocRef, "warehouse-details");
                const warehouseNameRef = doc(warehouseDetailsRef, warehouseName);

                const cropDetails = [];
                const cropImages = [
                    { name: "chole", path: "public/images/crops/chole.jpg" },
                    { name: "coffee beans", path: "public/images/crops/coffee beans.jpg" },
                    { name: "lentils", path: "public/images/crops/lentils.jpg" },
                    { name: "maize", path: "public/images/crops/maize.jpg" },
                    { name: "moong dal", path: "public/images/crops/moong dal.jpg" },
                    { name: "moth beans", path: "public/images/crops/moth beans.jpg" },
                    { name: "pigeon peas", path: "public/images/crops/pigeon peas.jpg" },
                    { name: "rajma", path: "public/images/crops/rajma.jpg" },
                    { name: "rice", path: "public/images/crops/rice.jpg" },
                    { name: "wheat", path: "public/images/crops/wheat.jpg" },
                ];

                for (let i = 0; i < crops.length; i++) {
                    // console.log(cropImages[i].path);

                    if (crops[i].checked && cropQtys[i].value !== '' && cropImages[i].name === crops[i].value) {
                        cropDetails.push({
                            cropName: crops[i].value,
                            cropQty: parseInt(cropQtys[i].value),
                            cropImages: cropImages[i].path
                        });
                    }
                }

                console.log(cropDetails, "crops", warehouseName, warehouseTotalQuantity);

                setDoc(warehouseNameRef, {
                    warehouseName: warehouseName,
                    warehouseTotalQuantity: warehouseTotalQuantity,
                    cropDetails: cropDetails
                });

                updateDoc(userRef, {
                    warehouseName: warehouseName
                })
                alert("warehouse Name added")
                // getDocs(wareHouseColRef).then((snapshot) => {
                // 	console.log("hello from firestore");
                // 	let wareHouseDocs = [];
                // 	snapshot.docs.forEach((doc) => {
                // 		// wareHouseDocs.push({ ...doc.data(), id: doc.id })
                // 		getDocs(wareHouseColRef, userDocRef, warehouseDetailsRef).then((subCol) => {
                // 			subCol.docs.forEach((element) => {

                // 				wareHouseDocs.push({ ...element.data() })
                // 			});
                // 		})
                // 	});
                // 	console.log(wareHouseDocs);
                // }).catch((err) => {
                // 	console.log(err.message);
                // })

                console.log(uid);


            });
        })
})

logOut.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log("user signedOut");
            localStorage.removeItem('loggedIn');
        })
        .catch((err) => {
            console.log("User signedOut");
        })
});
