import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageCheckboxesComponent } from './checkboxes.component';

describe('PageCheckboxesComponent', () => {
  let component: PageCheckboxesComponent;
  let fixture: ComponentFixture<PageCheckboxesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
