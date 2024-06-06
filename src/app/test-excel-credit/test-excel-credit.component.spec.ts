import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExcelCreditComponent } from './test-excel-credit.component';

describe('TestExcelCreditComponent', () => {
  let component: TestExcelCreditComponent;
  let fixture: ComponentFixture<TestExcelCreditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestExcelCreditComponent]
    });
    fixture = TestBed.createComponent(TestExcelCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
