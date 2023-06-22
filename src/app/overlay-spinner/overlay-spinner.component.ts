import { Component, ViewEncapsulation } from '@angular/core';
import { SpinnerService } from '../service/spinner/spinner.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class OverlaySpinnerComponent {
  constructor(public loader: SpinnerService) { }
}
