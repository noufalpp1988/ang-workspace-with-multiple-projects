import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ClonesModule } from './modules/clones/clones.module';
import { ClonesComponent } from './modules/clones/clones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [ClonesModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
  // constructor(injector: Injector) {
  //   const custom = createCustomElement(ClonesComponent, { injector });
  //   customElements.define('app-clones', custom);
  // }
  // ngDoBootstrap() { }
}
