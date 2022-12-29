var password = document.getElementById("password")
function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordlength = 12;
    var password = "";
    for (let i = 0; i < passwordlength; i++) {

        var number = Math.floor(Math.random() * chars.length);

        password += chars.substring(number, number + 1)
        console.log(password.length, password)
    }
    document.getElementById('password').value = password
}
function copy() {


    var copy = document.getElementById("password")
    copy.select()
    document.execCommand("copy");
}