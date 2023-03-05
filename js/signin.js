
// const submitData1 = document.querySelector('#submitData1');
// submitData1.addEventListener('click', (e) => {

//     var email1 = document.getElementById('email1').value;
//     var password1 = document.getElementById('psw1').value;
//     // log in user
//     signInWithEmailAndPassword(auth, email1, password1)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // ...

//             // save log in details into real time database
//             var lgDate = new Date();
//             update(ref(database, 'users/' + user.uid), {
//                 last_login: lgDate,
//             })
//                 .then(() => {
//                     // Data saved successfully!
//                     alert('user logged in successfully');

//                 })
//                 .catch((error) => {
//                     // The write failed...
//                     alert(error);
//                 });
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
//         });
// });