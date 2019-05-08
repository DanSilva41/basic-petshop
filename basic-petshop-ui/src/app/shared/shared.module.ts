import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from "@angular/forms";
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ConfirmationModalService } from './confirmation-modal/confirmation-modal.service';
import { MatSnackBarModule } from "@angular/material";
import { MessageService } from './message/message.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  exports: [
    ConfirmationModalComponent
  ],
  declarations: [
    ConfirmationModalComponent,
    MatSnackBarModule
  ],
  providers: [
    ConfirmationModalService,
    MessageService
  ]
})
export class ShareModule {
}
