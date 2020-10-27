export class ArregloPagoModel
{
    NroExpedienteIntegral:String;
    NroExpedienteInterno:String;
    Nombre:String;
    ConceptoPago:String;
    DescripcionActa:String;
    TotalPagar:number;
    CantidadPago:number;
    IdPatronoEmpleador:number;
    IdTrabajador:number;
    ArregloPago: Pagos[];

}

export class Pagos {
    CuotaNum:Number;
    FechaPago:Date;
    FechaPagoText:String;
    MinDate:string;
    ValorPagar:any;
}

export class PagoTesoreria {
    ListaDetallePago: Pagos[];
}