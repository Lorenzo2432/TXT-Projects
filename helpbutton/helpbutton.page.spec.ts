import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpbuttonPage } from './helpbutton.page';

describe('HelpbuttonPage', () => {
  let component: HelpbuttonPage;
  let fixture: ComponentFixture<HelpbuttonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpbuttonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpbuttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
