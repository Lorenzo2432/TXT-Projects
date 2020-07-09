import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChickensaladPage } from './chickensalad.page';

describe('ChickensaladPage', () => {
  let component: ChickensaladPage;
  let fixture: ComponentFixture<ChickensaladPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickensaladPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChickensaladPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
