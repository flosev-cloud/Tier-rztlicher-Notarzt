https://www.vibecodeapp.com/s/cmkeon7en000807hqvmsj8cfp

## Apothekenbestand-Import

`import/apothekenbestand-import.js` übernimmt die Positionen aus
`Apothekenbestand_Positionen_v1_2.xlsx` in das Apotheke-Modul der App
(localStorage-Schlüssel `severins_tierheim_v1`).

1. Tierheim-App im Browser öffnen → F12 → Konsole
2. Inhalt der Datei vollständig einfügen → Enter
3. Rückfragen bestätigen, Seite neu laden, Tab „Apotheke“ öffnen

Vor dem Schreiben wird ein Backup unter `severins_tierheim_v1_backup_<Zeitstempel>`
angelegt. Wiederherstellen in der Konsole (`<Backup-Schlüssel>` ersetzen):

```js
const b = localStorage.getItem('<Backup-Schlüssel>');
if (b === null) console.error('Backup nicht gefunden'); else localStorage.setItem('severins_tierheim_v1', b);
```

Hinweis: Der aktuelle Export enthält 10 von 50 Positionen (laut `import_metadata`).
