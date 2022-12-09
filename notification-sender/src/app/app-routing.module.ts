import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotificationHistoryComponent } from './notification-history/notification-history.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';



const routes = [
  {path : 'home', component : AppComponent},
  {path : 'login', component : LogInComponent},
  {path : 'signup', component : SignUpComponent},
  {path : 'dashboard/home', component : DashboardComponent},
  {path : 'landing-page', component: LandingPageComponent},
  {path : 'contacts', component: ContactsComponent},
  {path : 'notification-history', component: NotificationHistoryComponent},
  {path : 'send-notification', component: SendNotificationComponent},
  {path : 'contacts/add-contact', component: AddContactComponent},
  {path : 'contacts/edit-contact', component: UpdateContactComponent },
  {path : 'contacts/delete-contact', component: DeleteContactComponent }


]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
