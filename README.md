# Grimstad Ultraløp

Dette er den offisielle nettsiden for Grimstad Ultraløp, som arrangeres 18. mai 2025. Nettsiden er bygget med NextJS og Tailwind CSS og drives av Vercel.

## Funksjoner

- **Nedtelling:** Dynamisk nedtelling til løpsstart, som endrer seg til en tidtaker under løpet
- **Løpsinformasjon:** Detaljert informasjon om løypen, tidspunkter og praktiske detaljer
- **Live-tracking:** Visning av løpernes GPS-posisjoner under løpet via Strava Beacon og Garmin LiveTrack
- **Resultatliste:** Visning av resultater etter at løpet er avsluttet

## Teknologier

- [NextJS](https://nextjs.org/) - React-rammeverk for server-side rendering
- [TypeScript](https://www.typescriptlang.org/) - Typet JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS-rammeverk
- [Vercel](https://vercel.com/) - Hosting og kontinuerlig integrasjon

## Løpsfaser

Nettsiden endrer seg automatisk basert på løpets fase:

1. **Før løpet:** Viser nedtelling og viktig informasjon før løpet
2. **Under løpet:** Viser timer og live-tracking av løperne
3. **Etter løpet:** Viser resultatliste og oppsummering

## Oppsett for utvikling

For å sette opp prosjektet lokalt:

```bash
# Klone prosjektet
git clone https://github.com/ditt-brukernavn/grimstad-ultrarun.git
cd grimstad-ultrarun

# Installere avhengigheter
npm install

# Starte utviklingsserveren
npm run dev
```

Besøk deretter `http://localhost:3000` i nettleseren din.

## Redigere live-tracking og resultater

For å oppdatere live-tracking og resultater:

1. Åpne `/lib/constants.ts`
2. Oppdater `LIVE_TRACKING_LINKS` og `RESULTS_TEMPLATE` med nye data
3. Commit og push endringene (Vercel vil automatisk publisere den nye versjonen)

## Bidrag

Bidrag og forslag til forbedringer er velkomne. Opprett en Issue eller Pull Request for å diskutere endringer.

## Lisens

Dette prosjektet er lisensiert under MIT-lisensen - se [LICENSE](LICENSE) for detaljer.

## Kontakt

Ved spørsmål eller problemer, kontakt arrangørene av Grimstad Ultraløp.