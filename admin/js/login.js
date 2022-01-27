function signIn(){

    let login = document.getElementById('login').value
    let password = document.getElementById('password').value
    if(login == 'admin' && password == "123456")
    localStorage.setItem('admin', 'true')
    location.href = 'admin.html'
}
