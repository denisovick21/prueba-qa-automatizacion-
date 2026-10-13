import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage{

    readonly modalConfirmacion: Locator;
    readonly modalNombreProducto: Locator;
    readonly modalCantidad: Locator;
    readonly modalSubtotal: Locator;
    readonly botonContinuarComprando: Locator;

    constructor(page: Page){
        super(page);

        //Contenedor principal de la ventana de confirmacion
        this.modalConfirmacion=page.locator('#blockcart-modal');
        this.modalNombreProducto=page.locator('h6.product-name');
        this.modalCantidad=page.locator('.product-quantity strong');
        this.modalSubtotal=page.locator('.subtotal');
        this.botonContinuarComprando=page.getByText('Continue shopping');
    }

        //metodo para presionar click
        async seguirCompra(){
            await this.botonContinuarComprando.click();
        }
}


