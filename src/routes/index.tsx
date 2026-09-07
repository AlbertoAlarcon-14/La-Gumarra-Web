import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone, MapPin, Mail, Clock, Instagram, Facebook, MessageCircle,
  ShieldCheck, Truck, Award, Users, Building2, Utensils, Store, ShoppingBag,
  PartyPopper, Landmark, ChevronRight, CheckCircle2, Sparkles, Leaf,
  ClipboardCheck, Factory, Package, MapPinned, Star, Menu, X,
} from "lucide-react";
import hero from "@/assets/corp-hero.png";
import prodEntera from "@/assets/prod-entera.png";
import prodBeneficiada from "@/assets/prod-beneficiada.jpeg";
import prodRestaurante from "@/assets/prod-restaurante.jpeg";
import prodEventos from "@/assets/prod-eventos.jpeg";
import prodMayorista from "@/assets/prod-mayorista.jpeg";
import galPlant from "@/assets/gallery-plant.jpeg";
import galTruck from "@/assets/gallery-truck.jpeg";
import galFarm from "@/assets/gallery-farm.png";
import galQuality from "@/assets/gallery-quality.jpeg";
import localMercaplaza from "@/assets/locales/local-mercaplaza.jpeg";
import localSanAntonio from "@/assets/locales/local-sanantonio.png";
import localSogamoso from "@/assets/locales/local-sogamoso.jpeg";
import localTunja from "@/assets/locales/local-tunja.jpeg";
import logoGumarra from "@/assets/logo-gumarra.png";
import colaboradorOperario1 from "@/assets/colaboradores/operario1.jpeg";
import colaboradorOperario2 from "@/assets/colaboradores/operario2.jpeg";
import colaboradorConductor1 from "@/assets/colaboradores/conductor1.jpeg";
import colaboradorConductor2 from "@/assets/colaboradores/conductor2.jpeg";

const WHATSAPP = "573212325119"; // TODO: reemplazar
const TELEFONO = "+57 3212325119";
const EMAIL = "lagumarracoloraa01@gmail.com";
const DIRECCION = "Duitama, Boyacá, Colombia";
const HORARIO = "Lun–Sáb: 8:00 a.m. – 6:00 p.m.";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Gumarra Colora'a — Distribución de gallina en Boyacá" },
      {
        name: "description",
        content:
          "Empresa boyacense líder en procesamiento, comercialización y distribución de gallina criolla para hogares, restaurantes, supermercados y eventos.",
      },
      { name: "keywords", content: "gallina criolla, gallina roja, distribución avícola, Duitama, Boyacá, eventos catering, gallina en canal"},
      { property: "og:title", content: "La Gumarra Colora'a — Gallina criolla de la mejor calidad en Boyacá"},
      { property: "og:description", content: "Procesamos y distribuimos gallina criolla y gallina roja con los más altos estándares de calidad." },
      { property: "og:image", content: hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "La Gumarra Colora'a",
          description: "Procesamiento, comercialización y distribución de gallina criolla y gallina roja en Boyacá.",
          address: { "@type": "PostalAddress", addressLocality: "Duitama", addressRegion: "Boyacá", addressCountry: "CO" },
          telephone: TELEFONO,
          email: EMAIL,
          areaServed: "Boyacá, Colombia",
        }),
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Empresa", href: "#empresa" },
  { label: "Productos", href: "#productos" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Proceso", href: "#proceso" },
  { label: "Clientes", href: "#clientes" },
  { label: "Colaboradores", href: "#colaboradores" }, 
  { label: "Locales", href: "#locales" }, 
  { label: "Contacto", href: "#contacto" },
];

