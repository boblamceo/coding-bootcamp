import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, rootUrl, User } from './models/User';

const users = new Collection(rootUrl, (json: UserProps) => {
    return User.buildUser(json);
});

users.on('change', () => {
    const root = document.getElementById('root');

    if (root) {
        new UserList(root, users).render();
    }
});

users.fetch();
