import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateScrumFormComponent } from './template-scrum-form.component';

describe('TemplateScrumFormComponent', () => {
  let component: TemplateScrumFormComponent;
  let fixture: ComponentFixture<TemplateScrumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateScrumFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateScrumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
