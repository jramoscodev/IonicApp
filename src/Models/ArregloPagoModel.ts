export class ArregloPagoModel
{
    NroExpedienteIntegral:String;
    Nombre:String;
    ConceptoPago:String;
    DescripcionActa:String;
    TotalPago:number;
    NumPagos:number;
    Pagos:Pagos[];

}

export class Pagos {
    CuotaNum:Number;
    FechaPago:Date;
    FechaPagoText:String;
    MinDate:string;
    ValorPago:any;
}