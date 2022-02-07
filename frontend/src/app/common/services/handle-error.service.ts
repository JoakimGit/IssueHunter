import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  constructor(private toastr: ToastrService) {}

  public handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred ${err.error.message}`;
    } else {
      errorMessage = `${err.status}: `;

      switch (err.status) {
        case 400:
          errorMessage += 'Bad Request';
          break;
        case 401:
          errorMessage += 'You are unauthorized to do this action';
          break;
        case 403:
          errorMessage += "You don't have the required permission to access the requested resource"; // prettier-ignore
          break;
        case 404:
          errorMessage += 'The requested resource does not exist';
          break;
        case 500:
          errorMessage += 'Internal Server error';
          break;
        case 503:
          errorMessage += 'The requested service is not available';
          break;

        default:
          errorMessage = 'Something went wrong';
      }
    }
    this.toastr.error(errorMessage);
  }
}
