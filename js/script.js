var menuData = {
    categorias: ['Promociones', 'Tacos', 'Tortas', 'Quesadillas', 'Antojitos', 'Sopas y Caldos', 'Botanas / Compartir', 'Guarniciones', 'Postres', 'Bebidas sin Alcohol', 'Bebidas con Alcohol'],
    productos: {
        Promociones: [
            {
                nombre: 'Paquete Taquero',
                descripcion: '5 Tacos al Pastor con piña, cebolla y cilantro + 1 Agua fresca de Jamaica grande bien helada.',
                precio: '130',
                imagen: 'assets/mx/promociones/combo-taquero.webp',
                esPromo: true
            },
            {
                nombre: 'Combo Tortero',
                descripcion: '1 Torta Cubana caliente de milanesa, pierna y jamón + 1 Cerveza Victoria de 475cc.',
                precio: '140',
                imagen: 'assets/mx/promociones/combo-tortero.webp',
                esPromo: true
            },
            {
                nombre: 'Antojo Familiar',
                descripcion: 'Una entrada de Guacamole con Totopos crujientes + 6 Sopes surtidos + 2 Aguas de Horchata.',
                precio: '220',
                imagen: 'assets/mx/promociones/antojo-familiar.webp',
                esPromo: true
            }
        ],
        Tacos: [
            {
                nombre: 'Tacos al Pastor',
                descripcion: 'Orden de 3 tacos con carne de cerdo marinada al pastor, piña, cebolla y cilantro en tortilla de maíz.',
                precio: '75',
                imagen: 'assets/mx/tacos/tacos-al-pastor.webp'
            },
            {
                nombre: 'Tacos de Carnitas',
                descripcion: 'Tres tacos de suave carne de cerdo confitada al estilo Michoacán, servidos con cebolla y cilantro.',
                precio: '80',
                imagen: 'assets/mx/tacos/tacos-de-carnitas.webp'
            },
            {
                nombre: 'Tacos de Asada / Bistec',
                descripcion: 'Tres tacos con jugosa carne de res asada al carbón, servidos en tortillas de maíz con salsa al gusto.',
                precio: '90',
                imagen: 'assets/mx/tacos/tacos-de-asada-bistec.webp'
            },
            {
                nombre: 'Tacos de Pollo',
                descripcion: 'Orden de tres jugosos tacos de pollo deshebrado sazonado con jitomate, cebolla y un toque especial.',
                precio: '75',
                imagen: 'assets/mx/tacos/tacos-de-pollo.webp'
            },
            {
                nombre: 'Tacos de Chorizo',
                descripcion: 'Tres tacos de chorizo artesanal bien doradito a la plancha, acompañados con cilantro y cebolla fresca.',
                precio: '75',
                imagen: 'assets/mx/tacos/tacos-de-chorizo.webp'
            },
            {
                nombre: 'Tacos de Suadero',
                descripcion: 'Tres tacos de suadero cocinado lentamente en su propio jugo hasta quedar muy tierno y sabroso.',
                precio: '80',
                imagen: 'assets/mx/tacos/tacos-de-suadero.webp'
            }
        ],
        Tortas: [
            {
                nombre: 'Torta de Jamón',
                descripcion: 'Clásica torta mexicana con jamón de pierna, queso, aguacate, jitomate, cebolla y mayonesa en pan telera.',
                precio: '55',
                imagen: 'assets/mx/tortas/torta-de-jamón.webp'
            },
            {
                nombre: 'Torta de Milanesa (res/pollo)',
                descripcion: 'Torta de milanesa crujiente (res o pollo) con frijoles refritos, aguacate, quesillo y jitomate en telera.',
                precio: '75',
                imagen: 'assets/mx/tortas/torta-de-milanesa-res-pollo.webp'
            },
            {
                nombre: 'Torta de Pierna',
                descripcion: 'Torta rellena de jugosa pierna de cerdo horneada y sazonada, con aguacate, lechuga, cebolla y aderezo.',
                precio: '80',
                imagen: 'assets/mx/tortas/torta-de-pierna.webp'
            },
            {
                nombre: 'Torta de Pastor',
                descripcion: 'Torta caliente con carne al pastor, queso derretido, piña, cebolla, cilantro y un toque de aguacate.',
                precio: '75',
                imagen: 'assets/mx/tortas/torta-de-pastor.webp'
            },
            {
                nombre: 'Torta de Salchicha',
                descripcion: 'Torta de salchicha de pavo asada a la plancha, con queso derretido, jitomate, cebolla y chiles jalapeños.',
                precio: '60',
                imagen: 'assets/mx/tortas/torta-de-salchicha.webp'
            },
            {
                nombre: 'Torta Cubana',
                descripcion: 'La torta más completa: milanesa, pierna, jamón, salchicha, queso, huevo, aguacate y picante en telera.',
                precio: '110',
                imagen: 'assets/mx/tortas/torta-de-cubana.webp'
            }
        ],
        Quesadillas: [
            {
                nombre: 'Quesadilla de Queso',
                descripcion: 'Deliciosa quesadilla doblada rellena de abundante queso Oaxaca derretido a la plancha en tortilla de maíz.',
                precio: '40',
                imagen: 'assets/mx/quesadillas/quesadilla-de-queso.webp'
            },
            {
                nombre: 'Quesadilla de Huitlacoche',
                descripcion: 'Exquisita quesadilla rellena de huitlacoche guisado con cebolla y epazote, con el toque tradicional mexicano.',
                precio: '50',
                imagen: 'assets/mx/quesadillas/quesadilla-de-huitlacoche.webp'
            },
            {
                nombre: 'Quesadilla de Flor de Calabaza',
                descripcion: 'Quesadilla con flor de calabaza fresca salteada con cebolla y abundante queso derretido en comal.',
                precio: '50',
                imagen: 'assets/mx/quesadillas/quesadilla-de-flor-de-calabaza.webp'
            },
            {
                nombre: 'Quesadilla de Chicharrón Prensado',
                descripcion: 'Quesadilla rellena de chicharrón prensado guisado en salsa guajillo con queso derretido caliente.',
                precio: '55',
                imagen: 'assets/mx/quesadillas/quesadilla-de-chicharron-prensado.webp'
            },
            {
                nombre: 'Quesadilla de Tinga de Pollo',
                descripcion: 'Quesadilla con sabrosa tinga de pollo deshebrado sazonado con chipotle, jitomate y cebolla caramelizada.',
                precio: '50',
                imagen: 'assets/mx/quesadillas/quesadilla-de-tinga-de-pollo.webp'
            },
            {
                nombre: 'Quesadilla de Papa con Chorizo',
                descripcion: 'Quesadilla rellena con la tradicional mezcla de papa machacada y chorizo dorado con queso Oaxaca fundido.',
                precio: '45',
                imagen: 'assets/mx/quesadillas/quesadilla-de-papa-con-chorizo.webp'
            }
        ],
        Antojitos: [
            {
                nombre: 'Sopes (frijol, crema, queso, salsa)',
                descripcion: 'Tres sopes con base de masa pellizcada, frijoles refritos, lechuga, crema ácida, queso espolvoreado y salsa.',
                precio: '70',
                imagen: 'assets/mx/antojitos/sopes (frijol, crema, queso, salsa).webp'
            },
            {
                nombre: 'Gorditas de Chicharrón',
                descripcion: 'Dos gorditas de masa de maíz rellenas de chicharrón prensado, fritas y servidas con cilantro, cebolla y queso.',
                precio: '45',
                imagen: 'assets/mx/antojitos/gorditas-de-Chicharrón.webp'
            },
            {
                nombre: 'Huaraches (base alargada con carne)',
                descripcion: 'Base alargada de masa de maíz con frijoles, cubierta con jugosa bistec de res, lechuga, queso y salsa.',
                precio: '85',
                imagen: 'assets/mx/antojitos/huaraches-(base-alargada-con-carne).webp'
            },
            {
                nombre: 'Tostadas de Tinga / Pollo',
                descripcion: 'Dos tostadas crujientes untadas con frijol, cubiertas con tinga de pollo deshebrado, crema, queso y lechuga.',
                precio: '65',
                imagen: 'assets/mx/antojitos/tostadas-de-tinga-o-pollo.webp'
            },
            {
                nombre: 'Tlacoyos (frijol, haba, nopales)',
                descripcion: 'Tres tlacoyos de masa rellenos de frijol o haba, cubiertos con ensalada de nopales, queso y salsa roja.',
                precio: '70',
                imagen: 'assets/mx/antojitos/tlacoyos-(frijol, haba, nopales).webp'
            },
            {
                nombre: 'Pambazos (torta de papa con chorizo bañada en salsa)',
                descripcion: 'Pan pambazo bañado en salsa de chile guajillo, relleno de papa con chorizo, lechuga, crema y queso fresco.',
                precio: '65',
                imagen: 'assets/mx/antojitos/pambazos (torta-de-papa-con-chorizo-bañada-en-salsa).webp'
            }
        ],
        'Sopas y Caldos': [
            {
                nombre: 'Pozole (rojo, verde, blanco)',
                descripcion: 'Caldo tradicional a base de maíz cacahuazintle con carne de cerdo, servido con lechuga, rábano y tostadas.',
                precio: '95',
                imagen: 'assets/mx/sopas-y-caldos/pozole-(rojo-verde-blanco).webp'
            },
            {
                nombre: 'Menudo / Pancita',
                descripcion: 'Reconfortante caldo de pancita de res sazonado con chiles secos, ajo y especias al estilo tradicional.',
                precio: '90',
                imagen: 'assets/mx/sopas-y-caldos/sopa-de-menudo-pancita.webp'
            },
            {
                nombre: 'Caldo de Res',
                descripcion: 'Nutritivo caldo con tierna carne de res y verduras mixtas como elote, calabaza, zanahoria y papa.',
                precio: '105',
                imagen: 'assets/mx/sopas-y-caldos/caldo-de-res.webp'
            },
            {
                nombre: 'Sopa de Tortilla',
                descripcion: 'Sopa de jitomate con tiras crujientes de tortilla, aguacate, queso Oaxaca, crema y chile pasilla.',
                precio: '70',
                imagen: 'assets/mx/sopas-y-caldos/sopa-de-tortilla.webp'
            },
            {
                nombre: 'Consomé de Pollo (con arroz y verdura)',
                descripcion: 'Cálido consomé de pollo deshebrado con arroz, verduras picadas y garbanzos, acompañado de limón.',
                precio: '75',
                imagen: 'assets/mx/sopas-y-caldos/consome-de-pollo-(con-arroz-y-verdura).webp'
            },
            {
                nombre: 'Sopa de Fideo',
                descripcion: 'Sopa reconfortante de fideos dorados cocinados en un caldillo espeso de jitomate, cebolla y ajo.',
                precio: '55',
                imagen: 'assets/mx/sopas-y-caldos/sopa-de-fideo.webp'
            }
        ],
        'Botanas / Compartir': [
            {
                nombre: 'Guacamole con Totopos',
                descripcion: 'Aguacate machacado con jitomate, cebolla, cilantro y chile, acompañado con totopos crujientes de maíz.',
                precio: '85',
                imagen: 'assets/mx/botanas-y-compartir/guacamole-con-totopos.webp'
            },
            {
                nombre: 'Pico de Gallo',
                descripcion: 'Fresca mezcla de jitomate, cebolla, chile verde, cilantro picado y limón, ideal para acompañar tus platos.',
                precio: '45',
                imagen: 'assets/mx/botanas-y-compartir/pico-de-gallo.webp'
            },
            {
                nombre: 'Queso Fundido con Chorizo',
                descripcion: 'Cazuela de queso asadero derretido y mezclado con chorizo dorado, listo para taquear con tortillas calientes.',
                precio: '95',
                imagen: 'assets/mx/botanas-y-compartir/queso-fundido-con-chorizo.webp'
            },
            {
                nombre: 'Nachos con Carne / Pollo',
                descripcion: 'Totopos cubiertos con frijoles, queso fundido, carne asada o pollo, guacamole, jalapeños y crema.',
                precio: '110',
                imagen: 'assets/mx/botanas-y-compartir/nachos-con-carne-pollo.webp'
            },
            {
                nombre: 'Molcajete (salsa, queso, chorizo, nopales)',
                descripcion: 'Caliente molcajete de piedra con salsa especial, queso fundido, chorizo, tiras de nopales asados y cebollitas.',
                precio: '240',
                imagen: 'assets/mx/botanas-y-compartir/molcajete-(salsa-queso-chorizo-nopales).webp'
            },
            {
                nombre: 'Papas a la Mexicana',
                descripcion: 'Papas fritas en cubos salteadas con jitomate, cebolla y chile verde picado al estilo tradicional mexicano.',
                precio: '65',
                imagen: 'assets/mx/botanas-y-compartir/papas-a-la-mexicana.webp'
            }
        ],
        Guarniciones: [
            {
                nombre: 'Arroz Rojo',
                descripcion: 'Porción de arroz clásico cocido al vapor en caldillo de jitomate con chícharos y zanahorias.',
                precio: '35',
                imagen: 'assets/mx/guarniciones/arroz-rojo.webp'
            },
            {
                nombre: 'Frijoles Refritos',
                descripcion: 'Frijoles de la olla machacados y fritos en manteca con cebolla, espolvoreados con queso fresco.',
                precio: '35',
                imagen: 'assets/mx/guarniciones/frijoles-refritos.webp'
            },
            {
                nombre: 'Frijoles Charros',
                descripcion: 'Caldo de frijoles sazonados con tocino, chorizo, jamón, salchicha, jitomate, cebolla y chile verde.',
                precio: '45',
                imagen: 'assets/mx/guarniciones/frijoles-charros.webp'
            },
            {
                nombre: 'Frijoles de la Olla',
                descripcion: 'Tazón de frijoles cocidos lentamente en agua con cebolla y epazote, servidos calientes con su propio caldo.',
                precio: '35',
                imagen: 'assets/mx/guarniciones/frijoles-de-la-olla.webp'
            },
            {
                nombre: 'Nopales Asados',
                descripcion: 'Tiras de nopales frescos asados a la plancha, sazonados con sal y un toque de orégano.',
                precio: '40',
                imagen: 'assets/mx/guarniciones/nopales-asados.webp'
            },
            {
                nombre: 'Chiles Toreados',
                descripcion: 'Chiles serranos o cuaresmeños asados a la plancha con cebolla salteada y sazonados con salsa de soya.',
                precio: '30',
                imagen: 'assets/mx/guarniciones/chiles-toreados.webp'
            }
        ],
        Postres: [
            {
                nombre: 'Flan Napolitano',
                descripcion: 'Clásico postre cremoso de queso horneado a baño María con una suave capa de caramelo líquido.',
                precio: '50',
                imagen: 'assets/mx/postres/flan-napolitano.webp'
            },
            {
                nombre: 'Arroz con Leche',
                descripcion: 'Arroz cocido lentamente con leche, canela, azúcar y pasas, servido frío o caliente.',
                precio: '45',
                imagen: 'assets/mx/postres/arroz-con-leche.webp'
            },
            {
                nombre: 'Pastel de Tres Leches',
                descripcion: 'Rebanada de pastel esponjoso bañado en una mezcla de tres leches, decorado con crema batida.',
                precio: '65',
                imagen: 'assets/mx/postres/pastel-de-tres-leches.webp'
            },
            {
                nombre: 'Churros con Cajeta / Chocolate',
                descripcion: 'Tres crujientes churros espolvoreados con azúcar y canela, acompañados de cajeta o chocolate.',
                precio: '55',
                imagen: 'assets/mx/postres/churros-con-cajeta-o-chocolate-.webp'
            },
            {
                nombre: 'Buñuelos',
                descripcion: 'Dos tradicionales buñuelos de viento crujientes espolvoreados con azúcar o bañados en miel de piloncillo.',
                precio: '45',
                imagen: 'assets/mx/postres/buñuelos.webp'
            },
            {
                nombre: 'Jericalla',
                descripcion: 'Postre típico de Guadalajara a base de leche, huevos y vainilla con una deliciosa costra dorada encima.',
                precio: '45',
                imagen: 'assets/mx/postres/jericalla.webp'
            }
        ],
        'Bebidas sin Alcohol': [
            {
                nombre: 'Agua de Jamaica',
                descripcion: 'Fresca y clásica agua de flor de jamaica natural, endulzada y servida bien fría con hielos.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/agua-de-jamaica.webp'
            },
            {
                nombre: 'Agua de Horchata',
                descripcion: 'Tradicional agua de arroz con leche, canela, vainilla y azúcar, muy refrescante y cremosa.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/aggua-de-horchata.webp'
            },
            {
                nombre: 'Agua de Tamarindo',
                descripcion: 'Agua fresca de pulpa de tamarindo natural, con un toque dulce y ácido ideal para acompañar tus platillos.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/agua-de-tamarindo.webp'
            },
            {
                nombre: 'Coca-Cola (vidrio / lata)',
                descripcion: 'Refresco Coca-Cola clásico servido en botella de vidrio o lata bien helado para acompañar tus platillos.',
                precio: '32',
                imagen: 'assets/mx/bebidas-sin-alcohol/coca-cola(vidrio-lata).webp'
            },
            {
                nombre: 'Sidral Mundet (manzana)',
                descripcion: 'Tradicional refresco mexicano de manzana en botella de vidrio bien frío y con burbujeante sabor.',
                precio: '30',
                imagen: 'assets/mx/bebidas-sin-alcohol/sidral-mundet(manzana).webp'
            },
            {
                nombre: 'Sangría (sin alcohol)',
                descripcion: 'Refrescante bebida preparada con sabor a sangría, toques cítricos de limón y agua mineral bien helada.',
                precio: '35',
                imagen: 'assets/mx/bebidas-sin-alcohol/sangria(sin-alcohol).webp'
            }
        ],
        'Bebidas con Alcohol': [
            {
                nombre: 'Cerveza Corona',
                descripcion: 'Cerveza clara tipo pilsner de sabor suave y equilibrado en botella de vidrio, servida con limón.',
                precio: '45',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-corona.webp'
            },
            {
                nombre: 'Cerveza Victoria',
                descripcion: 'Cerveza tipo vienna de color ámbar y notas de malta tostada, servida helada en botella de vidrio.',
                precio: '45',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-victoria.webp'
            },
            {
                nombre: 'Cerveza Modelo Especial',
                descripcion: 'Cerveza premium tipo pilsner de color dorado brillante y sabor balanceado, servida bien fría.',
                precio: '50',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-modelo-especial.webp'
            },
            {
                nombre: 'Indio / Dos Equis (XX)',
                descripcion: 'Botella de cerveza oscura Indio o cerveza clara/ámbar Dos Equis bien helada a elección del cliente.',
                precio: '45',
                imagen: 'assets/mx/bebidas-con-alcohol/cerveza-indio-dos-equis(xx).webp'
            },
            {
                nombre: 'Michelada Clásica',
                descripcion: 'Cerveza de tu elección en tarro escarchado con sal, limón y mezcla especial de salsas negras picantes.',
                precio: '65',
                imagen: 'assets/mx/bebidas-con-alcohol/michelada-clasica.webp'
            },
            {
                nombre: 'Chelada (cerveza + limón + sal)',
                descripcion: 'Refrescante cerveza a elegir servida en tarro frío escarchado con limón verde y sal fina de mesa.',
                precio: '55',
                imagen: 'assets/mx/bebidas-con-alcohol/chelada(cerveza-limon-sal).webp'
            },
            {
                nombre: 'Tequila Blanco / Reposado / Añejo',
                descripcion: 'Copa de tequila de tu elección (blanco, reposado o añejo) acompañado con sal y rodaja de limón.',
                precio: '85',
                imagen: 'assets/mx/bebidas-con-alcohol/tequila-blanco-reposado-añejo.webp'
            },
            {
                nombre: 'Mezcal Joven / Reposado',
                descripcion: 'Copa de mezcal artesanal servido con rodajas de naranja dulce y sal de gusano para una experiencia única.',
                precio: '95',
                imagen: 'assets/mx/bebidas-con-alcohol/mezcal-joven-reposado.webp'
            },
            {
                nombre: 'Paloma (tequila + toronja + limón)',
                descripcion: 'Cóctel refrescante con tequila, refresco de toronja de tu elección, jugo de limón y vaso escarchado con sal.',
                precio: '85',
                imagen: 'assets/mx/bebidas-con-alcohol/paloma-(tequila-+-toronja-+-limón).webp'
            },
            {
                nombre: 'Margarita Clásica / Frozen',
                descripcion: 'Clásico cóctel preparado con tequila, licor de naranja, jugo de limón fresco y escarchado con sal.',
                precio: '90',
                imagen: 'assets/mx/bebidas-con-alcohol/margarita-clasica-Frozen.webp'
            },
            {
                nombre: 'Cantarito (tequila + cítricos en vaso de barro)',
                descripcion: 'Tradicional cantarito de barro con tequila, jugos frescos de toronja, naranja y limón con sal y chile.',
                precio: '95',
                imagen: 'assets/mx/bebidas-con-alcohol/cantarito-(tequila+citricos-en-vaso-de-barro).webp'
            },
            {
                nombre: 'Charro Negro (cerveza oscura + tequila)',
                descripcion: 'Combinación refrescante de refresco de cola, tequila, jugo de limón y un toque de sal, servido con hielo.',
                precio: '85',
                imagen: 'assets/mx/bebidas-con-alcohol/charro-negro-(cerveza-oscura + tequila).webp'
            }
        ]
    }
};

