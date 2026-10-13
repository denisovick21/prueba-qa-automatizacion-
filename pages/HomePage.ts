
import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private campoBusqueda: Locator;
  private Login: Locator;

  readonly sugerencias: Locator;

  constructor(page: Page) {
    super(page);

    //localizadores
    this.campoBusqueda = page.getByPlaceholder('Search our catalog');
    this.sugerencias = page.locator('#ui-id-13 .ui-menu-item');
    this.Login=page.getByRole('link', { name: ' Sign in' });

  }

  async abrirTienda(): Promise<void> {
    await this.navegar('/index.php');
  
  }

  async abrirLogin(){
    await this.Login.click();
  }

  //para ingresar el texto en el input de busqueda
  async buscarProducto(texto: string): Promise<void> {
    await this.campoBusqueda.fill(texto);  
  }

  //presionar el enter despues del texto
  async presionarEnter(){
    await this.campoBusqueda.press('Enter');
  }

  async seleccionarSugerencia(nombreProducto: string):  Promise<void>{
    await this.page.locator('.ui-menu-item',{hasText: nombreProducto}).first().click();
  }

  




}
