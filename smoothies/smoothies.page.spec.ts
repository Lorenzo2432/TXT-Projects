import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmoothiesPage } from './smoothies.page';

describe('SmoothiesPage', () => {
  let component: SmoothiesPage;
  let fixture: ComponentFixture<SmoothiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmoothiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
