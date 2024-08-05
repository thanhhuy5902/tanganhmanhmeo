import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({
    "projectId":"social-network-29cc2",
    "appId":"1:254585183877:web:364e6b675665d5413fd3ec",
    "storageBucket":"social-network-29cc2.appspot.com",
    "apiKey":"AIzaSyBpQV6zJ6jTgOJJ47S77IwzSgXEnGi6XR0",
    "authDomain":"social-network-29cc2.firebaseapp.com",
    "messagingSenderId":"254585183877"
  })),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()), provideAnimationsAsync()]
};
