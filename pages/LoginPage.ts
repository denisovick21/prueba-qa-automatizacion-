import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    readonly inputEmail : Locator;
    readonly inputPassword: Locator;
    readonly presionarBoton: Locator;
    readonly estadoLogueo: Locator;


    constructor(page: Page){
        super(page);

        //localizadores
        this.inputEmail=page.locator('#field-email');
        this.inputPassword=page.locator('#field-password');
        this.presionarBoton=page.locator('#submit-login');
        this.estadoLogueo = page.locator('.alert.alert-danger');  
    }

    //metodos
    //ingresar correo
    async ingresarCorreo(texto: string): Promise<void> {
    await this.inputEmail.click();
    await this.inputEmail.fill(texto) 
    }


    //ingresar correo
    async ingresarContrasena(texto: string): Promise<void> {
    await this.inputPassword.click();
    await this.inputPassword.fill(texto) 
    }

    //presionar click
    async botonLogin(){
        await this.presionarBoton.click();
    }

}
