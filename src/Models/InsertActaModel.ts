import { ArregloPagoModel } from "./ArregloPagoModel";


export class InsertActaModel {
    IdAccionSeguimientoFlujo: any;
    NroExpedienteIntegral: any;
    NroExpedienteInterno: any;
   // Tipo: number;
    FechaActa: any;
   // RutaArchivo: string;
    TieneInfraccion: any;
    TieneArregloPago: any;
    //Estado: number;
    rutasActas:any[];
    rutasAttch:any[];
    IdAccionSeguimiento:any;
    ArregloPago: ArregloPagoModel;
    createAt:Date;
    hasError:any;
    constructor(){
        this.createAt = new Date();
    }


   
}