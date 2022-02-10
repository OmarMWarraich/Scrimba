function random_password_generate(max,min)
{
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}
document.getElementById("generatePassword").addEventListener("click", function(){
    random_password = random_password_generate(16,8);
    document.getElementById("randomPassword").value = random_password;
    random_password = random_password_generate(16,8);
    document.getElementById("randomPassword1").value = random_password;
    random_password = random_password_generate(16,8);
    document.getElementById("randomPassword2").value = random_password;
    random_password = random_password_generate(16,8);
    document.getElementById("randomPassword3").value = random_password;
});