const expect = require('expect');

const {Users} = require ('./users');

describe ('- Users', () => {
    let users;

    beforeEach ('Users', () => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Carrazco',
            room: 'El Retiro'
        }, {
            id: '2',
            name: 'Urzain',
            room: 'Baños Atocha'
        }, {
            id: '3',
            name: 'Kevin Jesus',
            room: 'El Retiro'
        }]
    });

    it ('- Should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Juan',
            room: 'Baño de Atocha'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it ('- Should remove a user.', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it ('- Should not remove user.', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it ('- Should find user.', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it ('- Should no find user.', () => {
        let userId = '102';
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it ('- Should return names for El Retiro.', () => {
        let userList = users.getUserList('El Retiro');

        expect(userList).toEqual(['Carrazco', 'Kevin Jesus']);
    });

    it ('- Should return names for "Baños Atocha".', () => {
        let userList = users.getUserList('Baños Atocha');

        expect(userList).toEqual(['Urzain']);
    });
});