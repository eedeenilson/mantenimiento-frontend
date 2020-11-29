import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdencompraPage } from './ordencompra.page';

describe('OrdencompraPage', () => {
  let component: OrdencompraPage;
  let fixture: ComponentFixture<OrdencompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdencompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdencompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
