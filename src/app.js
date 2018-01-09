export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './modules/welcome/welcome', nav: true, title: 'Welcome' },
      { route: 'users', name: 'users', moduleId: './modules/user/users', nav: true, title: 'Github Users' },
      { route: 'child-router', name: 'child-router', moduleId: './modules/nav/child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
  someData = [];
  constructor() {
    this.someData = [
      { key: 'testkey', name: 'Dwayne' },
      { key: 'testkey2', name: 'Rod' },
      { key: 'testkey3', name: 'Todd' }
    ];
  }
}
