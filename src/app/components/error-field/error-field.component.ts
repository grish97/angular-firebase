import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-field',
  standalone: true,
  imports: [],
  templateUrl: './error-field.component.html',
  styleUrl: './error-field.component.scss'
})
export class ErrorFieldComponent {
  @Input() isInvalid: boolean = false;
}
