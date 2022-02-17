module.exports = class ProdCarrito{
    id: number;
    timestamp: Date;
    nombre: string;
    descripcion: string; 
    codigo: number; 
    foto: string;
    precio: number;
    stock: number;
    
    constructor(){
        this.id = 0
        this.timestamp = new Date();
        this.nombre = '';
        this.descripcion = ''; 
        this.codigo = 0 ; 
        this.foto = '';
        this.precio = 0.00;
        this.stock = 0;
    }
}
