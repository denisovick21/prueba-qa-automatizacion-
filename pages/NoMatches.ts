import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NoMatches extends BasePage{

    readonly modalBusqueda: Locator;
    readonly leyendaBusqueda: Locator;
    readonly resultados: Locator;


    constructor(page: Page){
        super(page);

        //localizadores
        this.modalBusqueda=page.locator('#content');
        this.leyendaBusqueda=page.locator('#product-search-no-matches');
        this.resultados=page.locator('.products row');



    }
}
