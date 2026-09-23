import {
  ArrowUp,
  ChevronDown,
  Fish,
  MessageCircle,
  Phone,
  Shell,
  Sparkles,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

const coverImage = "./assets/rancho-cover.png";
const whatsappUrl = "https://wa.me/50664070843";

const bocas: MenuItem[] = [
  { name: "Chicharrón", price: "₡3.500" },
  { name: "Chifrijo", price: "₡3.500" },
  { name: "Chifrijo grande", price: "₡4.500" },
  { name: "Chifrijo con pollo", price: "₡3.500" },
  { name: "Costilla", price: "₡3.500" },
  { name: "Lengua", price: "₡4.000" },
  { name: "Giba", price: "₡4.000" },
  { name: "Carne mexicana", price: "₡3.500" },
  { name: "Carne en salsa", price: "₡3.500" },
  { name: "Hígado", price: "₡3.000" },
  { name: "Papas fritas", price: "₡2.500" },
  { name: "Chalupa con papas", price: "₡3.500" },
  { name: "Burrito con papas", price: "₡3.800" },
  { name: "Nachos", price: "₡3.500" },
  { name: "Patacones con carne", price: "₡3.500" },
  { name: "Patacones con pollo", price: "₡3.500" },
  { name: "Alitas", price: "₡3.500" },
  { name: "Fajitas pollo", price: "₡3.000" },
  { name: "Prensada de la casa", price: "₡3.500" },
  { name: "Orden de yuca", price: "₡2.500" },
  { name: "Carne molida", price: "₡3.500" },
  { name: "Taco de alambre", price: "₡3.500" },
  { name: "Filet de pescado", price: "₡3.500" },
  { name: "Camarón empanizado", price: "₡3.500" },
  { name: "Morcilla", price: "₡3.000" },
  { name: "Deditos de queso", price: "₡2.500" },
  { name: "Papanachos", price: "₡3.800" },
  { name: "Atún", price: "₡3.800" },
  { name: "Chuleta de pescado", price: "₡3.800" },
];

const mariscos: MenuItem[] = [
  { name: "Pescado entero con espinas", price: "Desde ₡8.000", note: "El pescado va de ₡8.000 en adelante" },
  { name: "Pescado entero sin espinas", price: "Desde ₡7.000", note: "El pescado va de ₡7.000 en adelante" },
  { name: "Relleno con mariscos o camarón", price: "₡12.000", note: "Al ajillo o en salsa roja/blanca" },
  { name: "Filet pescado empanizado", price: "₡4.000" },
  { name: "Plato de pescado al ajillo", price: "₡5.000" },
  { name: "Mariscada al ajillo", price: "₡5.500" },
  { name: "Pulpo al ajillo", price: "₡5.500" },
  { name: "Colitas de langosta", price: "₡14.000" },
];

const pastas: MenuItem[] = [
  { name: "Salsa blanca con pollo", price: "₡5.000" },
  { name: "Salsa roja con pollo", price: "₡5.000" },
  { name: "Salsa blanca con camarón", price: "₡5.500" },
  { name: "Salsa roja con camarón", price: "₡5.500" },
  { name: "Salsa blanca con mariscos", price: "₡6.000" },
  { name: "Salsa roja con mariscos", price: "₡6.000" },
  { name: "Al ajillo mariscos", price: "₡6.000" },
  { name: "Al ajillo en pollo", price: "₡6.000" },
  { name: "Al ajillo en camarón", price: "₡6.000" },
];

const pollo: MenuItem[] = [
  { name: "Fajitas empanizadas", price: "₡4.000" },
  { name: "Fajitas a la plancha", price: "₡4.500" },
  { name: "Pollo en salsa blanca", price: "₡5.000" },
  { name: "Pollo salteado con vegetales", price: "₡5.000" },
];

const camarones: MenuItem[] = [
  { name: "Empanizados", price: "₡4.500" },
  { name: "Al ajillo", price: "₡5.000" },
  { name: "A la diabla", price: "₡5.000" },
  { name: "Canasta de camarón", price: "₡5.000" },
  { name: "Salteado con vegetales", price: "₡5.000" },
  { name: "Torta de huevo con camarón", price: "₡3.500" },
];

const carnes: MenuItem[] = [
  { name: "Plato de lengua", price: "₡5.000" },
  { name: "Plato de giba", price: "₡5.000" },
  { name: "Plato taco de alambre", price: "₡4.500" },
  { name: "Canasta de chicharrón", price: "₡5.000" },
  { name: "Canasta de costilla", price: "₡5.000" },
];

const tacos: MenuItem[] = [
  { name: "Maíz o harina", price: "₡3.500" },
  { name: "Camarón", price: "₡4.000" },
  { name: "Chicharrón", price: "₡4.000" },
];

const categoryNav = [
  ["bocas", "Bocas"],
  ["casados", "Casados"],
  ["mariscos", "Mariscos"],
  ["arroces", "Arroces"],
  ["pastas", "Pastas"],
  ["pollo", "Pollo"],
  ["camarones", "Camarones"],
  ["carnes", "Carnes"],
  ["sopas", "Sopas"],
  ["tacos", "Tacos"],
  ["ceviche", "Ceviche"],
  ["batidos", "Batidos"],
  ["extras", "Extras"],
] as const;

function MenuRows({ items }: { items: MenuItem[] }) {
  return (
    <div className="menu-rows">
      {items.map((item) => (
        <div className="menu-entry" key={`${item.name}-${item.price}`}>
          <div>
            <p className="item-name">{item.name}</p>
            {item.note && <p className="item-note">{item.note}</p>}
          </div>
          {item.price && <p className="item-price">{item.price}</p>}
        </div>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <div className="heading-rule" aria-hidden="true"><span /><Waves size={20} /><span /></div>
    </header>
  );
}

function MenuSection({ id, eyebrow, title, children, variant = "cream" }: { id: string; eyebrow: string; title: string; children: React.ReactNode; variant?: "cream" | "blue" }) {
  return (
    <section className={`menu-section ${variant}`} id={id}>
      <div className="section-wrap">
        <SectionHeading eyebrow={eyebrow} title={title} />
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const scrollToMenu = () => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ir al inicio">
          <Fish size={19} strokeWidth={1.7} />
          <span>Rancho <b>del Marisco</b></span>
        </a>
        <a className="header-call" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={17} /> <span>Escríbanos</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-content">
          <p className="kicker"><Shell size={18} /> Bar y Restaurante</p>
          <h1 id="hero-title">Rancho <em>del</em><br />Marisco</h1>
          <div className="hero-wave"><span /> <Waves size={32} /> <span /></div>
          <p className="hero-copy">El sabor del mar, servido con cariño.</p>
          <button type="button" className="menu-cta" onClick={scrollToMenu}>
            Ver el menú <ChevronDown size={18} />
          </button>
        </div>
        <figure className="hero-image">
          <img src={coverImage} alt="Pescado servido en Rancho del Marisco" />
          <figcaption>Estamos para servirle</figcaption>
        </figure>
      </section>

      <nav className="category-nav" aria-label="Categorías del menú" id="menu">
        <div className="nav-label"><UtensilsCrossed size={17} /> Menú</div>
        <div className="nav-scroller">
          {categoryNav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </div>
      </nav>

      <section className="menu-intro" aria-label="Información del menú">
        <Sparkles size={19} />
        <p>Todos los precios están expresados en <strong>colones costarricenses</strong>.</p>
      </section>

      <MenuSection id="bocas" eyebrow="Para compartir" title="Bocas">
        <MenuRows items={bocas} />
      </MenuSection>

      <MenuSection id="casados" eyebrow="Plato tradicional" title="Casados" variant="blue">
        <div className="feature-card">
          <div className="feature-topline"><span>Fajitas empanizadas</span><b>₡3.500</b></div>
          <p className="feature-copy">También disponible con fajitas a la plancha, bistec, chuleta, pescado, hígado, carne en salsa, costilla o chicharrón.</p>
        </div>
        <MenuRows items={[
          { name: "Camarón", price: "₡4.500" },
          { name: "Lengua", price: "₡4.500" },
          { name: "Giba", price: "₡4.500" },
        ]} />
      </MenuSection>

      <MenuSection id="mariscos" eyebrow="Especialidades de la casa" title="Mariscos">
        <MenuRows items={mariscos} />
      </MenuSection>

      <MenuSection id="arroces" eyebrow="Sabores salteados" title="Arroces" variant="blue">
        <div className="price-table" role="table" aria-label="Precios de arroces">
          <div className="price-table-head" role="row"><span role="columnheader">Preparación</span><span role="columnheader">Bocas</span><span role="columnheader">Platos</span></div>
          {[
            ["Pollo", "₡3.500", "₡4.500"],
            ["Camarones", "₡4.000", "₡5.000"],
            ["Camarones con arroz", "—", "₡5.500"],
            ["Cerdo", "₡4.000", "₡5.000"],
            ["Cantones", "₡4.000", "₡5.000"],
            ["Mar y tierra", "—", "₡5.500"],
            ["Marinera", "—", "₡5.000"],
            ["Mixto: camarones y pollo", "—", "₡5.000"],
            ["De la casa", "—", "₡7.000"],
            ["Con pulpo", "—", "₡5.000"],
          ].map(([dish, snack, plate]) => <div className="price-table-row" role="row" key={dish}><span role="cell">{dish}</span><span role="cell">{snack}</span><span role="cell">{plate}</span></div>)}
        </div>
      </MenuSection>

      <MenuSection id="pastas" eyebrow="Salsas que abrazan" title="Pastas">
        <MenuRows items={pastas} />
      </MenuSection>

      <div className="split-sections">
        <MenuSection id="pollo" eyebrow="Ave" title="Pollo" variant="blue"><MenuRows items={pollo} /></MenuSection>
        <MenuSection id="camarones" eyebrow="Del mar" title="Camarones"><MenuRows items={camarones} /></MenuSection>
        <MenuSection id="carnes" eyebrow="Platos fuertes" title="Carnes" variant="blue"><MenuRows items={carnes} /></MenuSection>
      </div>

      <MenuSection id="sopas" eyebrow="Para reconfortar" title="Sopas">
        <div className="price-table compact" role="table" aria-label="Precios de sopas">
          <div className="price-table-head" role="row"><span role="columnheader">Sopa</span><span role="columnheader">Pequeña</span><span role="columnheader">Grande</span></div>
          <div className="price-table-row" role="row"><span role="cell">Mariscos en leche</span><span role="cell">₡4.000</span><span role="cell">₡6.000</span></div>
          <div className="price-table-row" role="row"><span role="cell">Mariscos en agua</span><span role="cell">₡3.500</span><span role="cell">₡5.500</span></div>
        </div>
        <MenuRows items={[
          { name: "Vuelve a la vida", price: "₡5.000" },
          { name: "Consomé", price: "₡3.500" },
          { name: "Con pollo y verduras", price: "₡4.500" },
          { name: "Costilla con elote", price: "₡3.500" },
        ]} />
      </MenuSection>

      <MenuSection id="tacos" eyebrow="Al gusto" title="Tacos" variant="blue"><MenuRows items={tacos} /></MenuSection>

      <MenuSection id="ceviche" eyebrow="Preparado al momento" title="Ceviche">
        <div className="price-table" role="table" aria-label="Precios de ceviche">
          <div className="price-table-head" role="row"><span role="columnheader">Ceviche</span><span role="columnheader">Boca</span><span role="columnheader">Fuente</span></div>
          {[
            ["Pescado", "₡3.500", "₡4.500"],
            ["Costeño", "₡4.000", "₡5.000"],
            ["Camarón", "₡4.000", "₡5.000"],
            ["Vuelve a la vida", "₡4.000", "₡5.000"],
            ["Chucheca", "₡4.000", "₡5.000"],
            ["Mixto", "₡4.000", "₡5.000"],
            ["Coctel de camarón", "—", "₡5.000"],
          ].map(([dish, snack, plate]) => <div className="price-table-row" role="row" key={dish}><span role="cell">{dish}</span><span role="cell">{snack}</span><span role="cell">{plate}</span></div>)}
        </div>
      </MenuSection>

      <MenuSection id="batidos" eyebrow="Frescos y naturales" title="Batidos" variant="blue">
        <div className="drink-prices"><span>Agua <b>₡1.200</b></span><span>Leche <b>₡1.500</b></span></div>
        <p className="fruit-label">Frutas disponibles</p>
        <div className="fruit-grid">
          {["Fresa", "Guanábana", "Piña", "Piña con hierbabuena", "Pitahaya", "Papaya", "Cas", "Tamarindo", "Mora", "Limonada", "Limonada con hierbabuena", "Maracuyá", "Sandía"].map((fruit) => <span key={fruit}>{fruit}</span>)}
        </div>
      </MenuSection>

      <MenuSection id="extras" eyebrow="Complementos" title="Extras">
        <div className="extras-card">
          <div><strong>A ₡500</strong><span>Pico de gallo</span><span>Vegetales</span><span>Aguacate</span><span>Arroz</span><span>Puré</span></div>
          <div className="packaging"><span>Empaque para llevar</span><b>₡200</b></div>
        </div>
      </MenuSection>

      <section className="contact-band">
        <div className="contact-inner">
          <p className="kicker"><Waves size={18} /> Gracias por su visita</p>
          <h2>Estamos para servirle</h2>
          <p>También contamos con <strong>SINPE Móvil</strong>.</p>
          <div className="contact-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={20} /> 6407-0843</a>
            <a href="tel:+50664070843"><Phone size={19} /> Llamar</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><Fish size={22} /> <span>Rancho <b>del Marisco</b></span></div>
        <p>Bar y Restaurante · Todos los precios están en colones costarricenses.</p>
        <a href="#top" className="back-top">Volver arriba <ArrowUp size={16} /></a>
      </footer>
    </main>
  );
}
