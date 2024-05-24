function signup() {
    let name = document.getElementById('name').value ;
    let email = document.getElementById('email').value ;
    let password = document.getElementById('password').value ;
    let userdata={
        username:name,
        useremail:email,
        userpassword:password
    }
    console.log(userdata);
    document.getElementById('mdiv').style.display = 'none';
    document.getElementById('divname').innerHTML ='HI '+name;
    document.getElementById('divemail').innerHTML ='Your email ' +email;

    localStorage.setItem("username",name);
    localStorage.setItem("useremail",email);
    localStorage.setItem("userpassword",password);
}

function login() {
    let email = document.getElementById('lemail').value ;
    let password = document.getElementById('lpassword').value ;
    console.log(email,password);

   let e = localStorage.getItem("useremail");
   let p = localStorage.getItem("userpassword");

   if(email==e && password==p) {
     console.log('login successful');
   }
   else
   console.log('login failed');
}