function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <TrustBar />
      <Empresa />
      <Productos />
      <Cobertura />
      <Proceso />
      <Calidad />
      <Clientes />
      <Galeria />
      <Testimonios />
      <Colaboradores />
      <Locales /> 
      <Contacto />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          {/* 👇 NUEVO LOGO CON IMAGEN */}
          <img 
            src={logoGumarra} 
            alt="La Gumarra Colora'a - Gallina Criolla"
            className="h-12 w-auto object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-base font-extrabold text-brand-red sm:text-lg">La Gumarra</div>
            <div className="-mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand-black/70 sm:text-xs">Colora'a</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-red">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href={waLink("Hola, quiero solicitar una cotización.")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} /> Cotizar
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-4 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waLink("Hola, quiero solicitar una cotización.")}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-brand"
            >
              <MessageCircle size={16} /> Cotizar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand shadow-brand">
      <span className="font-display text-lg font-black text-white">G</span>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Planta avícola en Boyacá" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-brand-black/30" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold backdrop-blur">
          <Sparkles size={14} /> Tradición boyacense desde hace más de 20 años
        </span>
        <h1 className="font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          La Gumarra <span className="text-brand-gold">Colora'a</span>
          <span className="mt-3 block text-2xl font-semibold text-white/90 sm:text-3xl md:text-4xl">
            Tradición y calidad que alimenta a Boyacá
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Procesamos y distribuimos gallina criolla y gallina roja con los más altos estándares de calidad para hogares,
          negocios y eventos en todo el departamento.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink("Hola, quiero solicitar una cotización de productos.")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Solicitar cotización <ChevronRight size={16} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const items = [
    { icon: Award, k: "+20", l: "Años de experiencia" },
    { icon: Users, k: "+5.000", l: "Clientes atendidos" },
    { icon: MapPinned, k: "+50", l: "Municipios en Boyacá" },
    { icon: Star, k: "4.9/5", l: "Calificación promedio" },
  ];
  return (
    <section className="border-b border-border bg-brand-gray">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.l} className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand">
              <it.icon size={20} />
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-brand-black">{it.k}</div>
              <div className="text-xs font-medium text-muted-foreground sm:text-sm">{it.l}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- EMPRESA ---------------- */
