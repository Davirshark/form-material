import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule,  MatInputModule, MatCheckboxModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
