import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { SampleCardComponent } from './components/sample-card/sample-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        PageWrapperComponent,
        RoundButtonComponent,
        SampleCardComponent,
        FooterComponent,
        ContactComponent,
        ToggleComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        PageWrapperComponent,
        RoundButtonComponent,
        SampleCardComponent,
        FooterComponent,
        ContactComponent,
        ToggleComponent,
        HeaderComponent,
    ],
    providers: [
        DatePipe,
        PercentPipe,
        CurrencyPipe,
    ]
})
export class SharedModule { }
