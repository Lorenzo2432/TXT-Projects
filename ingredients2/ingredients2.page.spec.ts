import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ingredients2Page } from './ingredients2.page';

describe('Ingredients2Page', () => {
  let component: Ingredients2Page;
  let fixture: ComponentFixture<Ingredients2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ingredients2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ingredients2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
