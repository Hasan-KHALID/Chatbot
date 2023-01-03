import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotmsgComponent } from './botmsg/botmsg.component';
import { MymsgComponent } from './mymsg/mymsg.component';
import { MsgfooterComponent } from './msgfooter/msgfooter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BotmsgComponent,
    MymsgComponent,
    MsgfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
