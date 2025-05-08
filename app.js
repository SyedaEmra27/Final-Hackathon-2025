// function feedback() {
//     Swal.fire({
//       title: "Good job!",
//       text: "Thanks for Your Valuable Feedback!",
//       icon: "success",
//     });
   
//   }


function feedback() {
  Swal.fire({
    title: 'Enter your feedback',
    input: 'text',
    inputPlaceholder: 'Type here...',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed && result.value.trim() !== "") {
      Swal.fire({
        toast: true,
        position: 'center',
        icon: 'success',
        title: 'Thanks for your Valuable feedback!',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  });
}



  window.onload = function() {
  
    Swal.fire({
        title: "Macca Freight System Company Private Limited!",
        text: "visit our website",
        imageUrl: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
  }



    // Input box ko get karo
    let kgInput = document.getElementById("kg");

    // Jab user kuch likhe
    kgInput.oninput = function() {
      let kg = kgInput.value;

      // Agar input khali nahi hai
      if (kg !== "") {
        let pounds = kg * 2.2;
        let ounces = kg * 35.27;

        // Result show karo
        document.getElementById("poundResult").innerText = "Pounds: " + pounds.toFixed(2);
        document.getElementById("ounceResult").innerText = "Ounces: " + ounces.toFixed(2);
      } else {
        // Agar input khali ho to result hata do
        document.getElementById("poundResult").innerText = "";
        document.getElementById("ounceResult").innerText = "";
      }
    };
        
      