/* ===== ICONOS SVG PARA CADA TIPO ===== */
var iconosSVG = {
    sandwich: '<svg viewBox="0 0 24 24"><path d="M3 6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V8C21 9.1 20.1 10 19 10H5C3.9 10 3 9.1 3 8V6ZM4 12H20L19 20H5L4 12ZM7 6H9V8H7V6ZM11 6H13V8H11V6Z"/></svg>',
    burger: '<svg viewBox="0 0 24 24"><path d="M5 10C5 6.13 8.13 3 12 3S19 6.13 19 10H5ZM4 12H20C20.55 12 21 12.45 21 13S20.55 14 20 14H4C3.45 14 3 13.55 3 13S3.45 12 4 12ZM5 16H19C19.55 16 20 16.45 20 17V18C20 19.66 18.66 21 17 21H7C5.34 21 4 19.66 4 18V17C4 16.45 4.45 16 5 16Z"/></svg>',
    pizza: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 4C12.33 4 12.67 4.02 13 4.06L12 8L11 4.06C11.33 4.02 11.67 4 12 4ZM4.06 13L8 12L4.06 11C4.02 11.33 4 11.67 4 12S4.02 12.67 4.06 13ZM12 20C11.67 20 11.33 19.98 11 19.94L12 16L13 19.94C12.67 19.98 12.33 20 12 20ZM8.5 8.5L6.34 5.34C7.1 4.62 8.02 4.08 9.04 3.76L8.5 8.5ZM15.5 8.5L14.96 3.76C15.98 4.08 16.9 4.62 17.66 5.34L15.5 8.5ZM19.94 11L16 12L19.94 13C19.98 12.67 20 12.33 20 12S19.98 11.33 19.94 11ZM15.5 15.5L17.66 18.66C16.9 19.38 15.98 19.92 14.96 20.24L15.5 15.5ZM8.5 15.5L9.04 20.24C8.02 19.92 7.1 19.38 6.34 18.66L8.5 15.5Z"/></svg>',
    postre: '<svg viewBox="0 0 24 24"><path d="M12 2C9.24 2 7 4.24 7 7C7 8.4 7.6 9.65 8.56 10.54L6 18H18L15.44 10.54C16.4 9.65 17 8.4 17 7C17 4.24 14.76 2 12 2ZM12 4C13.66 4 15 5.34 15 7S13.66 10 12 10S9 8.66 9 7S10.34 4 12 4ZM8.8 16L9.6 13.5H14.4L15.2 16H8.8Z"/></svg>',
    bebida: '<svg viewBox="0 0 24 24"><path d="M6 2V4H8V4.29L5.28 20.24C5.1 21.24 5.88 22 6.88 22H17.12C18.12 22 18.9 21.24 18.72 20.24L16 4.29V4H18V2H6ZM9.32 8H14.68L15.08 10H8.92L9.32 8ZM8.12 14H15.88L16.28 16H7.72L8.12 14ZM7.44 18H16.56L16.88 20H7.12L7.44 18Z"/></svg>'
};

