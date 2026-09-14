---
title: "Zelftests van MIND, als data voor de app"
bron: formulier.wijzijnmind.nl, via de formulier-JSON op cdn.novti.io
opgehaald: 2026-09-14
---

# Zelftests

De twaalf zelftests van MIND, opgehaald met `scripts/fetch-zelftests.mjs` uit
het formulier dat de testpagina zelf laadt. Per test: de intro van de pagina,
de stellingen met de score per antwoord, hoe de score wordt berekend en de
uitslagteksten met hun voorwaarden. Woordelijk van MIND; de contactvelden en
de aanmeldknoppen zijn weggelaten. De app rekent de score op het toestel en
bewaart antwoorden noch uitslag (zie `docs/datamodel.md`).

| Test | Vragen | Uitslagen | Score | Bestand |
|---|---|---|---|---|
| Angsttest | 7 | 4 | som | [angsttest.json](angsttest.json) |
| Assertiviteit test | 10 | 3 | som | [assertiviteit_stress.json](assertiviteit_stress.json) |
| Denkgewoonten test | 10 | 3 | som | [stresstest_denkgewoonten.json](stresstest_denkgewoonten.json) |
| Depressietest | 9 | 5 | som | [depressietest.json](depressietest.json) |
| FOMO test | 10 | 3 | gemiddelde | [fomo-test.json](fomo-test.json) |
| Herfstdip of winterblues zelftest | 10 | 3 | som | [herfst_winterblues_test.json](herfst_winterblues_test.json) |
| Hoe mentaal fit ben jij op het werk? | 11 | 3 | som | [mentaal_fit_op_je_werk_test.json](mentaal_fit_op_je_werk_test.json) |
| Ontspanning en Herstel test | 10 | 3 | som | [stresstest-ontspanning-en-herstel.json](stresstest-ontspanning-en-herstel.json) |
| Piekertest | 11 | 5 | som | [piekertest.json](piekertest.json) |
| Stress-test | 10 | 3 | som | [stresstest.json](stresstest.json) |
| Zelfvertrouwentest | 10 | 3 | som | [zelfvertrouwen.json](zelfvertrouwen.json) |
| Zelfstigmatest | 20 | 4 | gemiddelde | [zelfstigma-test.json](zelfstigma-test.json) |
