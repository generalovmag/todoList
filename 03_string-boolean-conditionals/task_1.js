// let password = "1234-";
// let password = "4321_";
// let password = "qaz-xsw";
// let password = "_zxd";
// // Примеры некорректных паролей:
// let password = "_-a";
// let password = "qaz";
// let password = "_-3";
let password = "123456789";

if (password.length >= 4) {
  console.log("Длина пароля соответствует!");
  if (password.includes("-", "_")) {
    console.log("Пароль надежный!");
  }
  else {
    console.log("Пароль недостаточно надежный!");
  }
}
else {
  console.log("Пароль недостаточно длинный!");
}

