<template>
    <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <form>
                        <h2>Login Form</h2>
                        <div class="form-group">
                            <label>Email</label>
                            <input class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input class="form-control"/>
                        </div>
                        <div class="my-3">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login{
    width: 100%;
    height: 100%;
    padding: 0;
   margin:0;
}
.login .row{
    padding: 10px;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.login .row .col-md-6{
    width: 50%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
}
.login .row .col-md-6 form{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
.login .row .col-md-6 form h2{
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
    padding:10px;
    margin: 0;
}
.login .row .col-md-6 form label{
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 5px;
    margin: 0;
}
.login .row .col-md-6 form .btn{
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    color: #000;
}
</style>