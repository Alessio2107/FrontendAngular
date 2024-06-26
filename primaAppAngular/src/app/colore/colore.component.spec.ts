import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoreComponent } from './colore.component';

describe('ColoreComponent', () => {
  let component: ColoreComponent;
  let fixture: ComponentFixture<ColoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
