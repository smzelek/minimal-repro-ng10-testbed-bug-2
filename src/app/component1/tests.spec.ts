import { TestBed, } from '@angular/core/testing';
import { DependencyComponent } from '../dependency-component/dependency.component';
import { Component1 } from '../component1/component1.component';
import { By } from '@angular/platform-browser';

// 1 2 3 -> XX✓
// 2 1 3 -> XX✓
// 1 3 2 -> X✓✓
// 2 3 1 -> X✓✓
// 3 2 1 -> ✓✓✓

describe('3', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DependencyComponent,
        Component1
      ]
    })
  });

  it(`with everything declared should have Dependency Component`, () => {
    const fixture = TestBed.createComponent(Component1);
    fixture.detectChanges();

    const dependency = fixture.debugElement.query(By.directive(DependencyComponent))
    expect(dependency).toBeTruthy();
  });
});

describe('2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DependencyComponent,
      ]
    })
  });

  it(`only lists dependencies should have Dependency Component`, () => {
    const fixture = TestBed.createComponent(Component1);
    fixture.detectChanges();

    const dependency = fixture.debugElement.query(By.directive(DependencyComponent))
    expect(dependency).toBeTruthy();
  });
});


describe('1', () => {
  it(`with no module configuration should have Dependency Component`, () => {
    const fixture = TestBed.createComponent(Component1);
    fixture.detectChanges();

    const dependency = fixture.debugElement.query(By.directive(DependencyComponent))
    expect(dependency).toBeTruthy();
  });
});
