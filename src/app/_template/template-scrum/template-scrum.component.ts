import { Component, OnInit } from '@angular/core';
import { StickyNoteComponent} from '../sticky-note/sticky-note.component';
import {Data} from '../../_service/data';
import {DataService} from '../../_service/data.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-template-scrum',
  templateUrl: './template-scrum.component.html',
  styleUrls: ['./template-scrum.component.sass']
})
export class TemplateScrumComponent implements OnInit {
  data: Data;
  public notes: Data[] = [];

  constructor(private dataService: DataService) {
    this.data = new Data('hi', 'test');
    this.notes.push(this.data);
  }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.dataService.getTasks().subscribe(
      (response: Data[]) => {
        this.notes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit(data: Data): void {
    this.data = data;
    this.data.date = new Date();
    this.notes.push(this.data);
    this.dataService.addNote(data);
  }
}

