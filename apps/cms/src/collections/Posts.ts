import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt', 'updatedAt'],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 1200,
      },
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) {
          return data
        }

        if (!data.canonicalPath && data.slug) {
          data.canonicalPath = `/blog/${data.slug}`
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      index: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      index: true,
    },
    {
      name: 'updatedAt',
      type: 'date',
      index: true,
    },
    {
      name: 'readingTimeMinutes',
      type: 'number',
      min: 1,
      defaultValue: 5,
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'canonicalPath',
      type: 'text',
    },
    {
      name: 'noindex',
      type: 'checkbox',
      defaultValue: false,
      index: true,
    },
    {
      type: 'collapsible',
      label: 'SEO',
      fields: [
        {
          name: 'seo',
          type: 'group',
          fields: [
            { name: 'title', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'openGraphImage', type: 'text' },
            { name: 'twitterImage', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraphs',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'paragraph',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'bullets',
          type: 'array',
          fields: [
            {
              name: 'bullet',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'quote',
          type: 'textarea',
        },
        {
          name: 'codeInsights',
          type: 'array',
          fields: [
            {
              name: 'insight',
              type: 'textarea',
              required: true,
            },
          ],
          admin: {
            description: 'Danh sách insight ky thuat duoc tong hop tu GitNexus (thay cho Mermaid syntax).',
          },
        },
      ],
    },
  ],
}
