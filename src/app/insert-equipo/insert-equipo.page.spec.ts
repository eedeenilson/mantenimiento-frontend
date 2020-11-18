import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertEquipoPage } from './insert-equipo.page';

describe('InsertEquipoPage', () => {
  let component: InsertEquipoPage;
  let fixture: ComponentFixture<InsertEquipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEquipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
