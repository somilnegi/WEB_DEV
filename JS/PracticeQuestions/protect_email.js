function protect_email(email) {
    var avg, split, name, domain;
    split = email.split("@");
    name = split[0];
    domain = split[1];
    avg = name.length / 2;
    name = name.substr(0, avg);
    return name + "...@" + domain;
}

// Test
console.log(protect_email("somilnegi12345@gmail.com")); 
// Output: somilne...@gmail.com
