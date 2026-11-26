# UAV Infrastructure Inspection Research

An academic project website built with Next.js App Router, React and TypeScript.

## Local development

Use a recent Node.js version supported by Next.js 16 (Node.js 20.9 or later).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Production build: `pnpm build`. Production server: `pnpm start`.

## Vercel deployment

Import `pan-siqi/T20251602_uav_inspection_website`, branch `main`.

| Setting | Value |
| --- | --- |
| Application / Framework Preset | Next.js |
| Root Directory | ./ (repository root) |
| Build Command | pnpm run build |
| Output Directory | Next.js default; keep Override disabled |
| Install Command | Automatic (pnpm, detected from pnpm-lock.yaml) |
| Environment variables | None required |

`vercel.json` declares the framework and build command. Next.js generates `.next`; this is not a static-export project. Do not set Output Directory to `public`, `dist` or `out`. Dependencies and generated build output are excluded from Git.

## Routes

- `/`: research introduction and floating UAV visual.
- `/team`: six members and the interdisciplinary framework.
- `/dataset`: original inspection imagery, annotation views and explanatory diagrams.

## Content maintenance

- `data/project.json`: project details. Display ID is T20261602 as requested; the repository and original proposal use T20251602.
- `data/team.json`: member names, academic thrusts, responsibilities and optional photo URLs.
- `data/samples.json`: 13 original images and 39 supplied visualization assets, suspected labels and source metadata. Original images are lossless WebP copies. Supplied annotations contain simulated scores and are not verified model inference or ground truth.
- `data/annotation-principles.json`: three user-supplied principle diagrams and corresponding descriptions.
- `data/videos.json`: currently empty. Add video entries matching `data/types.ts` to enable on-demand playback. No actual raw videos were available in the supplied collection.

Gallery labels: Original Frame, Bounding Box Annotation, Segmentation-style Annotation and Inspection Visualization. The three processed views are YOLO-style, SAM/segmentation-style and inspection-platform-style visualizations; style names do not establish model provenance.

## Media

Use `/media/...` URLs for files under `public/media`, or external HTTPS URLs. Keep large videos in object storage/CDN with byte-range support and correct content types rather than in Git. Windows local disk paths cannot be served by Vercel. Member photos and extraction metadata can be added when available.

## Design and verification

Warm ivory, muted gold and espresso palette; responsive desktop/tablet/mobile layouts; shared heading scale and natural text wrapping; reduced-motion support. The gallery supports filtering, four view modes, image zoom and keyboard-accessible dialogs. Principle diagrams have separate zoom viewers and are not counted as dataset samples.

Reference design language: https://sunflower-labs.com/#how-it-works
