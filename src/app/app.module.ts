import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { FootageCalcComponent } from "./footage-calc/footage-calc.component";
import { CodecFormComponent } from "./codec-form/codec-form.component";
import { SpaceCalcComponent } from "./space-calc/space-calc.component";
import { TimeStringPipe } from "./time-string.pipe";
import { CustomCalcComponent } from "./custom-calc/custom-calc.component";
import { HelpModalComponent } from './help-modal/help-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FootageCalcComponent,
    CodecFormComponent,
    SpaceCalcComponent,
    TimeStringPipe,
    CustomCalcComponent,
    HelpModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
