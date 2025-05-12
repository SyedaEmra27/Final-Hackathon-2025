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



       var kgInput = document.getElementById("kg");

        kgInput.oninput = function() {
      var kg = kgInput.value;

      
      if (kg !== "") {
        var pounds = kg * 2.2;
        var ounces = kg * 35.27;

      
        document.getElementById("poundResult").innerText = "Pounds: " + pounds.toFixed(2);
        document.getElementById("ounceResult").innerText = "Ounces: " + ounces.toFixed(2);
      } else {
      
        document.getElementById("poundResult").innerText = "";
        document.getElementById("ounceResult").innerText = "";
      }
    };
        
      

