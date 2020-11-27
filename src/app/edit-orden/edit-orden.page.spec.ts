import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditOrdenPage } from './edit-orden.page';

describe('EditOrdenPage', () => {
  let component: EditOrdenPage;
  let fixture: ComponentFixture<EditOrdenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
