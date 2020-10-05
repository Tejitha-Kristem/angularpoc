import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NamefilterPipe } from './namefilter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    NamefilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
