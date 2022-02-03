import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) =>
            `Minimum of ${requiredLength} characters`,
          invalidAddress: (error) => `Address isn't valid`,
          email: 'This is not a valid e-mail address',
        },
      },
    }),
  ],
  exports: [FormsModule, ReactiveFormsModule, ErrorTailorModule],
})
export class SharedModule {}
