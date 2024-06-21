import { Component, OnInit } from '@angular/core';
import { CardComponent } from '@app/shared/layout/card/card.component';
import { TableComponent } from '@app/shared/layout/table/table.component';
import {
  TableActions,
  TableColumn,
} from '@app/shared/layout/interfaces/table-actions';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductEditComponent } from '@app/modules/products/product-edit/product-edit.component';
import { LateralMenuComponent } from '@app/shared/layout/lateral-menu/lateral-menu.component';
import { ProductsService } from '../services/products.service';
import { AlertService } from '@app/core/services/alert.service';
import { LoadingService } from '@app/core/services/loading.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CardComponent,
    TableComponent,
    MatDialogModule,
    LateralMenuComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  buttonActionName: string = 'Agregar producto';

  constructor(
    private _dialog: MatDialog,
    private _product: ProductsService,
    private _alert: AlertService,
    private _loading: LoadingService
  ) {}

  ngOnInit() {
    this.getAllProduct();
  }

  tableActions: TableActions = {
    add: true,
    edit: true,
    delete: true,
  };

  columnsTable: TableColumn[] = [
    { name: 'Nombre', key: 'nombre', type: 'text' },
    { name: 'Descripción', key: 'detalle', type: 'text' },
    { name: 'Precio', key: 'valor', type: 'text' },
  ];

  tableData: any = [];

  addProduct() {
    const refDialog = this._dialog.open(ProductEditComponent, {});
    refDialog.afterClosed().subscribe({
      next: (value) => value && this.getAllProduct(),
    });
  }

  getAllProduct() {
    this._loading.show();
    this._product.getAllProducts().subscribe({
      next: (data) => {
        this.tableData = data.data;
        this._loading.hide();
      },
      error: () => {
        this._loading.hide();
        this._alert.warning('Hubo un problema al intentar traer el producto');
      },
    });
  }

  editProduct(value: any) {
    const refDialog = this._dialog.open(ProductEditComponent, {
      data: value.id_producto,
    });
    refDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.getAllProduct();
      }
    });
  }

  deleteProduct(value: any) {
    this._loading.show();
    this._alert.info('eliminando producto');
    this._product.deleteProduct(value).subscribe({
      next: () => {
        this._loading.hide();
        this.getAllProduct();
        this._alert.success('Producto Eliminado');
      },
      error: () => {
        this._loading.hide();
        this._alert.warning('Hubo un error al intentar eliminar el producto');
      },
    });
  }
}
