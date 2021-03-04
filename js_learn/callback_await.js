// callback을 묶어 쓴걸 promise를 이용해 수정하기, await을 이용해 정리하기
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'barim' && password === '0728') ||
                    (id === 'gradate' && password === '1492')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('wrong id or password'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'barim') {
                    resolve({ name: 'barim', role: 'admin' });
                }
                if (user === 'gradate') {
                    resolve({ name: 'gradate', role: 'subAdmin' })
                } else {
                    reject(new Error('no roles'));
                }
            }, 1000);
        })
    }

    async getUserAndRole(id, password) {
        const user = await this.loginUser(id, password);
        const role = await this.getRoles(id);
        return role;
    };
}



const userStorage = new UserStorage();
const id = prompt('ID : ');
const password = prompt('Password : ');

userStorage.getUserAndRole(id, password).catch(console.log).then(console.log);