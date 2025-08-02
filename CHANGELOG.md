# Changelog

## 1.1.0 (2025-08-02)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/Find-AI/find-ai-node/compare/v1.0.0...v1.1.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#46](https://github.com/Find-AI/find-ai-node/issues/46)) ([1c0fd50](https://github.com/Find-AI/find-ai-node/commit/1c0fd505b49f38dbe8310c648665d60f547ed4c5))
* **api:** manual updates ([#23](https://github.com/Find-AI/find-ai-node/issues/23)) ([8ab7dcb](https://github.com/Find-AI/find-ai-node/commit/8ab7dcb6698006a0c2677513270e51a229cc97f3))
* **api:** manual updates ([#24](https://github.com/Find-AI/find-ai-node/issues/24)) ([d38b3d3](https://github.com/Find-AI/find-ai-node/commit/d38b3d373afa4fe6536b244a0a3baad47fa50f1d))
* **client:** accept RFC6838 JSON content types ([#47](https://github.com/Find-AI/find-ai-node/issues/47)) ([63c5ffe](https://github.com/Find-AI/find-ai-node/commit/63c5ffe1791d66c66bf762528aef3feafe2889cd))
* **client:** send `X-Stainless-Timeout` header ([#42](https://github.com/Find-AI/find-ai-node/issues/42)) ([d8509b5](https://github.com/Find-AI/find-ai-node/commit/d8509b568aa0044a827eb4a44f477b995d224567))
* **internal:** make git install file structure match npm ([#30](https://github.com/Find-AI/find-ai-node/issues/30)) ([646b8f8](https://github.com/Find-AI/find-ai-node/commit/646b8f8b0a73252ff78030c06b26734675ea4feb))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#55](https://github.com/Find-AI/find-ai-node/issues/55)) ([e8645a2](https://github.com/Find-AI/find-ai-node/commit/e8645a2953a42f53bcd7140fec422455953a0508))
* avoid type error in certain environments ([#51](https://github.com/Find-AI/find-ai-node/issues/51)) ([ddbf5e5](https://github.com/Find-AI/find-ai-node/commit/ddbf5e5e4789a1605d023dfe605c4fd98776dc7c))
* **client:** fix export map for index exports ([#43](https://github.com/Find-AI/find-ai-node/issues/43)) ([e8f92c4](https://github.com/Find-AI/find-ai-node/commit/e8f92c4c67befdc2176457f1cb3d42b9973baa5a))
* **client:** normalize method ([#36](https://github.com/Find-AI/find-ai-node/issues/36)) ([d09c977](https://github.com/Find-AI/find-ai-node/commit/d09c9776c7c5cf1cd9361ab09b2050b9689b622e))
* **client:** send `X-Stainless-Timeout` in seconds ([#53](https://github.com/Find-AI/find-ai-node/issues/53)) ([67f1dc1](https://github.com/Find-AI/find-ai-node/commit/67f1dc17a164614d9b9805d5fab06b4aa0f87de7))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#52](https://github.com/Find-AI/find-ai-node/issues/52)) ([5a006e8](https://github.com/Find-AI/find-ai-node/commit/5a006e84fcffa1f16d359751ae14726b86001a7c))
* **mcp:** remove unused tools.ts ([#56](https://github.com/Find-AI/find-ai-node/issues/56)) ([b3a4397](https://github.com/Find-AI/find-ai-node/commit/b3a4397568edc25bb50aaa8f05f36424d3d6773f))


### Chores

* **ci:** add timeout thresholds for CI jobs ([52b6112](https://github.com/Find-AI/find-ai-node/commit/52b611298d8e96890d21588ca37ee10a5f4f9964))
* **ci:** bump node version for release workflows ([49f7662](https://github.com/Find-AI/find-ai-node/commit/49f76629de56ac48a05a3fd106c1192e7af18c59))
* **ci:** only use depot for staging repos ([2ef6666](https://github.com/Find-AI/find-ai-node/commit/2ef666665aa4169afad9cbc8facb1c416ca6bb83))
* **client:** minor internal fixes ([62bb33e](https://github.com/Find-AI/find-ai-node/commit/62bb33edf321cdc696dd077bcce08b17e2d76ed2))
* **exports:** cleaner resource index imports ([#49](https://github.com/Find-AI/find-ai-node/issues/49)) ([cc69bdd](https://github.com/Find-AI/find-ai-node/commit/cc69bdd42def13b5fa4f3645ec24c458ddbdc819))
* **exports:** stop using path fallbacks ([#50](https://github.com/Find-AI/find-ai-node/issues/50)) ([d118178](https://github.com/Find-AI/find-ai-node/commit/d1181788fc883bd3d594166e13a927a6669c07a5))
* **internal:** add aliases for Record and Array ([#54](https://github.com/Find-AI/find-ai-node/issues/54)) ([5748d9a](https://github.com/Find-AI/find-ai-node/commit/5748d9a2d1745bd4e5397b8400e00a9a6f38152a))
* **internal:** add test ([#41](https://github.com/Find-AI/find-ai-node/issues/41)) ([415a878](https://github.com/Find-AI/find-ai-node/commit/415a87891e17c92376700f925f0593fb39a251f5))
* **internal:** bump cross-spawn to v7.0.6 ([#32](https://github.com/Find-AI/find-ai-node/issues/32)) ([6696e05](https://github.com/Find-AI/find-ai-node/commit/6696e058d9f3b64c1f19e8460118582f1b243764))
* **internal:** codegen related update ([999a1cb](https://github.com/Find-AI/find-ai-node/commit/999a1cb62f29b8e1378e816c88a227047f2df893))
* **internal:** codegen related update ([#37](https://github.com/Find-AI/find-ai-node/issues/37)) ([12083c3](https://github.com/Find-AI/find-ai-node/commit/12083c3254adf9f61ddfe63ee9dc1e5de9ee1880))
* **internal:** codegen related update ([#38](https://github.com/Find-AI/find-ai-node/issues/38)) ([3b0a93e](https://github.com/Find-AI/find-ai-node/commit/3b0a93e91353e9df4571010d5ff5d08ad272b99a))
* **internal:** codegen related update ([#39](https://github.com/Find-AI/find-ai-node/issues/39)) ([741ad73](https://github.com/Find-AI/find-ai-node/commit/741ad73322dd8cc99c4780b3180ae6a1bc24cc3b))
* **internal:** codegen related update ([#40](https://github.com/Find-AI/find-ai-node/issues/40)) ([c63533b](https://github.com/Find-AI/find-ai-node/commit/c63533bc73d5af46bdbc7493ad5f0daf4537ee64))
* **internal:** fix devcontainers setup ([#44](https://github.com/Find-AI/find-ai-node/issues/44)) ([0479f7e](https://github.com/Find-AI/find-ai-node/commit/0479f7ebccc8a0278372a30f56ad8983591c0eac))
* **internal:** fix some typos ([#35](https://github.com/Find-AI/find-ai-node/issues/35)) ([d07672e](https://github.com/Find-AI/find-ai-node/commit/d07672e9f3bb0694cb7b7b47f54bb65b944cbeb0))
* **internal:** pass props through internal parser ([#22](https://github.com/Find-AI/find-ai-node/issues/22)) ([3eaa21b](https://github.com/Find-AI/find-ai-node/commit/3eaa21b6e114439194af8059470addbd0bcc917d))
* **internal:** reduce CI branch coverage ([b75495f](https://github.com/Find-AI/find-ai-node/commit/b75495f98de5c3f561cd237a46aa19fc180bcc15))
* **internal:** remove extra empty newlines ([#48](https://github.com/Find-AI/find-ai-node/issues/48)) ([72fa890](https://github.com/Find-AI/find-ai-node/commit/72fa890b0f10c880d1453324584e423ab2943e61))
* **internal:** remove unnecessary getRequestClient function ([#31](https://github.com/Find-AI/find-ai-node/issues/31)) ([e6a5b74](https://github.com/Find-AI/find-ai-node/commit/e6a5b742e45e01fff6c57884c9a698bfcb445738))
* **internal:** update isAbsoluteURL ([#34](https://github.com/Find-AI/find-ai-node/issues/34)) ([3a84273](https://github.com/Find-AI/find-ai-node/commit/3a842738d6775d17ceb4b05e23e16dd35bf966a6))
* **internal:** upload builds and expand CI branch coverage ([867ec2d](https://github.com/Find-AI/find-ai-node/commit/867ec2de5065afca0d1ac2e830a6dec1e8d3ae99))
* rebuild project due to codegen change ([#25](https://github.com/Find-AI/find-ai-node/issues/25)) ([3fdef32](https://github.com/Find-AI/find-ai-node/commit/3fdef32f7ff2c71456512937785753acd54556fd))
* rebuild project due to codegen change ([#26](https://github.com/Find-AI/find-ai-node/issues/26)) ([992ddc9](https://github.com/Find-AI/find-ai-node/commit/992ddc92f2b97a62ca9812c4e214333836cb4f63))
* rebuild project due to codegen change ([#27](https://github.com/Find-AI/find-ai-node/issues/27)) ([3388897](https://github.com/Find-AI/find-ai-node/commit/3388897be9a1c9af5822be73369d55b68cad3c12))
* remove redundant word in comment ([#29](https://github.com/Find-AI/find-ai-node/issues/29)) ([d4c2064](https://github.com/Find-AI/find-ai-node/commit/d4c206487d72fa7c3b76f9bb4ece70a1edf5e6c3))
* **types:** nicer error class types + jsdocs ([#33](https://github.com/Find-AI/find-ai-node/issues/33)) ([c75ad92](https://github.com/Find-AI/find-ai-node/commit/c75ad92bd8e35319bd9cad8bcf1c644770164d7a))


### Documentation

* **readme:** fix typo ([c0eec7d](https://github.com/Find-AI/find-ai-node/commit/c0eec7dde97e3e4fe6581a1ca730e4a4627ed6a7))
* remove suggestion to use `npm` call out ([#28](https://github.com/Find-AI/find-ai-node/issues/28)) ([1f98439](https://github.com/Find-AI/find-ai-node/commit/1f984392157b9671976fe30f26e355cf4726a152))
* update URLs from stainlessapi.com to stainless.com ([#45](https://github.com/Find-AI/find-ai-node/issues/45)) ([ed8e87b](https://github.com/Find-AI/find-ai-node/commit/ed8e87bf149ca908ec35e5a092d09c0ddedf8228))

## 1.0.0 (2024-10-08)

Full Changelog: [v0.1.0-alpha.5...v1.0.0](https://github.com/Find-AI/find-ai-node/compare/v0.1.0-alpha.5...v1.0.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#18](https://github.com/Find-AI/find-ai-node/issues/18)) ([483c186](https://github.com/Find-AI/find-ai-node/commit/483c18640054d39a60e494715bad8b87a1fc2562))

## 0.1.0-alpha.5 (2024-10-02)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/Find-AI/find-ai-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** OpenAPI spec update via Stainless API ([#14](https://github.com/Find-AI/find-ai-node/issues/14)) ([1048891](https://github.com/Find-AI/find-ai-node/commit/1048891f4159cb2ffcd37e68fb1ea8ffb8190366))


### Chores

* **internal:** codegen related update ([#16](https://github.com/Find-AI/find-ai-node/issues/16)) ([ad22995](https://github.com/Find-AI/find-ai-node/commit/ad2299542b64059e16b1d8f45c96419bcc66f1eb))

## 0.1.0-alpha.4 (2024-09-26)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/Find-AI/find-ai-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** manual updates updated ([#11](https://github.com/Find-AI/find-ai-node/issues/11)) ([b31020a](https://github.com/Find-AI/find-ai-node/commit/b31020aae1e3aba52c213f3ac6bdb9106214a6e2))

## 0.1.0-alpha.3 (2024-09-26)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/Find-AI/find-ai-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Chores

* **internal:** codegen changes ([#7](https://github.com/Find-AI/find-ai-node/issues/7)) ([4a41457](https://github.com/Find-AI/find-ai-node/commit/4a414578bc9cc212003503efdc99990d8d1d6c89))
* **internal:** codegen changes ([#9](https://github.com/Find-AI/find-ai-node/issues/9)) ([2b83ff6](https://github.com/Find-AI/find-ai-node/commit/2b83ff69e3303cab5584553acbe947a4b5a8a9ad))

## 0.1.0-alpha.2 (2024-09-25)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/Find-AI/find-ai-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** OpenAPI spec update via Stainless API ([#4](https://github.com/Find-AI/find-ai-node/issues/4)) ([bb3e7e5](https://github.com/Find-AI/find-ai-node/commit/bb3e7e5630b7be56d312b3dd7f2224396f044ece))

## 0.1.0-alpha.1 (2024-09-25)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/Find-AI/find-ai-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** manual updates ([#1](https://github.com/Find-AI/find-ai-node/issues/1)) ([b074858](https://github.com/Find-AI/find-ai-node/commit/b0748585e018b0680a1944677cd6c3232b304362))
