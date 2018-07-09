import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'skill-rating',
  templateUrl: './skill-rating.component.html',
  styleUrls: ['./skill-rating.component.scss']
})
export class SkillRatingComponent implements OnInit {
  @Input() title = '';
  @Input() rating = 0;
  @Input() pointsToSpend = 0;
  @Input() canBeAdjusted = true;
  @Input() lowerLimit = 1;

  @Output() ratingChanged = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
    // Don't allow a user to go below the base rating
  }

  increment() {
    // What is the new value for this rating
    const newValue = this.rating + 1;

    // Don't allow the value to go over 6
    if (newValue > 6) { return; }

    // Emit the update
    this.ratingChanged.emit({ name: this.title.toLowerCase(), value: 1 });
  }

  decrement() {
    // What is the new value for this rating
    const newValue = this.rating - 1;

    // Make sure the user can't go below their base value
    if (newValue < this.lowerLimit) { return; }

    // Emit the update
    this.ratingChanged.emit({ name: this.title.toLowerCase(), value: -1 });
  }

}
