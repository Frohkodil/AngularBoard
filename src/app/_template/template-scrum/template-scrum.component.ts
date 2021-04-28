import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../_service/data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Data} from '../../_service/data';

@Component({
  selector: 'app-template-scrum',
  templateUrl: './template-scrum.component.html',
  styleUrls: ['./template-scrum.component.sass']
})
export class TemplateScrumComponent implements OnInit {
  @Input('beschreibung')
  beschreibung = 'empty';
  @Input('name')
  namen = 'test';

  public openTasks: Data[];
  public progressTasks: Data[];
  public finishedTasks: Data[];
  public data!: Data;

  constructor(private dataService: DataService) {
    this.openTasks = [];
    this.progressTasks = [];
    this. finishedTasks = [];
  }

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.dataService.getTasks().subscribe(
      (response: Data[]) => {
        this.openTasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit(): void {
    this.data = new Data(this.namen, this.beschreibung);
    this.dataService.addNote(this.data).subscribe(data => {
      this.openTasks.push(data);
    },
      (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }
}

