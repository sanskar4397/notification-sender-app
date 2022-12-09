import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogOutComponent } from './log-out/log-out.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotificationHistoryComponent } from './notification-history/notification-history.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    LogOutComponent,
    DashboardComponent,
    LandingPageComponent,
    ContactsComponent,
    NotificationHistoryComponent,
    SendNotificationComponent,
    AddContactComponent,
    UpdateContactComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports  : [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
