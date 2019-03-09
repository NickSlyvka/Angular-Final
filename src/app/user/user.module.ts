import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent, LoginSocialComponent, RegisterComponent } from './pages';

import{ SocialLoginModule, AuthServiceConfig} from "angularx-social-login";
import{ GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";


let config =  new AuthServiceConfig([
 {
 id:  GoogleLoginProvider.PROVIDER_ID,
 provider:  new GoogleLoginProvider("Google-OAuth-Client-Id")
 },
 {
 id:  FacebookLoginProvider.PROVIDER_ID,
 provider:  new FacebookLoginProvider("2051594101619899")
 },
 {
 id:  LinkedInLoginProvider.PROVIDER_ID,
 provider:  new LinkedInLoginProvider("LinkedIn-client-Id", false, ' en_US')
 }
]);

 export function provideConfig() {
 return config;
}


@NgModule({
  declarations: [
    LoginComponent,
    LoginSocialComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SocialLoginModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    {
    provide:  AuthServiceConfig,
    useFactory:  provideConfig
    }
    ],
  exports: [
    LoginComponent,
  ]
})
export class UserModule { }
