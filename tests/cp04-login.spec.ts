import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import { asyncWrapProviders } from 'node:async_hooks';
import { LoginPage } from '../pages/LoginPage';



test('CCP-04: login con credenciales incorrectas', async ({page})=>{

    
    const homePage=new HomePage(page);
    const loginPage=new LoginPage(page);


    //abrir la tienda
    await homePage.abrirTienda();

    //arbrir el login
    await homePage.abrirLogin();

    //escribir el correo
    await loginPage.ingresarCorreo('qa.candidato@example.com');

    //ingresar contrasena
    await loginPage.ingresarContrasena('2156165');

    //presionar boton de login
    await loginPage.botonLogin();

    //estado de logueo
    await expect(loginPage.estadoLogueo).toContainText('Authentication failed.');

    











});
