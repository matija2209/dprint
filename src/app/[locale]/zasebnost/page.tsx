import { Metadata } from "next";
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Politika zasebnosti",
  description: "Preberite našo politiko zasebnosti in kako varujemo vaše osebne podatke na D-Print.si.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-16 px-4 md:px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold font-montserrat text-primary mb-2">
            Politika zasebnosti
          </h1>
          <p className="text-gray-50">Varovanje vaših podatkov je naša prioriteta</p>
        </div>

        <Card className="border-t-4 border-t-primary shadow-md">
          <CardContent className="pt-6">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <Lock className="h-8 w-8 " />
                <h2 className="text-2xl font-medium m-0">Pravilnik o zasebnosti</h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="privacy-1">
                  <AccordionTrigger className="text-lg font-medium py-3">
                    1. Varstvo osebnih podatkov
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p className="font-medium">Podatki o upravljavcu:</p>
                    <p>

                      info@D-Print.si
                      D-Print d.o.o.
                      Seliška cesta 6b
                      4260 Bled
                      SI 20511230
                      KISSsoft AG
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy-2">
                  <AccordionTrigger className="text-lg font-medium py-3">
                    2. Zbiranje podatkov
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      Od obiskovalcev spletne strani s pomočjo orodja Google Analytics zbiramo podatke o tem, katere strani
                      na naši spletni strani obiskujete, kako pogosto, koliko časa se tam zadržite, ter podobno. Na podlagi teh
                      podatkov lahko vidimo, koliko obiskovalcev obiskuje naše spletne strani, kateri deli spletne strani jih
                      najbolj zanimajo, ali imajo pri obisku kakšne težave.
                    </p>
                    <p>
                      Od uporabnikov, ki se prijavijo na naše e-novice, zbiramo podatke o njihovem e-poštnem naslovu. Prav tako
                      zbiramo podatke o tem, katere e-novice preberejo, ter, če s klikom na njih obiščejo našo spletno stran,
                      katere obiske opravijo na njej.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy-3">
                  <AccordionTrigger className="text-lg font-medium py-3">
                    3. Namen uporabe podatkov
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      Podatke uporabljamo za izboljšanje naših storitev, prilagajanje vsebin in obveščanje o novostih,
                      ki bi vas lahko zanimale. Na podlagi podatkov lahko izboljšamo naše e-novice, prav tako pa lahko uporabnikom,
                      ki izkažejo interese za posamezne storitve ali novosti, neposredno kontaktiramo.
                    </p>
                    <p>
                      Pojasnjujemo, da remarketing pogostim obiskovalcem spletne strani ter analize uspešnosti naših e-novic
                      izvajano na podlagi člena 6(1)(f) Splošne uredbe osebnih podatkov.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy-4">
                  <AccordionTrigger className="text-lg font-medium py-3">
                    4. Piškotki
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      Piškotke uporabljamo za izboljšanje vaše izkušnje brskanja, prikazovanje prilagojenih oglasov
                      ali vsebine in analizo našega prometa. S klikom na gumb "Dovolim piškotke" se strinjate z našo uporabo piškotkov.
                    </p>
                    <p>
                      Piškotki so majhne tekstovne datoteke, ki jih spletna stran shrani na vaš računalnik ali mobilno napravo
                      ob vašem obisku. Ti piškotki nam omogočajo, da si zapomnimo vaše preference in vam nudimo boljšo uporabniško izkušnjo.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy-5">
                  <AccordionTrigger className="text-lg font-medium py-3">
                    5. Vaše pravice
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <p>
                      Posameznike opozarjamo, da imajo v skladu s Splošno uredbo določene pravice (do dostopa do svojih podatkov,
                      do popravka morebitnih napačnih podatkov, idr.). Te pravice lahko uveljavljajo s pisnim zahtevkom,
                      naslovljenih na naš zgoraj naveden kontaktni naslov.
                    </p>
                    <p>
                      Vsak uporabnik ima pravico, da kadarkoli od nas pisno zahteva odjavo prejemanja obvestil na svoj e-poštni
                      naslov, oziroma lahko to odjavo izvrši s klikom na ustrezno povezavo v vsaki posamezni e-novici.
                    </p>
                    <p>
                      V primeru, da ne bi bili zadovoljni z našim odgovorom, imajo možnost pritožbe na pristojni nadzorni organ
                      (Informacijski pooblaščenec, Zaloška 59, 1000 Ljubljana, gp.ip@ip-rs.si) oziroma zahtevati sodno varstvo.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8  p-4 rounded-lg border  flex items-start gap-3">
                <Shield className="h-6 w-6  flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Zaveza k varovanju vaših podatkov</h3>
                  <p className="text-sm text-gray-600 m-0">
                    Z vašimi osebnimi podatki ravnamo odgovorno in povsem v skladu z veljavno zakonodajo ter
                    ustaljenimi tržnimi praksami. Vaše zaupanje je naša prioriteta.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-50">
          <p>© 2025 D-Print d.o.o. Vse pravice pridržane.</p>
        </div>
      </div>
    </main>
  );
} 