import { Locator, Page } from '@playwright/test';
import {BasePage} from './BasePage';

export class ProductPage extends BasePage{

    // Definimos y Exponemos el localizador de la descripción como propiedad pública
     readonly tituloProducto: Locator;
     readonly precioProducto: Locator;
     readonly tabDescripcion: Locator;
     readonly tabDetallesProducto: Locator;
     readonly textoDescripcion: Locator;
     readonly textoDetalles: Locator;
     readonly Cantidad: Locator;
     readonly seleccionarDimension: Locator;
     readonly botonAnadir: Locator;
     
    constructor(page: Page){
        super(page);

        //localizadores 
        this.tituloProducto=page.getByRole('heading', { name: "The best is yet to come' Framed poster" });
        this.precioProducto=page.locator('.current-price-value');
        this.Cantidad= page.locator('#quantity_wanted');
        this.botonAnadir=page.getByRole('button', { name: ' Add to cart' });
        this.tabDescripcion=page.getByRole('tab', { name: 'Description' });
        this.tabDetallesProducto=page.getByRole('tab', { name: 'Product Details' })
        this.textoDescripcion=page.getByText('The best is yet to come! Give');
        this.textoDetalles=page.getByText('Reference demo_6 In stock');
        this.seleccionarDimension=page.getByLabel('Dimension');

    }

    //metodos

    //para ingresar la cantidad en el input
    async ingresarCantidad(cantidad: string | number): Promise<void> {
        await this.Cantidad.click();
        await this.Cantidad.fill('')
        await this.Cantidad.fill(cantidad.toString());
    }

    //accion de presionar el boton add to cart
    async anadirCarrito(){
        await this.botonAnadir.waitFor({ state: 'visible'});
                await this.botonAnadir.click();
    }

    async scroll(){
        await this.tabDescripcion.scrollIntoViewIfNeeded();
        await this.tabDescripcion.click();
        await this.tabDescripcion.click();
        }

    //para abrir el tab de detalles del producto
    async abrirDetallesProducto(): Promise<void>{
        await this.tabDetallesProducto.click();
    }

    //seleccionar dimension dieferente a la precargada
    async nuevaDimension(valor: string): Promise<void>{
        await this.seleccionarDimension.scrollIntoViewIfNeeded();
            if(await this.seleccionarDimension.isVisible()){
                await this.seleccionarDimension.selectOption(valor);
            }
    }

}



