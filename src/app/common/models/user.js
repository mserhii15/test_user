
export class UserLogin {
  constructor(args) {
    this.username = args && args.username || null;
    this.password = args && args.password || null;
  }
}

export class User extends UserLogin {
  constructor(args) {
    super(args)
    if (args && args.id) {
      this.id = args.id;
    }
    this.email = args && args.email || null;
    this.firstName = args && args.firstName || null;
    this.lastName = args && args.lastName || null;
    this.type = args && args.type || 'Driver';
  }
}
