import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../../_service/data';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.sass']
})
export class StickyNoteComponent implements OnInit {
  @Input() data: Data;
  constructor(data: Data) {
    this.data = data;
  }
  ngOnInit(): void {
  }

}
