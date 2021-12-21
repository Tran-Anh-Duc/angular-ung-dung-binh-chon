import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from '../irating-unit';
@Component({
  selector: 'app-ratingbar-component',
  templateUrl: './ratingbar-component.component.html',
  styleUrls: ['./ratingbar-component.component.css']
})
export class RatingbarComponentComponent implements OnInit {

  @Input() max = 10;
  @Input() ratingValue = 5;
  @Input() showRatingValue = true;

  @Output() rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes['max'].currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max:any, ratingValue:number) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }))

  }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  select(index:number) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }

  enter(index:number) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
}
