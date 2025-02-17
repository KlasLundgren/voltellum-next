// src/components/SolutionPage.js
import React from 'react';
import { Battery, Shield, TrendingUp, AlertTriangle, Sun, Building, Zap, Power, BatteryPlus} from 'lucide-react';

const SolutionPage = ({ language }) => {
  const specs = {
    plusStandard: {
      title: language === 'sv' ? "Standardsystem Plus" : "Standard System Plus",
      specs: [
        { label: language === 'sv' ? "Lagringskapacitet" : "Storage Capacity", value: "100 kWh" },
        { label: language === 'sv' ? "Nominell AC-spänning" : "Nominal AC Voltage", value: "230/400 VAC" },
        { label: "DC Voltage", value: "48V" },
        { label: language === 'sv' ? "Max effekt" : "Max Power", value: "100 kW" },
        { label: language === 'sv' ? "Max AC-ström" : "Max AC Current", value: "160 A" },
        { label: language === 'sv' ? "Växelriktartyp" : "Inverter Type", value: language === 'sv' ? "Hybrid" : "Hybrid" }
      ]
    },
    standard: {
      title: language === 'sv' ? "Standardsystem" : "Standard System",
      specs: [
        { label: language === 'sv' ? "Lagringskapacitet" : "Storage Capacity", value: "50 kWh" },
        { label: language === 'sv' ? "Nominell AC-spänning" : "Nominal AC Voltage", value: "230/400 VAC" },
        { label: "DC Voltage", value: "48V" },
        { label: language === 'sv' ? "Max effekt" : "Max Power", value: "50 kW" },
        { label: language === 'sv' ? "Max AC-ström" : "Max AC Current", value: "80 A" },
        { label: language === 'sv' ? "Växelriktartyp" : "Inverter Type", value: language === 'sv' ? "Hybrid" : "Hybrid" }
      ]
    }
  };

  return (
    
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">
          {language === 'sv' ? "Vår Lösning" : "Our Solution"}
        </h1>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Emergency Preparedness */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'sv' ? "Krisberedskap" : "Emergency Preparedness"}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {language === 'sv' 
                ? "I en värld av ökande osäkerhet behöver skyddsrum och beredskapsinrättningar pålitlig reservkraft för att skydda liv under långvariga strömavbrott. Voltellums modulära batterisystem, med storlekar från 60 till över 100 kWh, ger dagar av autonom kraft för viktiga system som ventilation, belysning och kommunikation, och ger människor livsviktigt skydd i kristider."
                : "In a world of increasing uncertainty, air-raid shelters and emergency facilities need reliable backup power to protect lives during prolonged blackouts. Voltellum's modular battery systems, sized from 60 to over 100 kWh, provide days of autonomous power for essential systems like ventilation, lighting and communications, giving people vital refuge in times of crisis."}
            </p>
          </div>

          {/* Grid Support */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'sv' ? "Nätverksstöd" : "Grid Support"}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'sv'
                ? "Voltellums batterier gör mer än att sitta overksamma i väntan på katastrofer. När de är anslutna till nätet tillhandahåller våra intelligenta system värdefulla tjänster som toppbelastningsutjämning, frekvensreglering, integration av förnybar energi och lokal mikronätsbildning under strömavbrott."
                : "Voltellum's batteries do more than sit idle waiting for disasters. When connected to the grid, our intelligent systems provide valuable services like peak shaving, frequency regulation, renewable integration, and local microgrid formation during outages."}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {language === 'sv'
                ? "Genom att delta i elmarknaderna får våra kunder en ny intäktsström samtidigt som de stödjer övergången till ett renare, mer distribuerat nät."
                : "By participating in electricity markets, our customers gain a new revenue stream while supporting the transition to a cleaner, more distributed grid."}
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          {language === 'sv' ? "Tekniska Specifikationer" : "Technical Specifications"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Standard System Plus */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">{specs.plusStandard.title}</h3>
            </div>
            <div className="space-y-4">
              {specs.plusStandard.specs.map((spec, index) => (
                <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Standard System */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Battery className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">{specs.standard.title}</h3>
            </div>
            <div className="space-y-4">
              {specs.standard.specs.map((spec, index) => (
                <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="font-medium text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SolutionPage;