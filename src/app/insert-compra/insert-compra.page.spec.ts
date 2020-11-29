import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertCompraPage } from './insert-compra.page';

describe('InsertCompraPage', () => {
  let component: InsertCompraPage;
  let fixture: ComponentFixture<InsertCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
