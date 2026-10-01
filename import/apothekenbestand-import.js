// ============================================================================
// APOTHEKENBESTAND IMPORT – DIRECT PASTE
// Quelle: Apothekenbestand_Positionen_v1_2.xlsx
//
// Anwendung: Tierheim-App öffnen → F12 → Konsole → ALLES KOPIEREN → Enter
//
// Sicherheitsmaßnahmen gegenüber der ersten Version:
//   • Vor dem Schreiben wird ein Backup des bisherigen Speicherstands angelegt.
//   • Ist der vorhandene Speicherstand kein gültiges JSON, wird abgebrochen
//     (statt ihn mit einem leeren Objekt zu überschreiben).
//   • Existiert der Speicherschlüssel nicht, wird nachgefragt – vermutlich
//     speichert die App dann unter einem anderen Schlüssel.
//   • Vorhandene Lieferanten werden nicht überschrieben (ihre Summen bleiben).
//   • Weicht die Positionsanzahl von import_metadata.total_items ab, wird
//     gewarnt (unvollständiger Export).
// ============================================================================

(() => {
    const STORAGE_KEY = 'severins_tierheim_v1';

    console.log('🚀 Starte Apothekenbestand-Import...');

    // Import-Daten
    const apothekenbestandDaten = {"medication_inventory": [{"id": "med_001", "pos_nr": 1, "artikel": "Unbekannt", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "unbekannt", "lieferant": "Zoetis", "beleg_id": "B-2026-001", "belegnummer": "CDiGhpcjY1Z18c", "belegdatum": "10.01.2026", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "", "bemerkung": "Beleg 135,96 € netto – Positionen nur aus Original-PDF", "notiz": "Artikel nachtragen", "erfasst_am": "2026-08-29T21:01:54.839947", "letzter_bestandsabgleich": null}, {"id": "med_002", "pos_nr": 2, "artikel": "Unbekannt", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "unbekannt", "lieferant": "Dechra", "beleg_id": "B-2025-002", "belegnummer": "VR4105039", "belegdatum": "29.12.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "", "bemerkung": "Beleg 235,00 € netto – LS VL4113653 / Best. VAB4311640", "notiz": "Artikel nachtragen", "erfasst_am": "2026-08-29T21:01:54.840060", "letzter_bestandsabgleich": null}, {"id": "med_003", "pos_nr": 3, "artikel": "Unbekannt", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "unbekannt", "lieferant": "Virbac", "beleg_id": "B-2025-003", "belegnummer": "115228", "belegdatum": "11.09.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "", "bemerkung": "Beleg 186,60 € netto – Auftrag T-571957", "notiz": "Artikel nachtragen", "erfasst_am": "2026-08-29T21:01:54.840142", "letzter_bestandsabgleich": null}, {"id": "med_004", "pos_nr": 4, "artikel": "Suprelorin (Deslorelin) Implantat", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "Arzneimittel", "lieferant": "Virbac", "beleg_id": "B-2025-004", "belegnummer": "115218", "belegdatum": "11.09.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "verschreibungspflichtig", "bemerkung": "Beleg 299,50 € netto; Vorkasse. Stärke 4,7 mg oder 9,4 mg aus PDF ergänzen", "notiz": "Menge/Stärke nachtragen", "erfasst_am": "2026-08-29T21:01:54.840222", "letzter_bestandsabgleich": null}, {"id": "med_005", "pos_nr": 5, "artikel": "Unbekannt", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "unbekannt", "lieferant": "WDT", "beleg_id": "B-2025-005", "belegnummer": "94914362", "belegdatum": "10.10.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "", "bemerkung": "Beleg 24,14 € netto – Auftrag 3546993 / Lieferung 0302423357", "notiz": "Artikel nachtragen", "erfasst_am": "2026-08-29T21:01:54.840329", "letzter_bestandsabgleich": null}, {"id": "med_006", "pos_nr": 6, "artikel": "Unbekannt", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "unbekannt", "lieferant": "CP-Pharma", "beleg_id": "B-2025-006", "belegnummer": "882763135", "belegdatum": "10.09.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "", "bemerkung": "Proforma/Vorkasse, Beträge fehlen vollständig", "notiz": "OFFEN – Beleg + Artikel", "erfasst_am": "2026-08-29T21:01:54.840414", "letzter_bestandsabgleich": null}, {"id": "med_007", "pos_nr": 7, "artikel": "EU-Heimtierausweis", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "Sachbedarf", "lieferant": "WDT", "beleg_id": "B-2025-007", "belegnummer": "94923246", "belegdatum": "15.10.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "frei", "bemerkung": "Beleg ohne Betrag. VK netto 12,00 €/Stk", "notiz": "Menge nachtragen", "erfasst_am": "2026-08-29T21:01:54.840489", "letzter_bestandsabgleich": null}, {"id": "med_008", "pos_nr": 8, "artikel": "Nobivac Impfstoff (Typ aus PDF)", "staerke_groesse": "", "einheit": "Ds", "menge": 0, "kategorie": "Impfstoff", "lieferant": "WDT", "beleg_id": "B-2025-007", "belegnummer": "94923246", "belegdatum": "15.10.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "verschreibungspflichtig", "bemerkung": "Beleg ohne Betrag", "notiz": "Artikel/Menge nachtragen", "erfasst_am": "2026-08-29T21:01:54.840563", "letzter_bestandsabgleich": null}, {"id": "med_009", "pos_nr": 9, "artikel": "Equest orales Gel (Moxidectin)", "staerke_groesse": "", "einheit": "Stk", "menge": 0, "kategorie": "Arzneimittel", "lieferant": "WDT", "beleg_id": "B-2025-008", "belegnummer": "94934282", "belegdatum": "23.10.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "verschreibungspflichtig", "bemerkung": "Beleg ohne Betrag. Pferdepräparat", "notiz": "Menge nachtragen", "erfasst_am": "2026-08-29T21:01:54.840634", "letzter_bestandsabgleich": null}, {"id": "med_010", "pos_nr": 10, "artikel": "Ketamin Injektionslösung", "staerke_groesse": "", "einheit": "Fl", "menge": 0, "kategorie": "Arzneimittel", "lieferant": "WDT", "beleg_id": "B-2025-009", "belegnummer": "94977829", "belegdatum": "18.11.2025", "ek_netto_gesamt": null, "ek_netto_einheit": null, "charge": "", "verfall": "", "lagerort": "", "status": "active", "abgabestatus": "verschreibungspflichtig", "bemerkung": "Beleg ohne Betrag. Kein BTM in DE, aber gesondert dokumentationswürdig", "notiz": "Menge/Stärke nachtragen", "erfasst_am": "2026-08-29T21:01:54.840704", "letzter_bestandsabgleich": null}], "categories": {"Arzneimittel": "Arzneimittel", "Impfstoff": "Impfstoff", "Sachbedarf": "Sachbedarf", "unbekannt": "unbekannt"}, "suppliers": {"Zoetis": {"name": "Zoetis", "items_count": 6, "total_spent": 0}, "Dechra": {"name": "Dechra", "items_count": 3, "total_spent": 0}, "Virbac": {"name": "Virbac", "items_count": 2, "total_spent": 0}, "WDT": {"name": "WDT", "items_count": 12, "total_spent": 0}, "CP-Pharma": {"name": "CP-Pharma", "items_count": 1, "total_spent": 0}, "Boehringer Ingelheim": {"name": "Boehringer Ingelheim", "items_count": 4, "total_spent": 0}, "Vetnordic": {"name": "Vetnordic", "items_count": 1, "total_spent": 0}, "IMS Euro": {"name": "IMS Euro", "items_count": 2, "total_spent": 0}, "Praxisdienst": {"name": "Praxisdienst", "items_count": 5, "total_spent": 37.8}, "Alfavet": {"name": "Alfavet", "items_count": 1, "total_spent": 46.64}, "bela-pharm": {"name": "bela-pharm", "items_count": 2, "total_spent": 0}, "LIVISTO": {"name": "LIVISTO", "items_count": 3, "total_spent": 0}, "MSD Tiergesundheit": {"name": "MSD Tiergesundheit", "items_count": 4, "total_spent": 0}, "Unbekannt": {"name": "Unbekannt", "items_count": 4, "total_spent": 5859.42}}, "import_metadata": {"import_date": "2026-08-29T21:01:54.839080", "source_file": "Apothekenbestand_Positionen_v1_2.xlsx", "total_items": 50, "status": "imported"}};

    // --- Plausibilitätsprüfung der Importdaten ------------------------------
    const erwartet = apothekenbestandDaten.import_metadata.total_items;
    const vorhanden = apothekenbestandDaten.medication_inventory.length;
    if (vorhanden !== erwartet) {
        const weiter = confirm(
            '⚠️ Unvollständige Importdaten\n\n' +
            'Laut Metadaten ' + erwartet + ' Positionen, enthalten sind nur ' + vorhanden + '.\n' +
            'Trotzdem importieren?'
        );
        if (!weiter) {
            console.warn('⏹ Import abgebrochen (unvollständige Daten).');
            return;
        }
    }

    // --- Vorhandenen Speicherstand laden -----------------------------------
    const rohdaten = localStorage.getItem(STORAGE_KEY);
    if (rohdaten === null) {
        console.warn('Vorhandene localStorage-Schlüssel:', Object.keys(localStorage));
        const weiter = confirm(
            '⚠️ Schlüssel "' + STORAGE_KEY + '" nicht gefunden.\n\n' +
            'Die App speichert ihre Daten möglicherweise unter einem anderen Namen ' +
            '(siehe Konsole). Trotzdem neu anlegen?'
        );
        if (!weiter) {
            console.warn('⏹ Import abgebrochen (Speicherschlüssel fehlt).');
            return;
        }
    }

    let appData;
    try {
        appData = rohdaten ? JSON.parse(rohdaten) : {};
    } catch (e) {
        console.error('❌ Vorhandene App-Daten sind kein gültiges JSON – Import abgebrochen, nichts verändert.', e);
        return;
    }
    const istObjekt = v => v !== null && typeof v === 'object' && !Array.isArray(v);
    if (!istObjekt(appData) || (appData.apotheke !== undefined && !istObjekt(appData.apotheke))) {
        console.error('❌ Vorhandene App-Daten haben ein unerwartetes Format – Import abgebrochen, nichts verändert.');
        return;
    }

    // --- Backup ------------------------------------------------------------
    if (rohdaten !== null) {
        const backupKey = STORAGE_KEY + '_backup_' + new Date().toISOString().replace(/[:.]/g, '-');
        try {
            localStorage.setItem(backupKey, rohdaten);
            console.log('💾 Backup angelegt: ' + backupKey);
        } catch (e) {
            console.error('❌ Backup konnte nicht gespeichert werden (Speicher voll?) – Import abgebrochen.', e);
            return;
        }
    }

    // --- Apotheke-Modul initialisieren -------------------------------------
    if (!appData.apotheke) appData.apotheke = {};
    if (!Array.isArray(appData.apotheke.medication_inventory)) appData.apotheke.medication_inventory = [];
    if (!appData.apotheke.suppliers) appData.apotheke.suppliers = {};
    if (!appData.apotheke.categories) appData.apotheke.categories = {};

    // --- Positionen mergen (Duplikate per ID überspringen) ------------------
    const existingIds = new Set(appData.apotheke.medication_inventory.map(item => item.id));
    let addedCount = 0, skippedCount = 0;

    apothekenbestandDaten.medication_inventory.forEach(item => {
        if (existingIds.has(item.id)) {
            skippedCount++;
        } else {
            appData.apotheke.medication_inventory.push(item);
            existingIds.add(item.id);
            addedCount++;
        }
    });

    // --- Lieferanten & Kategorien: nur fehlende ergänzen --------------------
    let neueLieferanten = 0;
    Object.entries(apothekenbestandDaten.suppliers).forEach(([key, lieferant]) => {
        if (!appData.apotheke.suppliers[key]) {
            appData.apotheke.suppliers[key] = lieferant;
            neueLieferanten++;
        }
    });
    appData.apotheke.categories = Object.assign({}, apothekenbestandDaten.categories, appData.apotheke.categories);

    appData.apotheke.import_log = appData.apotheke.import_log || [];
    appData.apotheke.import_log.push(Object.assign({}, apothekenbestandDaten.import_metadata, {
        executed_at: new Date().toISOString(),
        added: addedCount,
        skipped: skippedCount
    }));

    // --- Speichern ---------------------------------------------------------
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
        console.error('❌ Speichern fehlgeschlagen – der bisherige Stand ist unverändert.', e);
        return;
    }

    console.log('✅ IMPORT ERFOLGREICH!');
    console.log('   • Neu hinzugefügt: ' + addedCount + ' Positionen');
    console.log('   • Duplikate übersprungen: ' + skippedCount);
    console.log('   • Gesamt im Bestand: ' + appData.apotheke.medication_inventory.length);
    console.log('   • Lieferanten: ' + Object.keys(appData.apotheke.suppliers).length + ' (neu: ' + neueLieferanten + ')');
    console.log('');
    console.log('Bitte die Seite neu laden (F5) und den Tab "Apotheke" öffnen.');

    if (confirm('✓ Import erfolgreich!\n\nSoll die Seite neu geladen werden?')) {
        location.reload();
    }
})();
