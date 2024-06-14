import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArancelComponent } from './arancel.component';

describe('ArancelComponent', () => {
  let component: ArancelComponent;
  let fixture: ComponentFixture<ArancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArancelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
