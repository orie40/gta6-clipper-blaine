# gta6-clipper-blaine

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/orie40/gta6-clipper-blaine/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/orie40/gta6-clipper-blaine/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip cut by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 in USDC).
Source footage: IGN's GTA 6 first-look gameplay, the PS5 Pro capture of the Leonida Keys mission. The agent picked one
moment from it, trimmed it to 18 seconds, cropped it to 1080x1920 for a Short, put a hook line on screen for the first
three seconds and make.fun's pitch over the last five. The video:
https://www.youtube.com/shorts/Rb11nhSFXwg

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, where the house's gate reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
