// src/content/content.js
import { remark } from 'remark';
import html from 'remark-html';

export const content = {
  en: {
    about: {
      sections: [
        {
          title: "About Voltellum",
          content: `
# About Voltellum

At Voltellum, we are pioneering smart energy storage solutions to keep 
critical infrastructure running during emergencies while supporting the stability and 
sustainability of the electric grid. Our mission is to create a more resilient, 
sustainable future by ensuring communities stay safe and empowered, no matter what tomorrow brings.

## Our Story

The idea for Voltellum was born in late 2024, shortly after Swedish authorities distributed the brochure 
"In case of crisis or war." This publication was a response to heightened tensions in 
Europe due to Russia's actions in Ukraine. We were surprised to learn that nearly all Swedish shelters lacked 
backup energy systems.

Drawing from our background in developing battery electric vehicles we saw an opportunity. 
We envisioned commissioning stationary battery storage in Swedish shelters, thereby solving two critical issues:
1. Addressing the rapidly growing need for energy storage solutions connected to the power grid.
2. Enhancing safety, comfort, and productivity in Swedish shelters during times of emergency preparedness.

With this vision, Voltellum was born, aiming to improve energy security and emergency readiness in Sweden.

## Impact

Sweden's 65,000 shelters, able to protect 7 million people, are just the beginning. 
Globally, the need for resilient backup power is growing as communities prioritize disaster readiness. 
Beyond civil defense, Voltellum's solutions have broad applicability in healthcare, telecommunications, 
and other essential services. 

By keeping critical facilities online when the grid goes down, 
Voltellum gives people the peace of mind that comes from knowing they'll be protected when it matters most. 
By intelligently sharing power with the grid, we help build a more efficient, sustainable, and 
shock-resistant energy system.  

## Invitation 

The transition to a more resilient, sustainable future will take all of us. 
Whether you are a government agency, infrastructure operator, impact investor, or engaged citizen, 
we invite you to join us on this vital journey. 

Together, we can power safety and resilience for communities everywhere.

## The Team

* **Klas Lundgren**, Founder
    * Electrical engineer with experience developing battery electric vehicles.
* **Rasmus Krook**, Co-founder
    * Serial entrepreneur. Founder of Occatio.
          `
        }
      ]
    }
  },
  sv: {
    about: {
      sections: [
        {
          title: "Om Voltellum",
          content: `
# Om Voltellum

På Voltellum är vi pionjärer inom smarta energilagringslösningar för att hålla 
kritisk infrastruktur igång under nödsituationer samtidigt som vi stödjer stabiliteten och
hållbarheten i elnätet. Vårt uppdrag är att skapa en mer motståndskraftig,
hållbar framtid genom att säkerställa att samhällen förblir säkra och stärkta, oavsett vad morgondagen bär med sig.

## Vår historia

Idén till Voltellum föddes i slutet av 2024, kort efter att svenska myndigheter distribuerade broschyren
"Om krisen eller kriget kommer." Denna publikation var ett svar på ökade spänningar i
Europa på grund av Rysslands agerande i Ukraina. Vi blev förvånade över att få reda på att nästan alla svenska skyddsrum saknade
reservenergisystem.

Med vår bakgrund inom utveckling av batteridrivna elfordon såg vi en möjlighet.
Vi föreställde oss att installera stationär batterilagring i svenska skyddsrum och därmed lösa två kritiska problem:
1. Tillgodose det snabbt växande behovet av energilagringslösningar anslutna till elnätet.
2. Förbättra säkerhet, komfort och produktivitet i svenska skyddsrum under tider av beredskap.

Med denna vision föddes Voltellum, med målet att förbättra energisäkerheten och beredskapen i Sverige.

## Påverkan

Sveriges 65 000 skyddsrum, som kan skydda 7 miljoner människor, är bara början.
Globalt sett ökar behovet av motståndskraftig reservkraft i takt med att samhällen prioriterar katastrofberedskap.
Utöver civilförsvar har Voltellums lösningar bred tillämpbarhet inom sjukvård, telekommunikation,
och andra viktiga tjänster.

Genom att hålla kritiska anläggningar online när elnätet går ner,
ger Voltellum människor sinnesro som kommer från vetskapen att de kommer att skyddas när det är som viktigast.
Genom att intelligent dela kraft med elnätet hjälper vi till att bygga ett mer effektivt, hållbart och
stöttåligt energisystem.

## Inbjudan

Övergången till en mer motståndskraftig och hållbar framtid kommer att kräva oss alla.
Oavsett om du är en statlig myndighet, infrastrukturoperatör, effektinvesterare eller engagerad medborgare,
bjuder vi in dig att följa med oss på denna viktiga resa.

Tillsammans kan vi driva säkerhet och motståndskraft för samhällen överallt.

## Teamet

* **Klas Lundgren**, Grundare
    * Elektroingenjör med erfarenhet av att utveckla batteridrivna elfordon.
* **Rasmus Krook**, Medgrundare
    * Serieentreprenör. Grundare av Occatio.
          `
        }
      ]
    }
  }
};

export async function parseMarkdown(markdownContent) {
  const result = await remark()
    .use(html)
    .process(markdownContent);
  return result.toString();
}