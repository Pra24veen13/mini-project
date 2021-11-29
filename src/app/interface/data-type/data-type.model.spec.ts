import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypeModel } from './data-type.model';

describe('DataTypeModel', () => {
  let component: DataTypeModel;
  let fixture: ComponentFixture<DataTypeModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTypeModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTypeModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
