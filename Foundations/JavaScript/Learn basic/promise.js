// Introduction about promise
let isExecute = true;
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isExecute) {
            resolve("Kept promise");
        } else {
            reject("Broken promise");
        }
    }, 2000);
});
//console.log(promise);


// Asynchronous functions
// function getRandomNumber(start = 1, end = 10) {
//   //works when both start and end are >=1
//   return (parseInt(Math.random() * end) % (end - start + 1)) + start;
// }
// var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumnberOfSecondsGenerator = function() {
//   return new Promise(function(resolve, reject) {
//     let randomNumberOfSeconds = getRandomNumber(2, 10);
//     setTimeout(function() {
//       let randomiseResolving = getRandomNumber(1, 10);
//       if (randomiseResolving > 5) {
//         resolve({
//           randomNumberOfSeconds: randomNumberOfSeconds,
//           randomiseResolving: randomiseResolving
//         });
//       } else {
//         reject({
//           randomNumberOfSeconds: randomNumberOfSeconds,
//           randomiseResolving: randomiseResolving
//         });
//       }
//     }, randomNumberOfSeconds * 1000);
//   });
// });
// var testProimse = promiseTRRARNOSG();
// testProimse.then(function(value) {
//   console.log("Value when promise is resolved : ", value);
// });
// testProimse.catch(function(reason) {
//   console.log("Reason when promise is rejected : ", reason);
// });
// // Let us loop through and create ten different promises using the function to see some variation. Some will be resolved and some will be rejected.
// for (i=1; i<=10; i++) {
//   let promise = promiseTRRARNOSG();
//   promise.then(function(value) {
//     console.log("Value when promise is resolved : ", value);
//   });
//   promise.catch(function(reason) {
//     console.log("Reason when promise is rejected : ", reason);
//   });
// }



// Static method
// var promise3 = Promise.reject("Not interested");
// promise3.then(function(value){
//   console.log("This will not run as it is a resolved promise. The resolved value is ", value);
// });
// promise3.catch(function(reason){
//   console.log("This run as it is a rejected promise. The reason is ", reason);
// });


// var promise4 = Promise.resolve(1);
// promise4.then(function(value){
//   console.log("This will run as it is a resovled promise. The resolved value is ", value);
// });
// promise4.catch(function(reason){
//   console.log("This will not run as it is a resolved promise", reason);
// });


