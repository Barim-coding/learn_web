// callback을 묶어 쓴 경우
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'barim' && password === '0728') ||
                (id === 'gradate' && password === '1492')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('wrong id or password'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'barim') {
                onSuccess({ name: 'barim', role: 'admin' });
            }
            if (user === 'gradate') {
                onSuccess({ name: 'gradate', role: 'subAdmin' })
            } else {
                onError(new Error('no roles'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('ID : ');
const password = prompt('PW : ');

userStorage.loginUser(
    id, password,
    user => {
        userStorage.getRoles(
            user,
            userRole => {
                alert(`hello ${userRole.name}, u r ${userRole.role}`);
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {
        alert(error);
        console.log(error);
    }
);