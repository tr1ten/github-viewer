import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.sass'],
})
export class DisplayErrorComponent {
  @Input() error: string = '';
  @Output() errorChange = new EventEmitter<string>();
  faTimes = faTimes;
  
}
