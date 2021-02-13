import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateScrumComponent } from './template-scrum.component';

describe('TemplateScrumComponent', () => {
  let component: TemplateScrumComponent;
  let fixture: ComponentFixture<TemplateScrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateScrumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
