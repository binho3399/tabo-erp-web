import path from 'node:path'
import { fileURLToPath } from 'node:url'

import type { CollectionConfig } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(dirname, '../../media'),
    mimeTypes: ['image/*'],
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 320,
        height: 180,
        position: 'centre',
      },
      {
        name: 'card',
        width: 640,
        height: 360,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1280,
        height: 720,
        position: 'centre',
      },
    ],
    formatOptions: {
      format: 'webp',
      options: {
        quality: 78,
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
