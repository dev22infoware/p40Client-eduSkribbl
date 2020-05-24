import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilePickerModule } from  'ngx-awesome-uploader';
import { FormsModule } from '@angular/forms';
import { MatchImageComponent } from './match-image/match-image.component';
import { MatchImageTextComponent } from './match-image-text/match-image-text.component';
@NgModule({
  declarations: [
    AppComponent,
    MatchImageComponent,
    MatchImageTextComponent
  ],
  imports: [
    FilePickerModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