/* ===== REFERENCIAS DOM ===== */
var listaCategorias = document.getElementById('listaCategorias');
var contenedorMenu = document.getElementById('contenedorMenu');
var scrollBloqueado = false;

/* ===== SCROLL SOLO HORIZONTAL PARA CATEGORIAS ===== */
function centrarBtnCategoria(btn) {
    var container = document.getElementById('listaCategorias');
    var btnOffset = btn.offsetLeft;
    var center = btnOffset - (container.clientWidth / 2) + (btn.offsetWidth / 2);
    container.scrollTo({ left: center, behavior: 'smooth' });
}

/* ===== RENDERIZAR CATEGORIAS ===== */
function renderCategorias() {
    listaCategorias.innerHTML = '';
    menuData.categorias.forEach(function (cat, index) {
        var btn = document.createElement('button');
        btn.className = 'categorias__btn' + (index === 0 ? ' categorias__btnActivo' : '');
        btn.textContent = cat;
        btn.setAttribute('data-cat', cat);
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        btn.addEventListener('click', function () {
            seleccionarCategoria(cat);
        });
        listaCategorias.appendChild(btn);
    });
}

/* ===== SELECCIONAR CATEGORIA ===== */
function seleccionarCategoria(cat) {
    scrollBloqueado = true;

    /* Actualizar estado visual de botones */
    var botones = listaCategorias.querySelectorAll('.categorias__btn');
    for (var i = 0; i < botones.length; i++) {
        var btn = botones[i];
        if (btn.getAttribute('data-cat') === cat) {
            btn.classList.add('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'true');
            centrarBtnCategoria(btn);
        } else {
            btn.classList.remove('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'false');
        }
    }

    /* Scroll vertical a la seccion correspondiente */
    var seccion = document.getElementById('grupo_' + cat);
    if (seccion) {
        var catAltura = document.querySelector('.categorias').offsetHeight;
        var destino = seccion.offsetTop - catAltura - 6;
        window.scrollTo({ top: destino, behavior: 'smooth' });
    }

    /* Desbloquear el scroll spy despues de un momento */
    setTimeout(function () {
        scrollBloqueado = false;
    }, 800);
}

/* ===== RENDERIZAR MENU ===== */
function renderMenu() {
    contenedorMenu.innerHTML = '';

    menuData.categorias.forEach(function (cat) {
        var grupo = document.createElement('div');
        grupo.className = 'menu__grupo';
        grupo.id = 'grupo_' + cat;

        /* Encabezado de categoria */
        var encabezado = document.createElement('div');
        encabezado.className = 'menu__encabezado';

        var icono = document.createElement('img');
        icono.className = 'menu__icono';
        
        var mapaIconos = {
            'promociones': 'promociones',
            'tacos': 'tacos',
            'tortas': 'tortas',
            'quesadillas': 'quesadillas',
            'antojitos': 'antojitos',
            'sopas y caldos': 'sopas',
            'botanas / para compartir': 'botanas',
            'guarniciones': 'guarniciones',
            'postres': 'postres',
            'bebidas sin alcohol': 'bebidas-sin-alcohol',
            'bebidas con alcohol': 'bebidas-con-alcohol'
        };
        var nombreIcono = mapaIconos[cat.toLowerCase()] || 'promociones';
        icono.src = 'assets/iconos/' + nombreIcono + '.webp';
        icono.alt = cat;

        var titulo = document.createElement('h2');
        titulo.className = 'menu__titulo';
        titulo.textContent = cat;

        var linea = document.createElement('div');
        linea.className = 'menu__linea';

        var puntos = document.createElement('div');
        puntos.className = 'menu__puntos';
        puntos.setAttribute('aria-hidden', 'true');
        for (var p = 0; p < 3; p++) {
            var punto = document.createElement('span');
            punto.className = 'menu__punto';
            puntos.appendChild(punto);
        }

        encabezado.appendChild(icono);
        encabezado.appendChild(titulo);
        encabezado.appendChild(linea);
        encabezado.appendChild(puntos);

        /* Grid de productos */
        var grid = document.createElement('div');
        grid.className = 'menu__grid';

        var productos = menuData.productos[cat];
        for (var i = 0; i < productos.length; i++) {
            var prod = productos[i];
            grid.appendChild(crearCard(prod));
        }

        grupo.appendChild(encabezado);
        grupo.appendChild(grid);
        contenedorMenu.appendChild(grupo);
    });
}

/* ===== CREAR CARD DE PRODUCTO ===== */
function crearCard(prod) {
    var card = document.createElement('article');
    card.className = 'card';
    if (prod.esPromo) {
        card.classList.add('card--promo');
    }

    /* Imagen */
    var imagen = document.createElement('div');
    imagen.className = 'card__imagen';

    var fondo = document.createElement('div');
    fondo.className = 'card__imagenFondo';
    fondo.style.backgroundImage = 'url("assets/fondo_card.webp")';
    fondo.style.backgroundSize = 'cover';
    fondo.style.backgroundPosition = 'center';

    var overlay = document.createElement('div');
    overlay.className = 'card__imagenOverlay';

    imagen.appendChild(fondo);
    imagen.appendChild(overlay);

    if (prod.imagen) {
        var imgProd = document.createElement('img');
        imgProd.src = prod.imagen;
        imgProd.className = 'card__productoImg';
        imgProd.alt = prod.nombre;
        imagen.appendChild(imgProd);
    }

    /* Contenido */
    var contenido = document.createElement('div');
    contenido.className = 'card__contenido';

    var nombre = document.createElement('h3');
    nombre.className = prod.esPromo ? 'card__nombre--promo' : 'card__nombre';
    nombre.textContent = prod.nombre;

    var descripcion = document.createElement('p');
    descripcion.className = prod.esPromo ? 'card__descripcion--promo' : 'card__descripcion';
    descripcion.textContent = prod.descripcion;

    var precio = document.createElement('span');
    precio.className = prod.esPromo ? 'card__precio--promo' : 'card__precio';
    precio.textContent = '$ ' + prod.precio;

    contenido.appendChild(nombre);
    contenido.appendChild(descripcion);
    contenido.appendChild(precio);

    card.appendChild(imagen);
    card.appendChild(contenido);

    return card;
}

/* ===== SCROLL SPY CON INTERSECTIONOBSERVER ===== */
function iniciarScrollSpy() {
    var opciones = {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
        /* Si el scroll foi provocado por click, não atualizar */
        if (scrollBloqueado) return;

        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.isIntersecting) {
                var cat = entry.target.id.replace('grupo_', '');
                var botones = listaCategorias.querySelectorAll('.categorias__btn');
                for (var j = 0; j < botones.length; j++) {
                    var btn = botones[j];
                    if (btn.getAttribute('data-cat') === cat) {
                        btn.classList.add('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'true');
                        centrarBtnCategoria(btn);
                    } else {
                        btn.classList.remove('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'false');
                    }
                }
                break;
            }
        }
    }, opciones);

    var grupos = contenedorMenu.querySelectorAll('.menu__grupo');
    for (var i = 0; i < grupos.length; i++) {
        observer.observe(grupos[i]);
    }
}

/* ===== INICIALIZACION ===== */
renderCategorias();
renderMenu();
iniciarScrollSpy();