// const submitData2 = document.querySelector('#submitData2');

// //     Sign up 
// submitData2.addEventListener('click',(e) => {

// var email = document.getElementById('email2').value;
// var password = document.getElementById('psw2').value;

// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ... user.uid
//         set(ref(database, 'users/' + user.uid), {
//             email: email,
//             password: password
//         })
//             .then(() => {
//                 // Data saved successfully!
//                 alert('user created successfully');

//             })
//             .catch((error) => {
//                 // The write failed...
//                 alert(error);
//             });
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//         alert(errorMessage);
//     });
// });
