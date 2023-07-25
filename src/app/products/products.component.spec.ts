import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductsComponent],
      providers: [ProductsService]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;

    // Inject the ProductsService
    productsService = TestBed.inject(ProductsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts on init', () => {
    const getProductsSpy = spyOn(productsService, 'getProducts').and.returnValue(of([]));

    fixture.detectChanges();  // ngOnInit()

    expect(getProductsSpy).toHaveBeenCalled();
  });

  it('should set products data correctly', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100, category: 'Category 1', description: 'Description 1', image: 'Image 1' },
      { id: 2, title: 'Product 2', price: 200, category: 'Category 2', description: 'Description 2', image: 'Image 2' }
    ];
    spyOn(productsService, 'getProducts').and.returnValue(of(mockProducts));

    fixture.detectChanges();  // ngOnInit()

    expect(component.products).toEqual(mockProducts);
  });
});
