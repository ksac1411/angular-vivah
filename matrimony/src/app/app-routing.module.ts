

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SearchbycriteriaComponent } from './searchbycriteria/searchbycriteria.component';
import { SearchbyidComponent } from './searchbyid/searchbyid.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SearchComponent } from './search/search.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { FiltersComponent } from './filters/filters.component';
import { SettingComponent } from './setting/setting.component';
import { SortbyComponent } from './sortby/sortby.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MemberComponent } from './member/member.component';
import { ActivityComponent } from './activity/activity.component';
import { MatchesComponent } from './matches/matches.component';
import { FeedbackComponent } from './feedback/feedback.component';



const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
{path:'messenger', component:MessengerComponent},
  {path:'contactus',component:ContactusComponent},
{ path: 'edit-profile', component: EditprofileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'Phonebook', component: PhonebookComponent },
  { path: 'sort-by', component: SortbyComponent },
  { path: 'filters', component: FiltersComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'help', component: HelpComponent },
  { path: 'subscription', component:SubscriptionComponent },
{path:'chat-window',component:MessengerComponent},
{path:'chat-list',component:MessengerComponent},
{ path: 'chat-list', component: ChatListComponent },
{ path: 'chat/:userId', component: ChatWindowComponent },
  {path:'Forgotpassword',component:ForgotpasswordComponent},
{path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login' ,component:LoginComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'Help' ,component:HelpComponent}, 
{ path: 'search-by-id', component: SearchbyidComponent },
{ path: 'search-by-criteria', component:SearchbycriteriaComponent }, 
{ path: '', component: HomeComponent }, 
{ path: 'matches', component: MatchesComponent },
{ path: 'activity', component: ActivityComponent },
{ path: 'messenger', component: MessengerComponent },
{ path: 'member', component: MemberComponent },
{ path: 'Feedback', component: FeedbackComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }