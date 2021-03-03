import { Component, OnInit } from '@angular/core';
import { StickyNoteComponent} from '../sticky-note/sticky-note.component';
import {Data} from '../../_service/data';

@Component({
  selector: 'app-template-scrum',
  templateUrl: './template-scrum.component.html',
  styleUrls: ['./template-scrum.component.sass']
})
export class TemplateScrumComponent implements OnInit {
  data: Data;
  notes: Data[] = [];

  constructor() {
    this.data = new Data('hi', 'test');
    this.notes.push(this.data);
  }

  ngOnInit(): void {
  }

  onSubmit(data: Data): void {
    this.data = data;
    this.data.date = new Date();
    this.notes.push(this.data);
  }
}

