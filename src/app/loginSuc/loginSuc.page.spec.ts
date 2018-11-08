import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSucPage } from './loginSuc.page';

describe('LoginSucPage', () => {
  let component: LoginSucPage;
  let fixture: ComponentFixture<LoginSucPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSucPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});