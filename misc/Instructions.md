# Instructions

Loipon ta posts einai se markdown (xoris HTML). Kathe arthro einai se morfi enos folder to opio periexei to minimum ena file index.md (p periexei to markdown) kai to cover photo.

Cheatsheet markdown (Apo to inline HTML kai kato den einai valid se mas)https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## Paradigma Markdown

```md
---
path: "/enjoying-7-nighs-sw-usa"
date: "2018-09-03"
title: "Visiting the southwest, the land of canyons."
tags: ["Usa", "canyon", "hiking", "southwest"]
cover: "./mexico.jpg"
country: "Usa"
type: "article"
duration: 7
itinerary: ["Death Valley", "Sequoia National Park", "Zion National Park", "Bryce canyon",
"Antelope canyon", "Monument Valley", "Grand Canyon"]
km: 3200
coordinates: [
    { coordinates: [-112.1401, 36.0544], country: 'Usa' },
    { coordinates: [-116.9325, 36.5323], country: 'Usa' },
    { coordinates: [-113.0263, 37.2982], country: 'Usa' },
]
---

# Preparation

We had been longing to do this trip for quite a long time. Beautiful sceneries, awesome hikings, breathtaking views,
amazing sunrises and sunsets, pallets full of colors.
This trip is packed with excitement.
```

## Photos

Valume photos xrisimopiontas to `![](paros.jpg)`
oi photos prepei na einai sto idio folder.

## Headings

Ena # simeni kirios titlos, oso parapano # valeis toso pio ligo simantikos en o titlos. Kalo tha itan na valame mexri ta 4 #

## Tags

Osa einai metaksi `---` einai ta legomena tags. To ipolipo einai to keimeno.

### Required

* **path** to pos fenete to url sto site. **prepei na ksekina kai na telionei me /**. Xoris allo / sto endiameso. /polla-kala/ **valid**. /polla/kalla/ **not valid**
* **date** imerominia release tou arthru
* **title** o titlos tou arthru. Prepei na einai kato apo 60 characters
* **tags** ta prota 4 tha fenonte aman to keimeno den einai expanded, opote na valeis sta prota 4 ta pio simantika. lowercase ola
* **cover** i cover photo tou arthru
* **country** i xora, lowercase ola
* **type** article i photo i friends (gia na ksexorizume ta diafora types)

### Optional

* **author** pios egrapse to keimeno. default einai oa
* **duration** poses nixtes dierkise to taksidi
* **itinerary** lista me topous p epiame
* **km** posa km sinolika xoris tis ptisis apo kai pros parisi. diladi ta km on the ground
* **photos** lista me photos p tha mpun sto telos tou arthru kai tha fenonte me lightbox. Mono sta photo arthra
* **coordinates** lista me ta coordinates gia na mpun ta pins sto xarti
* **featured** an tha einai sta tria prota tou index

## Custom components

* mporeis na xrisimopiissis to pio kato gia na doseis kapio warning i tip

```md
<tip title="Flexible accomodation!">
Keep in mind that even with the best preparation around, your plans might change.
For instance we had to cancel our yosemite visit due to fires and replace it. Having booked everything with free cancellation to the very last day enabled us to change plans event at the last minute.
</tip>
```

* mporeis na xrisimopiisis to pio kato gia na valeis photos dipla p tin alli

```md
<photo-composition perline="2" photos='["paros-naxos/paros.jpg", "paros-naxos/monument.png"]'>

![](paros.jpg)
![](monument.png)
</photo-composition>
```

## Friends posts

* ta friends posts den fenonte pano sto xarti kai den metrun sta stats. Opote den xriazete na simplirothun ta **duration**, **itinerary**, **km**, **coordinates**. Den tha parthun ipopsi outos i allos.
