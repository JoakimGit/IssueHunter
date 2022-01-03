import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styles: [],
})
export class LoaderComponent implements OnInit, OnDestroy {
  showLoader: boolean[] = [];
  loaderSub: Subscription;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loaderSub = this.loadingService.loading$.subscribe((val: boolean) => {
      if (val) {
        this.showLoader.push(val);
      } else {
        this.showLoader.pop();
      }
    });
  }

  ngOnDestroy(): void {
    this.loaderSub.unsubscribe();
  }
}
