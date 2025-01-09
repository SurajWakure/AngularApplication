import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveComponentComponent } from './attribute-directive-component.component';

describe('AttributeDirectiveComponentComponent', () => {
  let component: AttributeDirectiveComponentComponent;
  let fixture: ComponentFixture<AttributeDirectiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDirectiveComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
