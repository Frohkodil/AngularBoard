import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStickyNoteComponent } from './template-sticky-note.component';

describe('TemplateStickyNoteComponent', () => {
  let component: TemplateStickyNoteComponent;
  let fixture: ComponentFixture<TemplateStickyNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStickyNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStickyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
