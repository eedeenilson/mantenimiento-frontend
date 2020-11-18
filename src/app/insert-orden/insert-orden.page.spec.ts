import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertOrdenPage } from './insert-orden.page';

describe('InsertOrdenPage', () => {
  let component: InsertOrdenPage;
  let fixture: ComponentFixture<InsertOrdenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOrdenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
