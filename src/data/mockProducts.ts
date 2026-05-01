export interface Product {
  codigo: string;
  nombre: string;
  medidas: string;
  imagen: string;
  categoriaSlug: string;
  origen?: string;
}

export const mockProducts: Product[] = [
  // Bolsos y Carteras (/catalogo/bolsos-carteras)
  { nombre: 'Bolsos Tipo Cartera', codigo: 'K013CA', medidas: '30 x 43 cm (Base: 27 x 14 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/bolsos-tipo-cartera.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolsos Cuadrados', codigo: 'K021BC', medidas: '30 x 30 cm (Base: 14 x 30 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/bolsos-cuadrados.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Cartera Trenzada', codigo: 'K038TR', medidas: '31 x 40 cm (Base: 12 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/carteras-trenzadas.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Maxi Cartera', codigo: 'K039MAX', medidas: '40 x 42 cm (Base y lateral: 13 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/maxi-carteras.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolsos Grandes', codigo: 'K012BG', medidas: '40 x 42 cm (Base: 33 x 14 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/bolsos-grandes.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolso Pompom', codigo: 'K034POM', medidas: '27 x 41 cm (Base: 29 x 13 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/bolsos-pompom.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolso Bucket', codigo: 'K041CK', medidas: '29 x 32 cm (Base: 22 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/bolsos-bucket.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolso Playero', codigo: 'K035JU', medidas: '40 x 55 cm (Base: 15.5 cm)', categoriaSlug: 'bolsos-carteras', imagen: '/imagenes/categorias/bolsos-playeros.jpg', origen: 'Hecho a mano en El Salvador' },

  // Bandoleras y Morrales (/catalogo/bandoleras-morrales)
  { nombre: 'Bandoleras', codigo: 'K018B', medidas: '22 x 25 cm (Base: 20 x 5 cm)', categoriaSlug: 'bandoleras-morrales', imagen: '/imagenes/categorias/bandoleras.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolso Media Luna', codigo: 'K040LUNA', medidas: '30 x 36 cm (Base: 11 cm, Altura central: 23 cm)', categoriaSlug: 'bandoleras-morrales', imagen: '/imagenes/categorias/bolso-media-luna.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Morrales', codigo: 'K024MR', medidas: '26 x 30 cm (Base: 6 x 24 cm)', categoriaSlug: 'bandoleras-morrales', imagen: '/imagenes/categorias/morrales.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolsos Hobo', codigo: 'K027H0B', medidas: '25 x 42 cm (Base: 33 x 10 cm)', categoriaSlug: 'bandoleras-morrales', imagen: '/imagenes/categorias/bolsos-hobo.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bandolera Masculina', codigo: 'K042MEN', medidas: '25 x 19.5 cm', categoriaSlug: 'bandoleras-morrales', imagen: '/imagenes/categorias/bandolera-masculina.jpg', origen: 'Hecho a mano en El Salvador' },

  // Monederos y Estuches (/catalogo/monederos-estuches)
  { nombre: 'Monedero Pequeño', codigo: 'K001MNP', medidas: '8 x 10 cm', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/monederos.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Monedero Mediano', codigo: 'K044OCC', medidas: '12 x 11 cm', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/monederos.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Monedero Doble Zipper', codigo: 'K019MN2', medidas: '12 x 16 cm', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/monederos.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Monedero Origenes', codigo: 'K043OPP', medidas: '11 x 10 cm', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/monederos.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Carteras Doble Zipper', codigo: 'K003SS', medidas: '22 x 17 cm', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/carteras-doble-zipper.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Estuche para Celular, de mano', codigo: 'K030CEL', medidas: '14 x 21 cm', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/estuches-para-celular.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Estuche de Celular con Asa', codigo: 'K031CEL', medidas: '14 x 21 cm', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/estuches-para-celular.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Cosmetiqueras', codigo: 'K002CQ', medidas: '16 x 25 cm (Base: 5 cm)', categoriaSlug: 'monederos-estuches', imagen: '/imagenes/categorias/cosmetiqueras.jpg', origen: 'Hecho a mano en El Salvador' },

  // Especialidades (/catalogo/especialidades)
  { nombre: 'Lonchera para Almuerzo', codigo: 'K036LON', medidas: '19 x 26 cm (Contorno: 17 x 19 cm)', categoriaSlug: 'especialidades', imagen: '/imagenes/categorias/loncheras.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Mandiles Denim', codigo: 'K028DDG', medidas: '77 x 71 cm (Talla única, asa ajustable)', categoriaSlug: 'especialidades', imagen: '/imagenes/categorias/mandiles-denim.jpg', origen: 'Hecho a mano en El Salvador' },
  { nombre: 'Bolso Multiusos', codigo: 'K020BS', medidas: '34 x 39 cm (Base: 5 cm)', categoriaSlug: 'especialidades', imagen: '/imagenes/categorias/bolsos-multiusos.jpg', origen: 'Hecho a mano en El Salvador' },
];
