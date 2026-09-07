import { n as EMAIL, r as TELEFONO, t as corp_hero_default } from "./corp-hero-C_gQ_izp.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, Building2, CheckCircle2, ChevronRight, ClipboardCheck, Clock, Facebook, Factory, Instagram, Landmark, Leaf, Mail, MapPin, MapPinned, Menu, MessageCircle, Package, PartyPopper, Phone, ShieldCheck, ShoppingBag, Sparkles, Star, Store, Truck, Users, Utensils, X } from "lucide-react";
//#region src/assets/prod-entera.png
var prod_entera_default = "/assets/prod-entera-B1XbtOsF.png";
//#endregion
//#region src/assets/prod-beneficiada.jpeg
var prod_beneficiada_default = "/assets/prod-beneficiada-CY-yzYLR.jpeg";
//#endregion
//#region src/assets/prod-restaurante.jpeg
var prod_restaurante_default = "/assets/prod-restaurante-B01oOt81.jpeg";
//#endregion
//#region src/assets/prod-eventos.jpeg
var prod_eventos_default = "/assets/prod-eventos-fEwO0fZN.jpeg";
//#endregion
//#region src/assets/prod-mayorista.jpeg
var prod_mayorista_default = "/assets/prod-mayorista-Bobr0keH.jpeg";
//#endregion
//#region src/assets/gallery-plant.jpeg
var gallery_plant_default = "/assets/gallery-plant-DFmTbC6M.jpeg";
//#endregion
//#region src/assets/gallery-truck.jpeg
var gallery_truck_default = "/assets/gallery-truck-BdLPuTvE.jpeg";
//#endregion
//#region src/assets/gallery-farm.png
var gallery_farm_default = "/assets/gallery-farm-iBgkT3zp.png";
//#endregion
//#region src/assets/gallery-quality.jpeg
var gallery_quality_default = "/assets/gallery-quality-BtIu_f3j.jpeg";
//#endregion
//#region src/assets/locales/local-mercaplaza.jpeg
var local_mercaplaza_default = "/assets/local-mercaplaza-Cme9XnaQ.jpeg";
//#endregion
//#region src/assets/locales/local-sanantonio.png
var local_sanantonio_default = "/assets/local-sanantonio-767SN5Vf.png";
//#endregion
//#region src/assets/locales/local-sogamoso.jpeg
var local_sogamoso_default = "/assets/local-sogamoso-DZkVe5fG.jpeg";
//#endregion
//#region src/assets/locales/local-tunja.jpeg
var local_tunja_default = "/assets/local-tunja-EbtcliLw.jpeg";
//#endregion
//#region src/assets/logo-gumarra.png
var logo_gumarra_default = "/assets/logo-gumarra-Cf3rDMeH.png";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var WHATSAPP = "573000000000";
var DIRECCION = "Duitama, Boyacá, Colombia";
var HORARIO = "Lun–Sáb: 6:00 a.m. – 6:00 p.m.";
var waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
var NAV = [
	{
		label: "Empresa",
		href: "#empresa"
	},
	{
		label: "Productos",
		href: "#productos"
	},
	{
		label: "Cobertura",
		href: "#cobertura"
	},
	{
		label: "Proceso",
		href: "#proceso"
	},
	{
		label: "Clientes",
		href: "#clientes"
	},
	{
		label: "Colaboradores",
		href: "#colaboradores"
	},
	{
		label: "Locales",
		href: "#locales"
	},
	{
		label: "Contacto",
		href: "#contacto"
	}
];
function HomePage() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Header, {
				open,
				setOpen
			}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(TrustBar, {}),
			/* @__PURE__ */ jsx(Empresa, {}),
			/* @__PURE__ */ jsx(Productos, {}),
			/* @__PURE__ */ jsx(Cobertura, {}),
			/* @__PURE__ */ jsx(Proceso, {}),
			/* @__PURE__ */ jsx(Calidad, {}),
			/* @__PURE__ */ jsx(Clientes, {}),
			/* @__PURE__ */ jsx(Galeria, {}),
			/* @__PURE__ */ jsx(Testimonios, {}),
			/* @__PURE__ */ jsx(Colaboradores, {}),
			/* @__PURE__ */ jsx(Locales, {}),
			/* @__PURE__ */ jsx(Contacto, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingWhats, {})
		]
	});
}
function Header({ open, setOpen }) {
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: logo_gumarra_default,
						alt: "La Gumarra Colora'a - Gallina Criolla",
						className: "h-12 w-auto object-contain"
					}), /* @__PURE__ */ jsxs("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-base font-extrabold text-brand-red sm:text-lg",
							children: "La Gumarra"
						}), /* @__PURE__ */ jsx("div", {
							className: "-mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand-black/70 sm:text-xs",
							children: "Colora'a"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: NAV.map((n) => /* @__PURE__ */ jsx("a", {
						href: n.href,
						className: "text-sm font-medium text-foreground/80 transition-colors hover:text-brand-red",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ jsxs("a", {
						href: waLink("Hola, quiero solicitar una cotización."),
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-transform hover:-translate-y-0.5",
						children: [/* @__PURE__ */ jsx(MessageCircle, { size: 16 }), " Cotizar"]
					})
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(!open),
					className: "rounded-md p-2 text-foreground lg:hidden",
					"aria-label": "Menú",
					children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col px-4 py-3",
				children: [NAV.map((n) => /* @__PURE__ */ jsx("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "border-b border-border/60 py-3 text-sm font-medium text-foreground/80",
					children: n.label
				}, n.href)), /* @__PURE__ */ jsxs("a", {
					href: waLink("Hola, quiero solicitar una cotización."),
					className: "mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-brand",
					children: [/* @__PURE__ */ jsx(MessageCircle, { size: 16 }), " Cotizar"]
				})]
			})
		})]
	});
}
function Logo() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand shadow-brand",
		children: /* @__PURE__ */ jsx("span", {
			className: "font-display text-lg font-black text-white",
			children: "G"
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ jsx("img", {
				src: corp_hero_default,
				alt: "Planta avícola en Boyacá",
				className: "h-full w-full object-cover",
				width: 1920,
				height: 1080
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-brand-black/30" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6 md:py-32 lg:py-40",
			children: [
				/* @__PURE__ */ jsxs("span", {
					className: "mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold backdrop-blur",
					children: [/* @__PURE__ */ jsx(Sparkles, { size: 14 }), " Tradición boyacense desde hace más de 20 años"]
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl",
					children: [
						"La Gumarra ",
						/* @__PURE__ */ jsx("span", {
							className: "text-brand-gold",
							children: "Colora'a"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "mt-3 block text-2xl font-semibold text-white/90 sm:text-3xl md:text-4xl",
							children: "Tradición y calidad que alimenta a Boyacá"
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-2xl text-base text-white/80 sm:text-lg",
					children: "Procesamos y distribuimos gallina criolla y gallina roja con los más altos estándares de calidad para hogares, negocios y eventos en todo el departamento."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ jsxs("a", {
						href: waLink("Hola, quiero solicitar una cotización de productos."),
						className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5",
						children: ["Solicitar cotización ", /* @__PURE__ */ jsx(ChevronRight, { size: 16 })]
					}), /* @__PURE__ */ jsx("a", {
						href: "#contacto",
						className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20",
						children: "Contáctanos"
					})]
				})
			]
		})]
	});
}
function TrustBar() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border bg-brand-gray",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4",
			children: [
				{
					icon: Award,
					k: "+20",
					l: "Años de experiencia"
				},
				{
					icon: Users,
					k: "+5.000",
					l: "Clientes atendidos"
				},
				{
					icon: MapPinned,
					k: "+50",
					l: "Municipios en Boyacá"
				},
				{
					icon: Star,
					k: "4.9/5",
					l: "Calificación promedio"
				}
			].map((it) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand",
					children: /* @__PURE__ */ jsx(it.icon, { size: 20 })
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-display text-2xl font-extrabold text-brand-black",
					children: it.k
				}), /* @__PURE__ */ jsx("div", {
					className: "text-xs font-medium text-muted-foreground sm:text-sm",
					children: it.l
				})] })]
			}, it.l))
		})
	});
}
function Empresa() {
	return /* @__PURE__ */ jsx(Section, {
		id: "empresa",
		eyebrow: "Nuestra empresa",
		title: "Una empresa boyacense con vocación de servicio",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-10 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("p", {
					className: "text-base leading-relaxed text-muted-foreground",
					children: [
						"En ",
						/* @__PURE__ */ jsx("strong", {
							className: "text-brand-black",
							children: "La Gumarra Colora'a"
						}),
						" somos una empresa familiar boyacense dedicada al procesamiento, comercialización y distribución de gallina criolla y gallina roja. Hemos crecido junto a hogares, asaderos, restaurantes y supermercados que confían en nuestra frescura y puntualidad."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground",
					children: "Nuestra trayectoria nos posiciona como un aliado estratégico para quienes buscan calidad constante, abastecimiento seguro y un trato cercano y profesional."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: [
						{
							icon: Landmark,
							t: "Historia y tradición",
							d: "Más de dos décadas trabajando por la mesa boyacense con una receta familiar de calidad."
						},
						{
							icon: ShieldCheck,
							t: "Compromiso con la calidad",
							d: "Procesos controlados y trazabilidad en cada eslabón de la cadena."
						},
						{
							icon: MapPinned,
							t: "Cobertura regional",
							d: "Llegamos a todos los principales municipios del departamento de Boyacá."
						},
						{
							icon: Award,
							t: "Experiencia avícola",
							d: "Equipo especializado que garantiza frescura y excelencia en cada entrega."
						}
					].map((f) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red",
								children: /* @__PURE__ */ jsx(f.icon, { size: 18 })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "font-display text-sm font-bold text-brand-black",
								children: f.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: f.d
							})
						]
					}, f.t))
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-3xl shadow-brand",
					children: /* @__PURE__ */ jsx("img", {
						src: gallery_farm_default,
						alt: "Granja avícola en Boyacá",
						loading: "lazy",
						className: "h-full w-full object-cover",
						width: 1024,
						height: 1024
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "absolute -bottom-6 -left-2 hidden rounded-2xl bg-white p-4 shadow-brand sm:block",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold text-brand-black",
							children: /* @__PURE__ */ jsx(Leaf, { size: 22 })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-base font-extrabold text-brand-black",
							children: "Calidad garantizada"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: "100% boyacense"
						})] })]
					})
				})]
			})]
		})
	});
}
function Productos() {
	return /* @__PURE__ */ jsx(Section, {
		id: "productos",
		eyebrow: "Nuestros productos",
		title: "Calidad en cada presentación",
		tone: "muted",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					img: prod_entera_default,
					t: "Gallina en canal",
					d: "Gallina criolla fresca completa, ideal para hogares y preparaciones tradicionales."
				},
				{
					img: prod_beneficiada_default,
					t: "Gallina roja beneficiada",
					d: "Presa seleccionada y porcionada de gallina roja para una preparación rápida y rendidora."
				},
				{
					img: prod_restaurante_default,
					t: "Productos para restaurantes",
					d: "Cortes y formatos pensados para asaderos, restaurantes y cocinas profesionales."
				},
				{
					img: prod_eventos_default,
					t: "Pedidos para eventos",
					d: "Abastecimiento para celebraciones, banquetes y eventos masivos en toda Boyacá."
				},
				{
					img: prod_mayorista_default,
					t: "Distribución mayorista",
					d: "Volúmenes y logística para tiendas, supermercados y distribuidores regionales."
				}
			].map((p) => /* @__PURE__ */ jsxs("article", {
				className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "relative aspect-[4/3] overflow-hidden",
					children: /* @__PURE__ */ jsx("img", {
						src: p.img,
						alt: p.t,
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 flex-col p-5",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-bold text-brand-black",
							children: p.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 flex-1 text-sm text-muted-foreground",
							children: p.d
						}),
						/* @__PURE__ */ jsxs("a", {
							href: waLink(`Hola, me interesa el producto: ${p.t}. ¿Pueden enviarme información?`),
							className: "mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white",
							children: [/* @__PURE__ */ jsx(MessageCircle, { size: 14 }), " Contactar"]
						})
					]
				})]
			}, p.t))
		})
	});
}
function Cobertura() {
	return /* @__PURE__ */ jsx(Section, {
		id: "cobertura",
		eyebrow: "Cobertura",
		title: "Presentes en todo Boyacá",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-8 lg:grid-cols-5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-3xl border border-border shadow-soft",
					children: /* @__PURE__ */ jsx("iframe", {
						title: "La Gumarra Colora'a - Duitama",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456789!2d-73.025358!3d5.8440065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f6ab289c339%3A0x8df7e04dc477edbe!2sLa%20Gumarra%20Colora'a!5e0!3m2!1ses!2sco!4v1712345678901",
						className: "h-[360px] w-full md:h-[460px]",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						allowFullScreen: true
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-2 text-center text-xs text-muted-foreground",
					children: "📍 La Gumarra Colora'a - Duitama, Boyacá"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-base text-muted-foreground",
						children: "Nuestra red logística llega a los principales municipios del departamento, con entregas programadas y atención personalizada en cada ruta."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 grid grid-cols-2 gap-1.5",
						children: [
							"Duitama",
							"Tunja",
							"Sogamoso",
							"Paipa",
							"Nobsa",
							"Tibasosa",
							"Santa Rosa de Viterbo",
							"Belén",
							"Cerinza",
							"Floresta",
							"Corrales",
							"Iza",
							"Mongua",
							"Aquitania",
							"Chiquinquirá",
							"Moniquirá",
							"Villa de Leyva",
							"Samacá",
							"Ramiriquí",
							"Garagoa"
						].map((m) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5 rounded-lg bg-brand-gray px-2.5 py-1.5",
							children: [/* @__PURE__ */ jsx(MapPin, {
								size: 12,
								className: "text-brand-red shrink-0"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs font-medium text-brand-black truncate",
								children: m
							})]
						}, m))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ jsx(Badge, {
								icon: Truck,
								children: "Flota refrigerada"
							}),
							/* @__PURE__ */ jsx(Badge, {
								icon: Clock,
								children: "Entregas puntuales"
							}),
							/* @__PURE__ */ jsx(Badge, {
								icon: ShieldCheck,
								children: "Trazabilidad total"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-4",
						children: /* @__PURE__ */ jsxs("a", {
							href: "https://www.google.com/maps/place/La+Gumarra+Colora'a/@5.8440065,-73.025358,17.5z/data=!4m6!3m5!1s0x8e6a3f6ab289c339:0x8df7e04dc477edbe!8m2!3d5.8441081!4d-73.0235327!16s%2Fg%2F11rhr3c9hz?entry=ttu",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline",
							children: [/* @__PURE__ */ jsx(MapPin, { size: 14 }), " Ver ubicación en Google Maps"]
						})
					})
				]
			})]
		})
	});
}
function Badge({ icon: Icon, children }) {
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-1.5 rounded-full border border-brand-red/20 bg-brand-red/5 px-3 py-1.5 text-xs font-semibold text-brand-red",
		children: [
			/* @__PURE__ */ jsx(Icon, { size: 14 }),
			" ",
			children
		]
	});
}
function Proceso() {
	return /* @__PURE__ */ jsx(Section, {
		id: "proceso",
		eyebrow: "Nuestro proceso",
		title: "Del campo a tu mesa",
		tone: "muted",
		children: /* @__PURE__ */ jsx("ol", {
			className: "relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					icon: ClipboardCheck,
					t: "Selección",
					d: "Elegimos ejemplares de calidad bajo estrictos criterios sanitarios."
				},
				{
					icon: ShieldCheck,
					t: "Beneficio",
					d: "Sacrificio y beneficio controlados con buenas prácticas."
				},
				{
					icon: Factory,
					t: "Procesamiento",
					d: "Cortes y porcionado en planta con equipos profesionales."
				},
				{
					icon: Package,
					t: "Empaque",
					d: "Empaque higiénico que conserva frescura y calidad."
				},
				{
					icon: Truck,
					t: "Distribución",
					d: "Logística refrigerada hacia cada destino en Boyacá."
				},
				{
					icon: CheckCircle2,
					t: "Entrega",
					d: "Entrega puntual a hogares, negocios y eventos."
				}
			].map((s, i) => /* @__PURE__ */ jsxs("li", {
				className: "relative rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-extrabold text-white shadow-brand",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/30 text-brand-red",
						children: /* @__PURE__ */ jsx(s.icon, { size: 20 })
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-lg font-bold text-brand-black",
						children: s.t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: s.d
					})
				]
			}, s.t))
		})
	});
}
function Calidad() {
	return /* @__PURE__ */ jsx(Section, {
		id: "calidad",
		eyebrow: "Calidad y confianza",
		title: "Por qué nos eligen nuestros clientes",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				{
					icon: Leaf,
					t: "Productos frescos",
					d: "Frescura garantizada en cada entrega."
				},
				{
					icon: ClipboardCheck,
					t: "Procesos controlados",
					d: "Trazabilidad y estándares de calidad."
				},
				{
					icon: Users,
					t: "Atención personalizada",
					d: "Asesoría comercial dedicada por cliente."
				},
				{
					icon: Clock,
					t: "Entregas oportunas",
					d: "Logística cumplida, sin retrasos."
				},
				{
					icon: MapPinned,
					t: "Cobertura regional",
					d: "Red logística en todo Boyacá."
				}
			].map((it) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-border bg-card p-5 text-center shadow-soft",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand",
						children: /* @__PURE__ */ jsx(it.icon, { size: 20 })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "font-display text-sm font-bold text-brand-black",
						children: it.t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: it.d
					})
				]
			}, it.t))
		})
	});
}
function Clientes() {
	return /* @__PURE__ */ jsx(Section, {
		id: "clientes",
		eyebrow: "Clientes que atendemos",
		title: "Aliados estratégicos en cada sector",
		tone: "muted",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7",
			children: [
				{
					icon: Utensils,
					t: "Restaurantes"
				},
				{
					icon: Building2,
					t: "Asaderos"
				},
				{
					icon: Store,
					t: "Supermercados"
				},
				{
					icon: ShoppingBag,
					t: "Tiendas"
				},
				{
					icon: Truck,
					t: "Distribuidores"
				},
				{
					icon: PartyPopper,
					t: "Eventos"
				},
				{
					icon: Landmark,
					t: "Instituciones"
				}
			].map((c) => /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-colors hover:border-brand-red",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red",
					children: /* @__PURE__ */ jsx(c.icon, { size: 22 })
				}), /* @__PURE__ */ jsx("div", {
					className: "text-sm font-semibold text-brand-black",
					children: c.t
				})]
			}, c.t))
		})
	});
}
function Galeria() {
	return /* @__PURE__ */ jsx(Section, {
		id: "galeria",
		eyebrow: "Galería",
		title: "Conoce nuestras instalaciones y procesos",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-3",
			children: [
				{
					src: gallery_plant_default,
					alt: "Planta de procesamiento"
				},
				{
					src: gallery_truck_default,
					alt: "Vehículos de distribución"
				},
				{
					src: gallery_farm_default,
					alt: "Granja avícola"
				},
				{
					src: gallery_quality_default,
					alt: "Control de calidad"
				},
				{
					src: prod_entera_default,
					alt: "Gallina entera"
				},
				{
					src: prod_eventos_default,
					alt: "Servicio para eventos"
				}
			].map((g, i) => /* @__PURE__ */ jsx("div", {
				className: `overflow-hidden rounded-2xl shadow-soft ${i === 0 ? "col-span-2 row-span-2" : ""}`,
				children: /* @__PURE__ */ jsx("img", {
					src: g.src,
					alt: g.alt,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105",
					width: 1024,
					height: 1024
				})
			}, i))
		})
	});
}
function Testimonios() {
	return /* @__PURE__ */ jsx(Section, {
		id: "testimonios",
		eyebrow: "Testimonios",
		title: "Lo que dicen nuestros clientes",
		tone: "muted",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				{
					n: "Carlos Pérez",
					r: "Asadero El Fogón",
					t: "Llevamos años trabajando con La Gumarra Colora'a. Calidad y cumplimiento siempre."
				},
				{
					n: "Marcela Rodríguez",
					r: "Restaurante La Vereda",
					t: "Su gallina es la mejor de la región. Nuestros clientes lo notan en cada plato."
				},
				{
					n: "Luis Hernández",
					r: "Distribuidor Sogamoso",
					t: "Excelente abastecimiento, logística puntual y precios competitivos."
				}
			].map((t) => /* @__PURE__ */ jsxs("figure", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-3 flex gap-0.5 text-brand-gold",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, {
							size: 16,
							fill: "currentColor"
						}, i))
					}),
					/* @__PURE__ */ jsxs("blockquote", {
						className: "text-sm leading-relaxed text-foreground",
						children: [
							"\"",
							t.t,
							"\""
						]
					}),
					/* @__PURE__ */ jsxs("figcaption", {
						className: "mt-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-sm font-bold text-brand-black",
							children: t.n
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: t.r
						})]
					})
				]
			}, t.n))
		})
	});
}
function Colaboradores() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "colaboradores",
		eyebrow: "Nuestro equipo",
		title: "Las personas detrás de La Gumarra",
		tone: "muted",
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-10 max-w-3xl text-base text-muted-foreground",
			children: "Detrás de cada entrega de gallina criolla y gallina roja hay un equipo de personas comprometidas con la calidad y el servicio. Conoce a nuestros operarios y conductores, el corazón de nuestra empresa."
		}), /* @__PURE__ */ jsx("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					nombre: "Juan Pérez",
					rol: "Operario de planta",
					foto: "/src/assets/colaboradores/operario1.jpeg",
					descripcion: "Manos expertas dedicadas a garantizar la máxima calidad y frescura de nuestra gallina criolla."
				},
				{
					nombre: "María Rodríguez",
					rol: "Conductora de distribución",
					foto: "/src/assets/colaboradores/conductor1.jpeg",
					descripcion: "Llevando gallina roja fresca a toda Boyacá"
				},
				{
					nombre: "Carlos Martínez",
					rol: "Operario de procesamiento",
					foto: "/src/assets/colaboradores/operario2.jpeg",
					descripcion: "Seleccionando la mejor gallina en canal para nuestros clientes"
				},
				{
					nombre: "Ana Gómez",
					rol: "Conductora de entregas",
					foto: "/src/assets/colaboradores/conductor2.jpeg",
					descripcion: "Entregas puntuales con la mejor atención"
				}
			].map((c) => /* @__PURE__ */ jsxs("div", {
				className: "group rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto h-60 w-60 overflow-hidden rounded-full border-4 border-brand-red/20 shadow-md",
						children: /* @__PURE__ */ jsx("img", {
							src: c.foto,
							alt: c.nombre,
							className: "h-full w-full object-cover transition-transform group-hover:scale-105",
							onError: (e) => {
								e.target.src = "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"%3E%3Crect fill=\"%23e5e7eb\" width=\"100\" height=\"100\"/%3E%3Ctext x=\"50\" y=\"50\" text-anchor=\"middle\" dy=\".3em\" fill=\"%236b7280\" font-family=\"sans-serif\" font-size=\"10\"%3E📸%3C/text%3E%3C/svg%3E";
							}
						})
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-4 font-display text-lg font-bold text-brand-black",
						children: c.nombre
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-sm font-semibold text-brand-red",
						children: c.rol
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.descripcion
					})
				]
			}, c.nombre))
		})]
	});
}
function Locales() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "locales",
		eyebrow: "Puntos de venta",
		title: "Gallinalandia - Encuéntranos en todo Boyacá",
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-10 max-w-3xl text-base text-muted-foreground",
			children: "Visita nuestros locales físicos y encuentra la mejor gallina criolla y gallina roja en los principales municipios de Boyacá. Nuestros puntos de venta están estratégicamente ubicados para atenderte con la mejor calidad y servicio."
		}), /* @__PURE__ */ jsx("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					nombre: "Gallinalandia Duitama - Mercaplaza",
					direccion: "CLL 11 #21-18 Mercaplaza, Duitama",
					telefono: "+57 313 123 4567",
					horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
					icono: "🐔",
					whatsapp: "573131234567",
					imagen: local_mercaplaza_default,
					lat: 5.8217186,
					lng: -73.0343088
				},
				{
					nombre: "Gallinalandia Duitama - San Antonio",
					direccion: "Vereda San Antonio norte sec 4 esquinas, Duitama",
					telefono: "+57 313 3276415",
					horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
					icono: "🐔",
					whatsapp: "573133276415",
					imagen: local_sanantonio_default,
					lat: 5.8441081,
					lng: -73.0235327
				},
				{
					nombre: "Gallinalandia Sogamoso",
					direccion: "CLL 12 #18-90, Sogamoso",
					telefono: "+57 322 8982586",
					horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
					icono: "🐔",
					whatsapp: "573228982586",
					imagen: local_sogamoso_default,
					lat: 5.7207619,
					lng: -72.9338103
				},
				{
					nombre: "Gallinalandia Tunja",
					direccion: "Kr 14 #04-08, Tunja",
					telefono: "+57 318 6668696",
					horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
					icono: "🐔",
					whatsapp: "573186668696",
					imagen: local_tunja_default,
					lat: 5.5189949,
					lng: -73.369889
				}
			].map((local) => /* @__PURE__ */ jsxs("div", {
				className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-colors hover:border-brand-red",
				children: [local.imagen && /* @__PURE__ */ jsxs("div", {
					className: "relative h-48 w-full overflow-hidden",
					children: [/* @__PURE__ */ jsx("img", {
						src: local.imagen,
						alt: local.nombre,
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold text-white",
							children: local.nombre
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-3xl",
							children: local.icono
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-bold text-brand-black",
							children: local.nombre
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-2 flex items-start gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx(MapPin, {
								size: 16,
								className: "mt-0.5 shrink-0 text-brand-red"
							}), /* @__PURE__ */ jsx("span", { children: local.direccion })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-center gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Clock, {
								size: 16,
								className: "text-brand-red"
							}), /* @__PURE__ */ jsx("span", { children: local.horario })]
						}),
						local.telefono && /* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-center gap-2 text-sm font-medium text-brand-red",
							children: [/* @__PURE__ */ jsx(Phone, { size: 16 }), /* @__PURE__ */ jsx("span", { children: local.telefono })]
						}),
						local.whatsapp && /* @__PURE__ */ jsxs("a", {
							href: `https://wa.me/${local.whatsapp}?text=Hola%2C%20me%20interesa%20la%20gallina%20criolla%20y%20roja%20de%20${encodeURIComponent(local.nombre)}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]",
							children: [/* @__PURE__ */ jsx(MessageCircle, { size: 18 }), " Escribir por WhatsApp"]
						}),
						local.lat && local.lng && /* @__PURE__ */ jsxs("a", {
							href: `https://www.google.com/maps/search/?api=1&query=${local.lat},${local.lng}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-2 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white",
							children: [/* @__PURE__ */ jsx(MapPin, { size: 14 }), " Ver en Google Maps"]
						})
					]
				})]
			}, local.nombre))
		})]
	});
}
function Contacto() {
	const [form, setForm] = useState({
		nombre: "",
		empresa: "",
		telefono: "",
		correo: "",
		solicitud: ""
	});
	const onSubmit = (e) => {
		e.preventDefault();
		const msg = `Hola, soy ${form.nombre}${form.empresa ? ` de ${form.empresa}` : ""}.%0ATel: ${form.telefono}%0ACorreo: ${form.correo}%0ASolicitud: ${form.solicitud}`;
		window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
	};
	const onChange = (k) => (e) => setForm({
		...form,
		[k]: e.target.value.slice(0, 500)
	});
	return /* @__PURE__ */ jsx(Section, {
		id: "contacto",
		eyebrow: "Contacto",
		title: "Solicita una cotización",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-base text-muted-foreground",
					children: "Cuéntanos sobre tu negocio o evento y te enviaremos una propuesta personalizada en el menor tiempo posible."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 space-y-3",
					children: [
						/* @__PURE__ */ jsx(InfoRow, {
							icon: Phone,
							label: "Teléfono / WhatsApp",
							value: TELEFONO
						}),
						/* @__PURE__ */ jsx(InfoRow, {
							icon: Mail,
							label: "Correo",
							value: EMAIL
						}),
						/* @__PURE__ */ jsx(InfoRow, {
							icon: MapPin,
							label: "Dirección",
							value: DIRECCION
						}),
						/* @__PURE__ */ jsx(InfoRow, {
							icon: Clock,
							label: "Horario",
							value: HORARIO
						})
					]
				}),
				/* @__PURE__ */ jsxs("a", {
					href: waLink("Hola, quiero solicitar una cotización."),
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5",
					children: [/* @__PURE__ */ jsx(MessageCircle, { size: 16 }), " Escribir por WhatsApp"]
				})
			] }), /* @__PURE__ */ jsxs("form", {
				onSubmit,
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ jsx(Field, {
								label: "Nombre",
								required: true,
								value: form.nombre,
								onChange: onChange("nombre")
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Empresa",
								value: form.empresa,
								onChange: onChange("empresa")
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Teléfono",
								required: true,
								value: form.telefono,
								onChange: onChange("telefono")
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Correo",
								type: "email",
								value: form.correo,
								onChange: onChange("correo")
							})
						]
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Solicitud",
						required: true,
						textarea: true,
						value: form.solicitud,
						onChange: onChange("solicitud")
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "submit",
						className: "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5",
						children: ["Enviar solicitud ", /* @__PURE__ */ jsx(ChevronRight, { size: 16 })]
					})
				]
			})]
		})
	});
}
function Field({ label, value, onChange, required, type = "text", textarea }) {
	const cls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";
	return /* @__PURE__ */ jsxs("label", {
		className: `block text-sm font-medium text-brand-black ${textarea ? "mt-4 sm:col-span-2" : ""}`,
		children: [/* @__PURE__ */ jsxs("span", {
			className: "mb-1.5 block",
			children: [label, required && /* @__PURE__ */ jsx("span", {
				className: "text-brand-red",
				children: " *"
			})]
		}), textarea ? /* @__PURE__ */ jsx("textarea", {
			required,
			value,
			onChange,
			rows: 4,
			maxLength: 500,
			className: cls
		}) : /* @__PURE__ */ jsx("input", {
			required,
			type,
			value,
			onChange,
			maxLength: 150,
			className: cls
		})]
	});
}
function InfoRow({ icon: Icon, label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red",
			children: /* @__PURE__ */ jsx(Icon, { size: 18 })
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "text-sm font-medium text-brand-black",
			children: value
		})] })]
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-brand-black text-white",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-base font-extrabold text-white",
						children: "La Gumarra"
					}), /* @__PURE__ */ jsx("div", {
						className: "text-[10px] font-semibold uppercase tracking-widest text-brand-gold",
						children: "Colora'a"
					})] })]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-sm text-white/70",
					children: "\"Más que gallina, entregamos calidad, tradición y confianza a cada rincón de Boyacá.\""
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider text-brand-gold",
					children: "Contacto"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-white/80",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Phone, { size: 14 }),
								" ",
								TELEFONO
							]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Mail, { size: 14 }),
								" ",
								EMAIL
							]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(MapPin, { size: 14 }),
								" ",
								DIRECCION
							]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Clock, { size: 14 }),
								" ",
								HORARIO
							]
						})
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider text-brand-gold",
					children: "Cobertura"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-sm text-white/80",
					children: "Duitama, Tunja, Sogamoso, Paipa, Nobsa, Chiquinquirá, Villa de Leyva y +50 municipios de Boyacá."
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display text-sm font-bold uppercase tracking-wider text-brand-gold",
					children: "Síguenos"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex gap-3",
					children: [
						/* @__PURE__ */ jsx(SocialBtn, {
							icon: Facebook,
							href: "https://www.facebook.com/p/La-Gumarra-Colora-100064042364436/"
						}),
						/* @__PURE__ */ jsx(SocialBtn, {
							icon: Instagram,
							href: "#"
						}),
						/* @__PURE__ */ jsx(SocialBtn, {
							icon: MessageCircle,
							href: waLink("Hola")
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 sm:px-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" La Gumarra Colora'a. Todos los derechos reservados."
				]
			})
		})]
	});
}
function SocialBtn({ icon: Icon, href }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red",
		children: /* @__PURE__ */ jsx(Icon, { size: 18 })
	});
}
function FloatingWhats() {
	return /* @__PURE__ */ jsx("a", {
		href: waLink("Hola, quiero más información."),
		target: "_blank",
		rel: "noopener noreferrer",
		className: "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand transition-transform hover:scale-110",
		"aria-label": "WhatsApp",
		children: /* @__PURE__ */ jsx(MessageCircle, { size: 26 })
	});
}
function Section({ id, eyebrow, title, children, tone }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: `${tone === "muted" ? "bg-brand-gray" : "bg-background"} py-16 sm:py-20 md:py-24`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-10 max-w-2xl",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red",
					children: [
						/* @__PURE__ */ jsx("span", { className: "h-px w-6 bg-brand-red" }),
						" ",
						eyebrow
					]
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-extrabold text-brand-black sm:text-4xl md:text-5xl",
					children: title
				})]
			}), children]
		})
	});
}
//#endregion
export { HomePage as component };
