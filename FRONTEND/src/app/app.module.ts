import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { PhonePipePipe } from './phone-pipe.pipe';
import { LetterOnlyDirective } from './letter-only.directive';
import { NumberOnlyDirective } from './number-only.directive';
import { ClientService } from './client.service';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ClientInfoComponent,
    PhonePipePipe,
    LetterOnlyDirective,
    NumberOnlyDirective,
    CatalogComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
