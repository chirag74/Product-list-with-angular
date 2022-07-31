import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { PrdouctListComponent } from './component/prdouct-list/prdouct-list.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';

const route : Routes = [
  {path : '', component : WelcomeComponent },
   {path : 'product', component : PrdouctListComponent},
   {path: 'category', component : CategoryListComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    PrdouctListComponent,
    CategoryListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





