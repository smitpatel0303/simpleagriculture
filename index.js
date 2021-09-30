(function(){

          // Your web app's Firebase configuration
          var firebaseConfig = {
            apiKey: "AIzaSyACQkk7irFnMudQDIfqoU4PNeRS8yNSito",
            authDomain: "iot-project-ca34d.firebaseapp.com",
            databaseURL: "https://iot-project-ca34d-default-rtdb.firebaseio.com",
            projectId: "iot-project-ca34d",
            storageBucket: "iot-project-ca34d.appspot.com",
            messagingSenderId: "409301817802",
            appId: "1:409301817802:web:3630d8e5f0eee6c9ded733",
            measurementId: "G-5PLD69D8G6"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

      console.log("not connecting");
      const preobject = document.getElementById("Moisture");
      const prehumidity = document.getElementById("Humidity");
      const pretemp = document.getElementById("Temprature");
      const prewlevel = document.getElementById("Waterlevel");

      const dbRefObject = firebase.database().ref().child('Moisture');
      const dbRefhumidity = firebase.database().ref().child('Humidity');
      const dbRefpretemp = firebase.database().ref().child('Temprature');
      const dbRefprewlevel = firebase.database().ref().child('Waterlevel');


      dbRefObject.on('value', snap => {
          preobject.innerHTML = snap.val();
          console.log(snap.val());
      });
      dbRefhumidity.on('value', snap => {
        prehumidity.innerHTML = snap.val();
        console.log(snap.val());
    });

    dbRefpretemp.on('value', snap => {
        pretemp.innerHTML = snap.val();
        console.log(snap.val());
    });

    dbRefprewlevel.on('value', snap => {
        prewlevel.innerHTML = snap.val();
        console.log(snap.val());
    });


}());