import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdentrabajoInactivasPage } from './ordentrabajo-inactivas.page';

describe('OrdentrabajoInactivasPage', () => {
  let component: OrdentrabajoInactivasPage;
  let fixture: ComponentFixture<OrdentrabajoInactivasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdentrabajoInactivasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdentrabajoInactivasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
