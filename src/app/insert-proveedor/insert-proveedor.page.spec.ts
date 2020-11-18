import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertProveedorPage } from './insert-proveedor.page';

describe('InsertProveedorPage', () => {
  let component: InsertProveedorPage;
  let fixture: ComponentFixture<InsertProveedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertProveedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
