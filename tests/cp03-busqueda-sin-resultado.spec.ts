import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {ProductPage} from '../pages/ProductPage';
import { NoMatches } from '../pages/NoMatches';


test('CCP-03: Búsqueda sin resultados--casonegativo', async ({page})=>{


    const homePage=new HomePage(page);
    const noMatches=new NoMatches(page);

       //abrir la tienda
    await homePage.abrirTienda();

    
    //navegar y busqueda por palabra
    await homePage.buscarProducto('xyzqw123');
    await homePage.presionarEnter();

    //validaciones
    //realiza el conteo de las busquedas
    await expect(noMatches.resultados).toHaveCount(0);
    //valida el texto resultado de la busqueda
    await expect(noMatches.leyendaBusqueda).toContainText('No matches were found for your search');



})
