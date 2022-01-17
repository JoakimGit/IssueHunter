import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/components/sidebar/sidebar.component';
import { HeaderComponent } from './common/components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutComponent } from './common/components/layout/layout.component';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './common/interceptors/loading.interceptor';
import { LoaderComponent } from './common/components/loader/loader.component';
import { UserModule } from './user/user.module';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './common/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
