import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageErrorsDirective } from '@app/shared/directives/field-errors/directive/message-errors.directive';
import { RouterLink } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AlertService } from '@app/core/services/alert.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { InputMaskDirective } from '@app/shared/directives/input-mask.directive';
import { TrimDirective } from '@app/shared/directives/trim.directive';
import { LoadingService } from '@app/core/services/loading.service';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    FormsModule,
    MessageErrorsDirective,
    ReactiveFormsModule,
    RouterLink,
    NgSelectModule,
    InputMaskDirective,
    TrimDirective,
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss',
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  images: string[] = [];

  constructor(
    private _alert: AlertService,
    private _product: ProductsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialog: MatDialogRef<ProductEditComponent>,
    private _loader: LoadingService
  ) {}

  setDataProduct(data: any) {
    this.productForm.get('title')?.setValue(data['nombre']);
    this.productForm.get('price')?.setValue(data['valor']);
    this.productForm.get('description')?.setValue(data['detalle']);
  }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.getProductById(this.data);
    }
  }

  getProductById(id: any) {
    console.log(id);

    this._product.getProductById(id).subscribe({
      next: (data) => {
        this.setDataProduct(data.data);
      },
      error: () => {
        this._alert.error('Hubo un problema al obtener el producto :((');
      },
    });
  }

  initForm(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(3),
      ]),
      price: new FormControl('', [Validators.required]),
    });
  }

  sendDataRegisterProduct() {
    if (this.productForm.valid) {
      this._loader.show();
      const dataProduct: any = {
        nombre: this.productForm.get('title')?.value,
        valor: this.productForm.get('price')?.value,
        detalle: this.productForm.get('description')?.value,
      };

      const petition: Observable<any> = this.data
        ? this._product.updateProduct(this.data, dataProduct)
        : this._product.saveProduct(dataProduct);

      petition.subscribe({
        next: () => {
          this._loader.hide();
          this.productForm.reset();
          this.images = [];
          this.data
            ? this._alert.success('Producto actualizado exitosamente')
            : this._alert.success('Producto registrado exitosamente');
          this._dialog.close(true);
          this._product.getAllProducts();
        },
        error: () => {
          this._loader.hide();
          this.data
            ? this._alert.error('Hubo un problema al actualizar el producto.')
            : this._alert.error('Hubo un problema al registrar el producto.');
        },
      });
    } else {
      this.productForm.markAllAsTouched();
      this._alert.warning('Debes completar todos los campos');
    }
  }
}