function Empresa() {
  const features = [
    { icon: Landmark, t: "Historia y tradición", d: "Más de dos décadas trabajando por la mesa boyacense con una receta familiar de calidad." },
    { icon: ShieldCheck, t: "Compromiso con la calidad", d: "Procesos controlados y trazabilidad en cada eslabón de la cadena." },
    { icon: MapPinned, t: "Cobertura regional", d: "Llegamos a todos los principales municipios del departamento de Boyacá." },
    { icon: Award, t: "Experiencia avícola", d: "Equipo especializado que garantiza frescura y excelencia en cada entrega." },
  ];
  return (
    <Section id="empresa" eyebrow="Nuestra empresa" title="Una empresa boyacense con vocación de servicio">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            En <strong className="text-brand-black">La Gumarra Colora'a</strong> lo que comenzó como un negocio familiar fue creciendo con el apoyo de nuestros clientes y el compromiso de nuestro equipo. Hoy seguimos trabajando para llevar productos de calidad a hogares y negocios de Boyacá.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nuestra trayectoria nos posiciona como un aliado estratégico para quienes buscan calidad
            constante, abastecimiento seguro y un trato cercano y profesional.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <f.icon size={18} />
                </div>
                <div className="font-display text-sm font-bold text-brand-black">{f.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-brand">
            <img src={galFarm} alt="Granja avícola en Boyacá" loading="lazy" className="h-full w-full object-cover" width={1024} height={1024} />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden rounded-2xl bg-white p-4 shadow-brand sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold text-brand-black">
                <Leaf size={22} />
              </div>
              <div>
                <div className="font-display text-base font-extrabold text-brand-black">Calidad garantizada</div>
                <div className="text-xs text-muted-foreground">100% boyacense</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- PRODUCTOS ---------------- */
function Productos() {
  const items = [
    {
      img: prodEntera,
      t: "Gallina en canal",
      d: "Gallina criolla fresca, seleccionada y lista para su preparación. Una opción ideal para hogares, restaurantes y preparaciones tradicionales que buscan conservar el sabor y la calidad del producto.",
    },
    {
      img: prodBeneficiada,
      t: "Gallina roja beneficiada",
      d: "Gallina roja beneficiada y preparada para facilitar su manipulación y cocción. Una alternativa práctica y rendidora para hogares, restaurantes, asaderos y negocios de alimentos.",
    },
    {
      img: prodRestaurante,
      t: "Productos para restaurantes",
      d: "Presentaciones y cortes pensados para restaurantes, asaderos y cocinas profesionales que necesitan un suministro constante de producto fresco y de calidad.",
    },
    {
      img: prodEventos,
      t: "Pedidos para eventos",
      d: "Atendemos pedidos para celebraciones, reuniones, banquetes y eventos especiales, ofreciendo el abastecimiento necesario según la cantidad y las necesidades de cada ocasión.",
    },
    {
      img: prodMayorista,
      t: "Distribución mayorista",
      d: "Suministro de productos para tiendas, supermercados, distribuidores y negocios de alimentos que requieren volumen, continuidad y una distribución confiable en Boyacá.",
    },
  ];

  return (
    <Section
      id="productos"
      eyebrow="Nuestros productos"
      title="Calidad en cada presentación"
      tone="muted"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.t}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-bold text-brand-black">
                {p.t}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.d}
              </p>

              <a
                href={waLink(
                  `Hola, me interesa el producto: ${p.t}. ¿Pueden enviarme información?`
                )}
                className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white"
              >
                <MessageCircle size={14} /> Contactar
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- COBERTURA ---------------- */
function Cobertura() {
  const municipios = [
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
    "Garagoa",
  ];

  return (
    <Section
      id="cobertura"
      eyebrow="Cobertura"
      title="Presentes en todo Boyacá"
    >
      <div className="grid gap-8 lg:grid-cols-5">
        {/* MAPA */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="La Gumarra Colora'a - Duitama"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456789!2d-73.025358!3d5.8440065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f6ab289c339%3A0x8df7e04dc477edbe!2sLa%20Gumarra%20Colora'a!5e0!3m2!1ses!2sco!4v1712345678901"
              className="h-[360px] w-full md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-2 text-center text-xs text-muted-foreground">
            📍 La Gumarra Colora'a - Duitama, Boyacá
          </div>
        </div>

        {/* INFORMACIÓN DE COBERTURA */}
        <div className="lg:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            Contamos con una red de distribución que nos permite llevar
            nuestros productos a diferentes municipios de Boyacá. Atendemos
            hogares, restaurantes, asaderos, comercios y distribuidores,
            adaptándonos a las necesidades de cada cliente y ruta.
          </p>

          {/* MUNICIPIOS */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-brand-black">
              Municipios donde tenemos presencia
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-1.5">
              {municipios.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-1.5 rounded-lg bg-brand-gray px-2.5 py-1.5"
                >
                  <MapPin
                    size={12}
                    className="shrink-0 text-brand-red"
                  />

                  <span className="truncate text-xs font-medium text-brand-black">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CARACTERÍSTICAS DE LA DISTRIBUCIÓN */}
          <div className="mt-6 flex flex-wrap gap-2">
  <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-gray px-3 py-2 text-xs font-semibold text-brand-black">
    <Truck size={14} className="text-brand-red" />
    Flota refrigerada
  </div>

  <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-gray px-3 py-2 text-xs font-semibold text-brand-black">
    <Clock size={14} className="text-brand-red" />
    Entregas puntuales
  </div>

  <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-gray px-3 py-2 text-xs font-semibold text-brand-black">
    <ShieldCheck size={14} className="text-brand-red" />
    Trazabilidad total
  </div>
</div>

          {/* GOOGLE MAPS */}
          <div className="mt-4">
            <a
              href="https://www.google.com/maps/place/La+Gumarra+Colora'a/@5.8440065,-73.025358,17.5z/data=!4m6!3m5!1s0x8e6a3f6ab289c339:0x8df7e04dc477edbe!8m2!3d5.8441081!4d-73.0235327!16s%2Fg%2F11rhr3c9hz?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline"
            >
              <MapPin size={14} />
              Ver ubicación en Google Maps
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Badge({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-red/20 bg-brand-red/5 px-3 py-1.5 text-xs font-semibold text-brand-red">
      <Icon size={14} /> {children}
    </span>
  );
}

/* ---------------- PROCESO ---------------- */
function Proceso() {
  const steps = [
    { icon: ClipboardCheck, t: "Selección", d: "Elegimos ejemplares de calidad bajo estrictos criterios sanitarios." },
    { icon: ShieldCheck, t: "Beneficio", d: "Benefecio y beneficio controlados con buenas prácticas." },
    { icon: Factory, t: "Procesamiento", d: "Cortes y porcionado en planta con equipos profesionales." },
    { icon: Package, t: "Empaque", d: "Empaque higiénico que conserva frescura y calidad." },
    { icon: Truck, t: "Distribución", d: "Logística refrigerada hacia cada destino en Boyacá." },
    { icon: CheckCircle2, t: "Entrega", d: "Entrega puntual a hogares, negocios y eventos." },
  ];
  return (
    <Section id="proceso" eyebrow="Nuestro proceso" title="Del campo a tu mesa" tone="muted">
      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.t} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-extrabold text-white shadow-brand">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/30 text-brand-red">
              <s.icon size={20} />
            </div>
            <h3 className="font-display text-lg font-bold text-brand-black">{s.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- CALIDAD ---------------- */
function Calidad() {
  const items = [
    { icon: Leaf, t: "Productos frescos", d: "Frescura garantizada en cada entrega." },
    { icon: ClipboardCheck, t: "Procesos controlados", d: "Trazabilidad y estándares de calidad." },
    { icon: Users, t: "Atención personalizada", d: "Asesoría comercial dedicada por cliente." },
    { icon: Clock, t: "Entregas oportunas", d: "Logística cumplida, sin retrasos." },
    { icon: MapPinned, t: "Cobertura regional", d: "Red logística en todo Boyacá." },
  ];
  return (
    <Section id="calidad" eyebrow="Calidad y confianza" title="Por qué nos eligen nuestros clientes">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((it) => (
          <div key={it.t} className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand">
              <it.icon size={20} />
            </div>
            <div className="font-display text-sm font-bold text-brand-black">{it.t}</div>
            <p className="mt-1 text-xs text-muted-foreground">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CLIENTES ---------------- */
function Clientes() {
  const items = [
    {
      icon: Utensils,
      t: "Restaurantes",
      d: "Producto fresco y de calidad para preparar tus platos y ofrecer a tus clientes el mejor sabor.",
    },
    {
      icon: Building2,
      t: "Asaderos",
      d: "Abastecimiento confiable de productos seleccionados para mantener la calidad y continuidad de tu negocio.",
    },
    {
      icon: Store,
      t: "Supermercados",
      d: "Productos frescos y seleccionados para ampliar tu oferta y brindar opciones de calidad a tus clientes.",
    },
    {
      icon: ShoppingBag,
      t: "Tiendas",
      d: "Una alternativa de calidad para complementar tu oferta y atender las necesidades de tus clientes.",
    },
    {
      icon: Truck,
      t: "Distribuidores",
      d: "Suministro organizado y confiable para quienes buscan ampliar su cobertura y atender diferentes mercados.",
    },
    {
      icon: PartyPopper,
      t: "Eventos",
      d: "Pedidos especiales para celebraciones, reuniones y eventos que necesitan productos frescos y de calidad.",
    },
    {
      icon: Landmark,
      t: "Instituciones",
      d: "Atención de pedidos para instituciones que requieren productos de calidad y un proveedor confiable.",
    },
  ];

  return (
    <Section
      id="clientes"
      eyebrow="Clientes que atendemos"
      title="Estamos donde nos necesitas"
      tone="muted"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((c) => (
          <div
            key={c.t}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-red hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <c.icon size={22} />
            </div>

            <div className="text-sm font-semibold text-brand-black">
              {c.t}
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              {c.d}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- GALERIA ---------------- */
function Galeria() {
  const imgs = [
    { src: galPlant, alt: "Planta de procesamiento" },
    { src: galTruck, alt: "Vehículos de distribución" },
    { src: galFarm, alt: "Granja avícola" },
    { src: galQuality, alt: "Control de calidad" },
    { src: prodEntera, alt: "Gallina entera" },
    { src: prodEventos, alt: "Servicio para eventos" },
  ];
  return (
    <Section id="galeria" eyebrow="Galería" title="Conoce nuestras instalaciones y procesos">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {imgs.map((g, i) => (
          <div key={i} className={`overflow-hidden rounded-2xl shadow-soft ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" width={1024} height={1024} />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIOS ---------------- */
function Testimonios() {
  const items = [
    { n: "Carlos Pérez", r: "Asadero El Fogón", t: "Llevamos años trabajando con La Gumarra Colora'a. Calidad y cumplimiento siempre." },
    { n: "Marcela Rodríguez", r: "Restaurante La Vereda", t: "Su gallina es la mejor de la región. Nuestros clientes lo notan en cada plato." },
    { n: "Luis Hernández", r: "Distribuidor Sogamoso", t: "Excelente abastecimiento, logística puntual y precios competitivos." },
  ];
  return (
    <Section id="testimonios" eyebrow="Testimonios" title="Lo que dicen nuestros clientes" tone="muted">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="mb-3 flex gap-0.5 text-brand-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <blockquote className="text-sm leading-relaxed text-foreground">"{t.t}"</blockquote>
            <figcaption className="mt-4">
              <div className="font-display text-sm font-bold text-brand-black">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
/* ---------------- COLABORADORES ---------------- */
function Colaboradores() {
  const colaboradores = [
      {
      nombre: "Dario Rico",
      rol: "Operario de planta",
      foto: colaboradorOperario1,
      descripcion:
        "Siempre dispuesto a garantizar la calidad de nuestros productos y la eficiencia en el proceso de producción.",
    },
    {
      nombre: "Mireya Ronderos",
      rol: "Operario de planta",
      foto: colaboradorConductor1,
      descripcion: "atenta y compprometida con la displina y la seguridad en el trabajo, asegurando que cada gallina cumpla con los estándares de calidad.",
    },
    {
      nombre: "Jairo Higuera",
      rol: "Conduntor de entregas",
      foto: colaboradorOperario2,
      descripcion:
        "entregado a la puntualidad y al cuidado de los productos durante el transporte, asegurando que lleguen frescos a nuestros clientes.",
    },
    {
      nombre: "Paola Ronderos",
      rol: "Operario de planta",
      foto: colaboradorConductor2,
      descripcion: "detallista y comprometida con la higiene y el control de calidad, garantizando que cada gallina cumpla con los estándares de la empresa.",
    },
  ];

  return (
    <Section id="colaboradores" eyebrow="Nuestro equipo" title="Las personas detrás de La Gumarra" tone="muted">
      <p className="mb-10 max-w-3xl text-base text-muted-foreground">
        Detrás de cada entrega de gallina criolla y gallina roja hay un equipo de personas comprometidas
        con la calidad y el servicio. Conoce a nuestros operarios y conductores, el corazón de nuestra empresa.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {colaboradores.map((c) => (
          <div key={c.nombre} className="group rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1">
            <div className="mx-auto h-60 w-60 overflow-hidden rounded-full border-4 border-brand-red/20 shadow-md">
              <img
                src={c.foto}
                alt={c.nombre}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Si la imagen no carga, muestra un placeholder
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23e5e7eb" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%236b7280" font-family="sans-serif" font-size="10"%3E📸%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-brand-black">{c.nombre}</h3>
            <div className="text-sm font-semibold text-brand-red">{c.rol}</div>
            <p className="mt-2 text-sm text-muted-foreground">{c.descripcion}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
/* ---------------- LOCALES ---------------- */
function Locales() {
  const locales = [
    {
      nombre: "Gallinalandia Duitama - Mercaplaza",
      direccion: "CLL 11 #21-18 Mercaplaza, Duitama",
      telefono: "+57 3133276415",
      horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
      icono: "🐔",
      whatsapp: "573133276415",
      imagen: localMercaplaza,
      lat: 5.8217186,
      lng: -73.0343088
    },
    {
      nombre: "Gallinalandia Duitama - San Antonio",
      direccion: "Vereda San Antonio norte sec 4 esquinas, Duitama",
      telefono: "+57 3003563287",
      horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
      icono: "🐔",
      whatsapp: "573003563287",
      imagen: localSanAntonio,
      lat: 5.8441081,
      lng: -73.0235327
    },
    {
      nombre: "Gallinalandia Sogamoso",
      direccion: "CLL 12 #18-90, Sogamoso",
      telefono: "+57 3228982586",
      horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
      icono: "🐔",
      whatsapp: "573228982586",
      imagen: localSogamoso,
      lat: 5.7207619,
      lng: -72.9338103
    },
    {
      nombre: "Gallinalandia Tunja",
      direccion: "Kr 14 #04-08, Tunja",
      telefono: "+57 3186668696",
      horario: "Lun–Sáb: 6:00 a.m. – 6:00 p.m.",
      icono: "🐔",
      whatsapp: "573186668696",
      imagen: localTunja,
      lat: 5.5189949,
      lng: -73.369889
    },
  ];

  return (
    <Section id="locales" eyebrow="Puntos de venta" title="Gallinalandia - Encuéntranos en todo Boyacá">
      <p className="mb-10 max-w-3xl text-base text-muted-foreground">
        Visita nuestros locales físicos y encuentra la mejor gallina criolla y gallina roja en los principales municipios de Boyacá.
        Nuestros puntos de venta están estratégicamente ubicados para atenderte con la mejor calidad y servicio.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {locales.map((local) => (
          <div key={local.nombre} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-colors hover:border-brand-red">
            {/* 👇 IMAGEN DEL LOCAL */}
            {local.imagen && (
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={local.imagen} 
                  alt={local.nombre}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <span className="text-xs font-semibold text-white">{local.nombre}</span>
                </div>
              </div>
            )}
            
            <div className="p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-3xl">
                {local.icono}
              </div>
              <h3 className="font-display text-lg font-bold text-brand-black">{local.nombre}</h3>
              <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-red" />
                <span>{local.direccion}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} className="text-brand-red" />
                <span>{local.horario}</span>
              </div>
              {local.telefono && (
                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-brand-red">
                  <Phone size={16} />
                  <span>{local.telefono}</span>
                </div>
              )}
              
              {/* 👇 BOTÓN DE WHATSAPP */}
              {local.whatsapp && (
                <a
                  href={`https://wa.me/${local.whatsapp}?text=Hola%2C%20me%20interesa%20la%20gallina%20criolla%20y%20roja%20de%20${encodeURIComponent(local.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
                >
                  <MessageCircle size={18} /> Escribir por WhatsApp
                </a>
              )}

              {/* 👇 ENLACE A GOOGLE MAPS CON COORDENADAS EXACTAS */}
              {local.lat && local.lng && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${local.lat},${local.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-2 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white"
                >
                  <MapPin size={14} /> Ver en Google Maps
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
/* ---------------- CONTACTO ---------------- */
function Contacto() {
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", correo: "", solicitud: "" });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre}${form.empresa ? ` de ${form.empresa}` : ""}.%0ATel: ${form.telefono}%0ACorreo: ${form.correo}%0ASolicitud: ${form.solicitud}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };
  const onChange = (k: keyof typeof form) => (e: any) =>
    setForm({ ...form, [k]: e.target.value.slice(0, 500) });

  return (
    <Section id="contacto" eyebrow="Contacto" title="Solicita una cotización">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-base text-muted-foreground">
            Cuéntanos sobre tu negocio o evento y te enviaremos una propuesta personalizada en el menor tiempo posible.
          </p>
          <div className="mt-6 space-y-3">
            <InfoRow icon={Phone} label="Teléfono / WhatsApp" value={TELEFONO} />
            <InfoRow icon={Mail} label="Correo" value={EMAIL} />
            <InfoRow icon={MapPin} label="Dirección" value={DIRECCION} />
            <InfoRow icon={Clock} label="Horario" value={HORARIO} />
          </div>
          <a
            href={waLink("Hola, quiero solicitar una cotización.")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} /> Escribir por WhatsApp
          </a>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" required value={form.nombre} onChange={onChange("nombre")} />
            <Field label="Empresa" value={form.empresa} onChange={onChange("empresa")} />
            <Field label="Teléfono" required value={form.telefono} onChange={onChange("telefono")} />
            <Field label="Correo" type="email" value={form.correo} onChange={onChange("correo")} />
          </div>
          <Field label="Solicitud" required textarea value={form.solicitud} onChange={onChange("solicitud")} />
          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Enviar solicitud <ChevronRight size={16} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label, value, onChange, required, type = "text", textarea,
}: {
  label: string; value: string; onChange: (e: any) => void;
  required?: boolean; type?: string; textarea?: boolean;
}) {
  const cls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";
  return (
    <label className={`block text-sm font-medium text-brand-black ${textarea ? "mt-4 sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block">{label}{required && <span className="text-brand-red"> *</span>}</span>
      {textarea ? (
        <textarea required={required} value={value} onChange={onChange} rows={4} maxLength={500} className={cls} />
      ) : (
        <input required={required} type={type} value={value} onChange={onChange} maxLength={150} className={cls} />
      )}
    </label>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-brand-black">{value}</div>
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <div>
              <div className="font-display text-base font-extrabold text-white">La Gumarra</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">Colora'a</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            "Más que gallina, entregamos calidad, tradición y confianza a cada rincón de Boyacá."
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-gold">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone size={14} /> {TELEFONO}</li>
            <li className="flex items-center gap-2"><Mail size={14} /> {EMAIL}</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> {DIRECCION}</li>
            <li className="flex items-center gap-2"><Clock size={14} /> {HORARIO}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-gold">Cobertura</h4>
          <p className="mt-4 text-sm text-white/80">
            Duitama, Tunja, Sogamoso, Paipa, Nobsa, Chiquinquirá, Villa de Leyva y +50 municipios de Boyacá.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-gold">Síguenos</h4>
          <div className="mt-4 flex gap-3">
            <SocialBtn icon={Facebook} href="https://www.facebook.com/p/La-Gumarra-Colora-100064042364436/" />
            <SocialBtn icon={Instagram} href="#" />
            <SocialBtn icon={MessageCircle} href={waLink("Hola")} />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 sm:px-6">
          © {new Date().getFullYear()} La Gumarra Colora'a. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red">
      <Icon size={18} />
    </a>
  );
}

/* ---------------- FLOATING WHATS ---------------- */
function FloatingWhats() {
  return (
    <a
      href={waLink("Hola, quiero más información.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}

/* ---------------- SECTION HELPER ---------------- */
function Section({
  id, eyebrow, title, children, tone,
}: {
  id?: string; eyebrow: string; title: string; children: React.ReactNode;
  tone?: "muted";
}) {
  return (
    <section id={id} className={`${tone === "muted" ? "bg-brand-gray" : "bg-background"} py-16 sm:py-20 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
            <span className="h-px w-6 bg-brand-red" /> {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand-black sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}