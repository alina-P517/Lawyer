class App {
    constructor() {
        this.renderLogin();
    }

    selectButton(activeBtn, inactiveBtn) {
        
        activeBtn.style.backgroundColor = activeBtn.classList.contains('btn1') ? '#5476B7' : '#BB3E3E';
        activeBtn.style.color = 'white';
       
        inactiveBtn.style.backgroundColor = 'transparent';
        inactiveBtn.style.color = '#767272';
    }
    
    renderLogin() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `
            <div class="container" id="login-container">
                <div class="main-label">
                    <h1>ЮРПРО</h1>
                </div>
                <div class="button-container"> 
                    <button class="btn1">Клиент</button>
                    <button class="btn2">Юрист</button>
                </div>
        
                <div class="wrapper">
                    <form action="">
                        <h1>Вход</h1>
                        <div class="input-box">
                            <h3>Введите имя*</h3>
                            <input type="text" id="username" required>
                        </div>
                        <div class="input-box">
                            <h3>Введите номер телефона*</h3>
                            <input type="tel" id="phone" required>
                        </div>
                        <button type="submit" class="btn">Войти</button>
                        <div class="links">
                            <a href="#" id="reset-link">Забыли пароль?</a>
                            <a href="#" id="register-link">Регистрация</a>
                        </div>
                    </form>
                </div> 
            </div>
        `;

        const btn1 = appDiv.querySelector('.btn1');
        const btn2 = appDiv.querySelector('.btn2');

        btn1.addEventListener('click', () => this.selectButton(btn1, btn2));
        btn2.addEventListener('click', () => this.selectButton(btn2, btn1));

        document.getElementById('register-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.renderRegister();
        });

        document.getElementById('reset-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.renderResetPassword();
        });
    }
    
    renderRegister() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `
            <div class="container" id="register-container">
                <div class="main-label">
                    <h1>ЮРПРО</h1>
                </div>
                <div class="button-container"> 
                    <button class="btn1">Клиент</button>
                    <button class="btn2">Юрист</button>
                </div>
                <div class="wrapper-register">
                    <form action="">
                        <h1>Регистрация</h1>
                        <div class="input-box-register">
                            <h3>Введите имя*</h3>
                            <input type="text" id="username" required>
                        </div>
                        <div class="input-box-register">
                            <h3>Введите фамилию*</h3>
                            <input type="text" id="surname" required>
                        </div>
                        <div class="input-box-register">
                            <h3>Введите отчество*</h3>
                            <input type="text" id="firstname" required>
                        </div>
                        <div class="input-box-register">
                            <h3>Введите номер телефона*</h3>
                            <input type="tel" id="phone" required>
                        </div>
                        <div class="input-box-register">
                            <h3>Введите пароль*</h3>
                            <input type="password" id="password" required>
                        </div>
                        <div class="input-box-register">
                            <h3>Введите пароль еще раз*</h3>
                            <input type="password" id="confirm-password" required>
                        </div>
                        <button type="submit" class="btn-register">Зарегистрироваться</button>
                        <div class="links">
                            <a href="#" id="login-link">Уже есть аккаунт?</a>
                        </div>
                    </form>
                </div>
            </div>
        `;

        const btn1 = appDiv.querySelector('.btn1');
        const btn2 = appDiv.querySelector('.btn2');

        btn1.addEventListener('click', () => this.selectButton(btn1, btn2));
        btn2.addEventListener('click', () => this.selectButton(btn2, btn1));

        document.getElementById('login-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.renderLogin();
        });
    }

    renderResetPassword() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `
            <div class="container" id="reset-password-container">
                <div class="container" id="register-container">
                    <div class="main-label">
                        <h1>ЮРПРО</h1>
                    </div>
                    <div class="button-container"> 
                        <button class="btn1">Клиент</button>
                        <button class="btn2">Юрист</button>
                    </div> 

                </div>  
                <div class="wrapper-reset">
                    <form action="">
                        <h1>Восстановление пароля</h1>
                        
                        <div class="input-box-reset">
                            <h3>Введите номер телефона*</h3>
                            <input type="tel" id="phone" required>
                        </div>
                        <button type="submit" class="btn-reset">Получить пароль</button>
                        <div class="links">
                            <a href="#" id="login-link">Уже есть аккаунт?</a>
                        </div>
                    </form>
                </div>        
            </div>
        `;

        const btn1 = appDiv.querySelector('.btn1');
        const btn2 = appDiv.querySelector('.btn2');

        btn1.addEventListener('click', () => this.selectButton(btn1, btn2));
        btn2.addEventListener('click', () => this.selectButton(btn2, btn1));

        document.getElementById('login-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.renderLogin();
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new App();
});
