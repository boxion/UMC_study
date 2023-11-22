document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("username");
  const nameError = document.getElementById("usernameError");
  const nickInput = document.getElementById("nickname");
  const nickError = document.getElementById("nicknameError");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const passInput = document.getElementById("password");
  const passError = document.getElementById("passwordError");
  const passCheckInput = document.getElementById("passwordcheck");
  const passCheckError = document.getElementById("passwordcheckError");
  const submitButton = document.querySelector('button[type="submit"]'); // 가입하기 버튼에 대한 참조
  const form = document.querySelector('form'); // form에 대한 참조
  let isNameValid = false;
  let isNickValid = false;
  let isEmailValid = false;
  let isPassValid = false;
  let isPassCheckValid = false;

  // Name validation
  nameInput.addEventListener("input", function () {
    nameError.style.display = "block";
    if (this.value === "") {
      console.log("nameError 확인");
      nameError.textContent = "필수 입력 항목입니다!";
      nameError.classList.remove("correct-active"); // Add the new class
      nameError.classList.add("error-active"); // Add the new class
      isNameValid = false;
    } else {
      nameError.style.display = "block";
      nameError.textContent = "멋진 이름이네요!";
      nameError.classList.remove("error-active"); // Add the new class
      nameError.classList.add("correct-active"); // Add the new class
      isNameValid = true;
    }
    checkFormValidity();
  });

  // Nickname validation
  nickInput.addEventListener("input", function () {
    nickError.style.display = "block";
    if (this.value.length < 2 || this.value.length > 5) {
      console.log("nickError 확인");
      nickError.textContent = "닉네임은 2~5글자로 제한됩니다.";
      nickError.classList.remove("correct-active"); // Add the new class
      nickError.classList.add("error-active"); // Add the new class
      isNickValid = false;
    } else {
      console.log("nickError 안뜸");

      nickError.textContent = "멋진 닉네임이군요!";
      nickError.classList.remove("error-active");
      nickError.classList.add("correct-active"); // Add the new class
      isNickValid = true;
    }
    checkFormValidity();
  });

  // Email validation
  emailInput.addEventListener("input", function () {
    emailError.style.display = "block";
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!re.test(this.value)) {
      console.log("emailError 확인");
      emailError.textContent = "이메일 형식이 올바르지 않습니다.";
      emailError.classList.remove("correct-active");
      emailError.classList.add("error-active"); // Add the new class
      isEmailValid = false;
    } else {
      console.log("emailError 안뜸");
      emailError.textContent = "올바른 메일 형식입니다!";
      emailError.classList.remove("error-active");
      emailError.classList.add("correct-active"); // Add the new class
      isEmailValid = true;
    }
    checkFormValidity();
  });
  
  // Password validation: only allow alphanumeric and special characters. You can modify the regex pattern to meet your requirements.
  passInput.addEventListener("input", function () {
    passError.style.display = "block";
    var re = /^[A-Za-z0-9$@$!%*#?&]*$/;
    if (!re.test(this.value)) {
      console.log("passError 확인");
      passError.textContent =
        "비밀번호는 영문, 숫자, 특수 문자만 사용 가능합니다.";
      passError.classList.remove("correct-active");
      passError.classList.add("error-active"); // Add the new class
      isPassValid = false;
    } else {
      console.log("passError 안뜸");
      passError.textContent = "안전한 비밀번호입니다!";
      passError.classList.remove("error-active");
      passError.classList.add("correct-active"); // Add the new class
      isPassValid = true;
    }
    checkFormValidity();
  });

  // Password check validation: ensure it matches with the password entered.
  passCheckInput.addEventListener("input", function () {
    passCheckError.style.display = "block";
    if (this.value !== passInput.value) {
      console.log("passCheckError 확인");
      passCheckError.textContent = "비밀번호와 일치하지 않습니다.";
      passCheckError.classList.remove("correct-active");
      passCheckError.classList.add("error-active"); // Add the new class
      isPassCheckValid = false;
    } else {
      console.log("passCheckError 성공");
      passCheckError.textContent = "비밀번호가 일치합니다.";
      passCheckError.classList.remove("error-active");
      passCheckError.classList.add("correct-active"); // Add the new class
      isPassCheckValid = true;
    }
    checkFormValidity();
  });

  function checkFormValidity() {
    if (
      isNameValid &&
      isNickValid &&
      isEmailValid &&
      isPassValid &&
      isPassCheckValid
    ) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit action
    modal.style.display = "flex";
  });
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const modal = document.querySelector(".modal-wrapper");
  open.onclick = () => {
    modal.style.display = "flex";
  };
  close.onclick = () => {
    modal.style.display = "none";
  };
});
