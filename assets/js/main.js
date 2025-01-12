let slideIndex = 1;
showSlides(slideIndex);

// Tự động chuyển slide mỗi 3 giây
setInterval(function() {
  plusSlides(1); // Mỗi 3 giây sẽ chuyển đến slide tiếp theo
}, 5000);

// Chuyển đến slide tiếp theo hoặc trước đó
function plusSlides(n) {
  slideIndex += n;  // Thay đổi giá trị slideIndex
  if (slideIndex > document.getElementsByClassName("mySlides").length) {
    slideIndex = 1; // Nếu vượt qua số lượng slide, quay về đầu
  } 
  if (slideIndex < 1) {
    slideIndex = document.getElementsByClassName("mySlides").length; // Nếu trước slide đầu, quay về cuối
  }
  showSlides(slideIndex); // Hiển thị slide mới
}

// Hiển thị slide hiện tại và ẩn các slide khác
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Lấy tất cả các slide

  if (n > slides.length) { slideIndex = 1; } // Nếu slideIndex vượt quá số lượng slide, quay về đầu
  if (n < 1) { slideIndex = slides.length; } // Nếu slideIndex nhỏ hơn 1, quay về cuối

  // Ẩn tất cả slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Ẩn tất cả slide
  }

  // Hiển thị slide hiện tại
  slides[slideIndex - 1].style.display = "block"; // Hiển thị slide theo slideIndex
}



// JavaScript để kiểm tra vị trí cuộn và hiển thị nút điện thoại
window.addEventListener("scroll", function () {
  const phoneButton = document.getElementById("zaloButton");
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= viewportHeight / 3) {
    phoneButton.classList.add("show");
  } else {
    phoneButton.classList.remove("show");
  }
});

var $j = jQuery.noConflict();

// JavaScript để kiểm tra vị trí cuộn và hiển thị nút điện thoại
window.addEventListener("scroll", function () {
  const phoneButton = document.getElementById("");
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= viewportHeight / 3) {
    phoneButton.classList.add("show");
  } else {
    phoneButton.classList.remove("show");
  }
});
