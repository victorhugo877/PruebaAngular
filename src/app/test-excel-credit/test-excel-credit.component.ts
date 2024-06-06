import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test-excel-credit',
  templateUrl: './test-excel-credit.component.html',
  styleUrls: ['./test-excel-credit.component.scss']
})
export class TestExcelCreditComponent {
  constructor(
    private translate: TranslateService
  ){
    this.translate.setDefaultLang('es');
  }
}
