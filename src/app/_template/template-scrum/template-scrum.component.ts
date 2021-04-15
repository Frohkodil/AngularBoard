import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../../_service/data';
import {DataService} from '../../_service/data.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-template-scrum',
  templateUrl: './template-scrum.component.html',
  styleUrls: ['./template-scrum.component.sass']
})
export class TemplateScrumComponent implements OnInit {
  @Input('beschreibung')
  description = 'empty';
  @Input('name')
  namen = 'test';

  public notes: Data[];

  constructor(private dataService: DataService) {
    this.notes = [];
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

  onSubmit(): void {

    this.notes.push(data);
    this.dataService.addNote(data);
  }
}

