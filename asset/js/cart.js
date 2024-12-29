function showPopup() {
    alert("優惠活動將於今年7月開放，敬請期待！")
  }
function decrease(index){
    const quantityDisplay = document.getElementsByClassName('quantity-display')[index];
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    };

function increase(index){
    const quantityDisplay = document.getElementsByClassName('quantity-display')[index];
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity <30) {
      quantity++;
      quantityDisplay.textContent = quantity;
    }
}
function toggleDropdown() {
  var dropitems = document.getElementById("myDropdown");
  if (dropitems.style.display === "none"||dropitems.style.display==="") {
      dropitems.style.display = "block";
  } else {
      dropitems.style.display = "none";
  }
}
function elevenDropdown() {
  var dropdownContent = document.getElementById("elevenDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
function familyDropdown() {
  var dropdownContent = document.getElementById("familyDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
function diliverDropdown() {
  var dropdownContent = document.getElementById("diliverDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
function payDropdown() {
  var dropdownContent = document.getElementById("payDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
// var button = document.getElementById("PAYmethod");
// button.addEventListener("click", function() {
//       button.style.backgroundColor = "#00ff00"; 
//       button.style.color = "#000000"; 
//     });
//     function showcredit() {
//       var textBox = document.getElementById("text-box");
//       textBox.style.display = "block"; 
//     }




var selectedLocation = null; 
    function LocationColor(LocationId) {
      var button = document.getElementById(LocationId);

      if (selectedLocation !== null) {
        selectedLocation.classList.remove('active'); 
      }

      if (selectedLocation === button) {
        selectedLocation = null; 
      } else {
        button.classList.add('active'); 
        selectedLocation = button; 
      }
      var eleven = document.getElementById("elevenDropdown");
      if (LocationId === 'location1') {
        eleven.style.display = "block"; 
      } else {
        eleven.style.display = "none"; 
      }
      var family = document.getElementById("familyDropdown");
      if (LocationId === 'location2') {
        family.style.display = "block"; 
      } else {
        family.style.display = "none"; 
      }
      var diliver = document.getElementById("diliverDropdown");
      if (LocationId === 'location3') {
        diliver.style.display = "block"; 
      } else {
        diliver.style.display = "none"; 
      }

    }

var selectedButton = null; 
function changeColor(buttonId) {
  var button = document.getElementById(buttonId);

  if (selectedButton !== null) {
    selectedButton.classList.remove('active'); 
  }

  if (selectedButton === button) {
    selectedButton = null; 
  } else {
    button.classList.add('active'); 
    selectedButton = button; 
  }
  var textBox = document.getElementById("payDropdown");
  if (buttonId === 'button2') {
    textBox.style.display = "block"; 
  } else {
    textBox.style.display = "none"; 
  }

}

function touch() {
  var box = document.getElementById("text-box");
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}
      
  

