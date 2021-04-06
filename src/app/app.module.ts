import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ManualCreateComponent } from './manualCreate/manualCreate.component';
import { CliCreatedComponent } from './cli-created/cli-created.component';
import { TrentHelloComponent } from './trent-hello/trent-hello.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { FormsModule } from '@angular/forms';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ManualCreateComponent,
    CliCreatedComponent,
    TrentHelloComponent,
    Assignment2Component,
    ForLoopComponent,
    Assignment3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
