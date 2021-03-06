import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageNg2ChartsComponent } from './ng2-charts.component';

describe('PageNg2ChartsComponent', () => {
  let component: PageNg2ChartsComponent;
  let fixture: ComponentFixture<PageNg2ChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNg2ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNg2ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
