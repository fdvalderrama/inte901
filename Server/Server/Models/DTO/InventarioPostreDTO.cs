﻿namespace Server.Models.DTO
{
    public class InventarioPostreDTO
    {
        public int? IdPostre { get; set; }
        public int? IdProducto { get; set; }
        public float? Cantidad { get; set; }
        public int? Estatus { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
