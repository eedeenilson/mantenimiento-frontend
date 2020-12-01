import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "Inicio",
          url: "/tabs/tab1",
          icon: "home-outline"
        },
        {
          title: "Nueva Orden",
          url: "/insert-orden",
          icon: "reader-outline"
        },
        {
          title: "Ordenes Activas",
          url: "/ordentrabajo",
          icon: "hammer-outline"
        },
        {
          title: "Ordenes Inacivas",
          url: "/ordentrabajo-inactivas",
          icon: "checkmark-circle-outline"
        },
        {
          title: "Acerca de",
          url: "/about",
          icon: "help-circle-outline"
        },

      ]
  }
}


