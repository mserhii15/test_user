export default function UserService(
  $http, $state
) {
  'ngInject';

  const service = this;
  service.users = [
    {
      username: 'username1',
      firstName: 'firstName1',
      lastName: 'lastName1',
      email: 'email1@example.com',
      type: 'type1',
    },
    {
      username: 'username2',
      firstName: 'firstName2',
      lastName: 'lastName2',
      email: 'email2@example.com',
      type: 'type2',
    },
    {
      username: 'username3',
      firstName: 'firstName3',
      lastName: 'lastName3',
      email: 'email3@example.com',
      type: 'type3',
    },
    {
      username: 'username4',
      firstName: 'firstName4',
      lastName: 'lastName4',
      email: 'email4@example.com',
      type: 'type4',
    },
    {
      username: 'username5',
      firstName: 'firstName5',
      lastName: 'lastName5',
      email: 'email5@example.com',
      type: 'type5',
    }
  ];


  service.fetchUsers = () => {
    service.getUsers().then(users => {
      service.users = users;
    });
  };

  service.getUsers = () => {
    return $http({
      method: 'GET',
      url: `http://localhost:3000/users`
    }).then(resp => {
      return resp.data;
    });
  }

  service.createUser = (user) => {
    return $http({
      method: 'POST',
      url: `http://localhost:3000/users`,
      data: user,
    }).then(resp => {
      service.users = [...service.users, resp];
    });
  }

  service.getUserById = (userId) => {
    let user = service.users.find(user => user.id === Number(userId))
    if (user) {
      return Promise.resolve(user);
    }
    return $http({
      method: 'GET',
      url: `http://localhost:3000/users?userId=${userId}`
    }).then(resp => {
      if (!resp.data[0]) {
        $state.go('users.forbidden');
      }
      return resp.data[0];
    });
  }

  service.updateUser = (user) => {
    return $http({
      method: 'PATCH',
      url: `http://localhost:3000/users/${user.id}`,
      data: user
    }).then(resp => {
      service.users = service.users.map(user => {
        return {
          ...user,
          ...(resp.data.id === user.id ? resp.data : {}),
        }
      });
    });
  }

  service.deleteUser = (userId) => {
    return $http({
      method: 'DELETE',
      url: `http://localhost:3000/users/${userId}`
    }).then(() => {
      service.users = service.users.filter(user => user.id === userId);
    });
  }
}
