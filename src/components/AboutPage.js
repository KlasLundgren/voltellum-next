// src/components/AboutPage.js
import React from 'react';

const content = {
  en: {
    about: "About Voltellum",
    mainText: "At Voltellum, we are pioneering smart energy storage solutions to keep critical infrastructure running during emergencies while supporting the stability and sustainability of the electric grid. Our mission is to create a more resilient, sustainable future by ensuring communities stay safe and empowered, no matter what tomorrow brings.",
    
    story: "Our Story",
    storyText1: "The idea for Voltellum was born in late 2024, as a response to heightened tensions in Europe and globally. Political instability calls for more robust safety networks, where essential services, like water and electricity, are available to all also in times of crisis.",
    storyText2: "Thanks to our longstanding experience in developing batteries for electric vehicles, we saw an opportunity to improve safety in times of crisis and improve energy storage in Sweden. We envision commissioning stationary battery storage in Swedish shelters, thereby solving two central issues:",
    storyPoints: [
      "Enhancing safety, comfort, and productivity in Swedish shelters during times of emergency preparedness.",
      "Addressing the rapidly growing need for energy storage solutions connected to the power grid."
    ],
    storyConclusion: "Voltellum's mission aims to improve energy security and emergency readiness in Sweden.",
    
    impact: "Impact",
    impactText1: "There are 65,000 shelters in Sweden, which are meant to host up to 7 million people. Each of these shelters could be upgraded thanks to Voltellum's technology, improving safety and locking-in energy security. Shelters are currently Voltellum focus, however, our solutions can be adapted to a number of additional critical sectors, such as healthcare, telecommunications, and other essential services.",
    impactText2: "Voltellum's main goal is to keep critical facilities online when the grid goes down, ensuring that essential services are available to all in times of crisis. We help build a more efficient, sustainable, and shock-resistant energy system.",
    
    invitation: "Invitation",
    invitationText1: "The transition to a more resilient and sustainable future will take all of us. Whether you are a government agency, infrastructure operator, impact investor, or engaged citizen, we invite you to join us on this revolutionary journey.",
    invitationText2: "Together, we bring power safety and resilience for communities everywhere.",
    
    team: "The Team",
    founder: "Founder",
    cofounder: "Co-founder"
  },
  sv: {
    about: "Om Voltellum",
    mainText: "På Voltellum är vi pionjärer inom smarta energilagringslösningar för att hålla kritisk infrastruktur igång under kriser samtidigt som vi stödjer stabilitet och hållbarhet i elnätet. Vår mission är att skapa en mer motståndskraftig, hållbar framtid genom att säkerställa att samhällen förblir säkra och handlingskraftiga, oavsett vad morgondagen för med sig.",
    
    story: "Vår Historia",
    storyText1: "Idén till Voltellum föddes i slutet av 2024, som ett svar på ökade spänningar i Europa och globalt. Politisk instabilitet kräver mer robusta säkerhetsnätverk, där grundläggande tjänster som vatten och el är tillgängliga för alla även i kristider.",
    storyText2: "Tack vare vår långa erfarenhet av att utveckla batterier för elfordon såg vi en möjlighet att förbättra säkerheten i kristider och förbättra energilagringen i Sverige. Vi planerar att installera stationär batterilagring i svenska skyddsrum och därmed lösa två centrala frågor:",
    storyPoints: [
      "Förbättra säkerhet, komfort och produktivitet i svenska skyddsrum under beredskapstider.",
      "Hantera det snabbt växande behovet av energilagringslösningar kopplade till elnätet."
    ],
    storyConclusion: "Voltellums uppdrag syftar till att förbättra energisäkerhet och krisberedskap i Sverige.",
    
    impact: "Påverkan",
    impactText1: "Det finns 65 000 skyddsrum i Sverige, som är avsedda att hysa upp till 7 miljoner människor. Vart och ett av dessa skyddsrum skulle kunna uppgraderas tack vare Voltellums teknik, förbättra säkerheten och säkra energitryggheten. Skyddsrum är för närvarande Voltellums fokus, men våra lösningar kan anpassas till ett antal ytterligare kritiska sektorer, såsom sjukvård, telekommunikation och andra samhällsviktiga tjänster.",
    impactText2: "Voltellums huvudmål är att hålla kritiska anläggningar online när elnätet går ner och säkerställa att samhällsviktiga tjänster är tillgängliga för alla i kristider. Vi hjälper till att bygga ett mer effektivt, hållbart och chocktåligt energisystem.",
    
    invitation: "Inbjudan",
    invitationText1: "Övergången till en mer motståndskraftig och hållbar framtid kräver oss alla. Oavsett om du är en myndighet, infrastrukturoperatör, investerare eller engagerad medborgare, bjuder vi in dig att delta i denna revolutionerande resa.",
    invitationText2: "Tillsammans skapar vi kraftsäkerhet och motståndskraft för samhällen överallt.",
    
    team: "Teamet",
    founder: "Grundare",
    cofounder: "Medgrundare"
  }
};

const AboutPage = ({ language }) => {
  const t = content[language];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
          {/* About Section */}
          <h1 className="text-4xl font-bold mb-6 text-blue-900">{t.about}</h1>
          <p className="text-lg mb-12">{t.mainText}</p>

          {/* Story Section */}
          <h2 className="text-3xl font-bold mb-4 text-blue-900">{t.story}</h2>
          <p className="text-lg mb-6">{t.storyText1}</p>
          <p className="text-lg mb-6">{t.storyText2}</p>
          <ol className="list-decimal list-inside text-lg mb-6 pl-4">
            {t.storyPoints.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ol>
          <p className="text-lg mb-12">{t.storyConclusion}</p>

          {/* Impact Section */}
          <h2 className="text-3xl font-bold mb-4 text-blue-900">{t.impact}</h2>
          <p className="text-lg mb-6">{t.impactText1}</p>
          <p className="text-lg mb-12">{t.impactText2}</p>

          {/* Invitation Section */}
          <h2 className="text-3xl font-bold mb-4 text-blue-900">{t.invitation}</h2>
          <p className="text-lg mb-6">{t.invitationText1}</p>
          <p className="text-lg mb-12">{t.invitationText2}</p>

          {/* Team Section */}
          <h2 className="text-3xl font-bold mb-6 text-blue-900">{t.team}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Klas Lundgren</h3>
              <p className="text-lg text-gray-700 pl-4">{t.founder}</p>
              <p className="text-lg text-gray-900 pl-4">
                {language === 'sv' 
                  ? "Elektroingenjör med erfarenhet av att utveckla batterielektriska fordon."
                  : "Electrical engineer with experience developing battery electric vehicles."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Rasmus Krook</h3>
              <p className="text-lg text-gray-700 pl-4">{t.cofounder}</p>
              <p className="text-lg text-gray-900 pl-4">
                {language === 'sv'
                  ? "Serieentreprenör. Grundare av Occatio."
                  : "Serial entrepreneur. Founder of Occatio."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;