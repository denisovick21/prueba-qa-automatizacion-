//importa el tipo que representa una pagina del navegador
import { Page  } from '@playwright/test';

//creamos la clase para poder reuutilizarla en otras paginas
export class BasePage{
    //recibe y guarda la pesta;a del navegador
    constructor(protected page: Page){}

    //recibe la direccion  como texto y navega hacia ella
    async navegar(url: string ='/index.php') : Promise<void>{
        await this.page.goto(url);
    }

    //obtiene el titulo de la pagina
    async obtenerTitulo(): Promise<string>{
        return await this.page.title();
    }
}