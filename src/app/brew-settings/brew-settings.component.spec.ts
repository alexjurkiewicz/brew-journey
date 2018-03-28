import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewSettingsComponent } from './brew-settings.component';

describe('BrewSettingsComponent', () => {
  let component: BrewSettingsComponent;
  let fixture: ComponentFixture<BrewSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
