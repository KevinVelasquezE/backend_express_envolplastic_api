import cnx from '../config/config.js';

export const generarOrdenDeVenta = async(cabecera, detalles)=>{
    const cn = await cnx.getConnection();
    try {
        await cn.beginTransaction();
        //Cabecera 
        const sqlCabecera= "INSERT INTO CABECERA(codigo,serie,correlativo,fecha_emision,"+
        "importe_sub_total,igv,importe_total,id_persona,id_usuario,descripcion,estado)"+
        "VALUES(?,?,?,?,?,?,?,?,?,?,?)";
        const cabeceraParametros = [
            cabecera.codigo,cabecera.serie,cabecera.correlativo,cabecera.fecha_emision,
            cabecera.importe_sub_total,cabecera.igv,cabecera.importe_total,cabecera.id_persona,
            cabecera.id_usuario,cabecera.descripcion,cabecera.estado
        ];
        const [cabereraResultado] = await cn.execute(sqlCabecera, cabeceraParametros);
        const cabeceraId = cabereraResultado.insertId;
        //Detalles
        const sqlDetalles = "INSERT INTO DETALLES(id_cabecera,id_producto,cantidad,precio_unitario,sub_total)VALUES(?,?,?,?,?)";
        for (let i = 0; i < detalles.length; i++) {
            const item= detalles[i];
            const detallesParametros = [cabeceraId, item.id_producto,item.cantidad,
                item.precio_unitario,item.sub_total,
            ];
            await cn.execute(sqlDetalles, detallesParametros);
        }
        await cn.commit();
        return {id: cabeceraId, ...cabecera, ...detalles};
    } catch (error) {
        await cn.rollback();
        throw error;
    }finally{
        cn.release();
    }
}