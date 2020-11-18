import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertRHPage } from './insert-rh.page';

describe('InsertRHPage', () => {
  let component: InsertRHPage;
  let fixture: ComponentFixture<InsertRHPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRHPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertRHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
