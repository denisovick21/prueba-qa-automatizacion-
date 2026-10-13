import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {ProductPage} from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { asyncWrapProviders } from 'node:async_hooks';

test('CP-01: Búsqueda de producto y agregado al carrito', async ({page})=>{


    const homePage=new HomePage(page);
    const productPage=new ProductPage(page);
    const cartPage=new CartPage(page);

    //abrir la tienda
    await homePage.abrirTienda();

    //navegar y busqueda por palabra
    await homePage.buscarProducto('best');
    //selecciona la sugerencia de acuerdo al texto
    await homePage.seleccionarSugerencia("The best is yet to come'");

    //verificar  el nombre y precio del producto
    await expect(productPage.tituloProducto).toBeVisible();
    await expect(productPage.tituloProducto).toHaveText("The best is yet to come' Framed poster");
    //validamos el que el precio sea visible y que contenga el monto esperado
    await expect(productPage.precioProducto).toBeVisible();
    await expect(productPage.precioProducto).toContainText('29.00')
    
    //desplazarse hasta la seccion de descripcion o detalles del producto
    await productPage.tabDescripcion.scrollIntoViewIfNeeded();
    await expect(productPage.tabDescripcion).toBeVisible();
    await expect(productPage.tabDescripcion).not.toBeEmpty();
    await expect(productPage.textoDescripcion).toContainText('The best is yet to come!');
    
    //seccion detalle
    await productPage.tabDetallesProducto.scrollIntoViewIfNeeded();
    await productPage.abrirDetallesProducto();
    await expect(productPage.tabDetallesProducto).toBeVisible();
    await expect(productPage.tabDetallesProducto).not.toBeEmpty();
    await expect(productPage.textoDetalles).toContainText('Reference')


    //selecciona otra dimension
    await productPage.nuevaDimension("21");


    //ingresar nueva cantidad
    await productPage.ingresarCantidad(2)


    //anadir al carrito
    await productPage.anadirCarrito();
    await page.pause();


    //validar informacion en el moda
    await expect(cartPage.modalConfirmacion).toBeVisible();
    await expect(cartPage.modalNombreProducto).toContainText("The best is yet to come");
    await expect(cartPage.modalCantidad).toHaveText('2');
    //await expect(cartPage.modalSubtotal).toHaveText('$158.00');
    await page.pause();

    //dar click en el boton continuar compra
    await cartPage.seguirCompra();
});