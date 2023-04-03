document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector(".My-Profile-left input");
  var editButton = document.getElementById("editButton");
  var saveButton = document.getElementById("saveButton");
  var cancelButton = document.getElementById("cancelButton");
  var savedText = input.value; // Lưu giá trị ban đầu của input

  // Disable input ban đầu
  input.disabled = true;

  // Xử lý sự kiện khi bấm nút "Chỉnh sửa"
  editButton.addEventListener("click", function () {
    input.disabled = false;
    editButton.style.display = "none";
    document.getElementById("editButtons").style.display = "inline-block";
  });

  // Xử lý sự kiện khi bấm nút "Lưu"
  saveButton.addEventListener("click", function () {
    savedText = input.value; // Lưu giá trị mới của input
    input.disabled = true;
    document.getElementById("editButtons").style.display = "none";
    editButton.style.display = "inline-block";
  });

  // Xử lý sự kiện khi bấm nút "Hủy"
  cancelButton.addEventListener("click", function () {
    if (savedText !== input.value) {
      // Nếu đã có giá trị lưu trước đó thì chỉ giữ lại giá trị đã lưu nếu input đã được sửa đổi
      input.value = savedText;
    }
    input.disabled = true;
    document.getElementById("editButtons").style.display = "none";
    editButton.style.display = "inline-block";
  });
});

// edit 1
document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector(".My-Profile-left #input");
  var editButton = document.getElementById("editButton1");
  var saveButton = document.getElementById("saveButton1");
  var cancelButton = document.getElementById("cancelButton1");
  var savedText = input.value; // Lưu giá trị ban đầu của input

  // Disable input ban đầu
  input.disabled = true;

  // Xử lý sự kiện khi bấm nút "Chỉnh sửa"
  editButton.addEventListener("click", function () {
    input.disabled = false;
    editButton.style.display = "none";
    document.getElementById("editButtons1").style.display = "inline-block";
  });

  // Xử lý sự kiện khi bấm nút "Lưu"
  saveButton.addEventListener("click", function () {
    savedText = input.value; // Lưu giá trị mới của input
    input.disabled = true;
    document.getElementById("editButtons1").style.display = "none";
    editButton.style.display = "inline-block";
  });

  // Xử lý sự kiện khi bấm nút "Hủy"
  cancelButton.addEventListener("click", function () {
    if (savedText !== input.value) {
      // Nếu đã có giá trị lưu trước đó thì chỉ giữ lại giá trị đã lưu nếu input đã được sửa đổi
      input.value = savedText;
    }
    input.disabled = true;
    document.getElementById("editButtons1").style.display = "none";
    editButton.style.display = "inline-block";
  });
});

//edit 2
const editButton = document.getElementById("editButton2");
const fileInput = document.getElementById("fileInput2");
const saveButton = document.getElementById("saveButton2");
const cancelButton = document.getElementById("cancelButton2");
const currentImage = document.getElementById("currentImage2");
const editControls = document.getElementById("editControls2");

let currentImageURL = currentImage.src;
let editing = false;

editButton.addEventListener("click", function () {
  editing = true;
  editControls.style.display = "block";
  editButton.style.display = "none";
  fileInput.style.display = "none";
  currentImage.src = "https://www.topperstutors.com/img/upload.png"; // add this line to change the image source to the edit icon
});

cancelButton.addEventListener("click", function () {
  currentImage.src = currentImageURL;
  fileInput.style.display = "none";
  editControls.style.display = "none";
  editButton.style.display = "block";
  editing = false;
});

saveButton.addEventListener("click", function () {
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      currentImageURL = reader.result;
      currentImage.src = currentImageURL;
    });
    reader.readAsDataURL(fileInput.files[0]);
  }
  fileInput.style.display = "none";
  editControls.style.display = "none";
  editButton.style.display = "block";
  editing = false;
});

currentImage.addEventListener("click", function () {
  if (!editing) {
    return;
  }
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      currentImage.src = reader.result;
    });
    reader.readAsDataURL(fileInput.files[0]);
  }
});
